import React, { useState, Component, useEffect } from "react";
import { Card } from "../Components/Card";
import Axios from "axios";
import { Link } from "react-router-dom";
import Header from "../Components/Header";

const Home = () => {
  const [data, setData] = useState([]);

  const [ram, setRam] = useState("");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [processor, setProcessor] = useState("");
  const [price, setPrice] = useState("");

  const Submit = () => {
    var count = 0;
    if (ram != "") count++;
    if (brand != "") count++;
    if (color != "") count++;
    if (processor != "") count++;
    if (price != "") count++;
    console.log(count);

    if (count == 0) {
      Axios.post("http://localhost:3001/home/all", {}).then((response) => {
        console.log(response.data);
        setData(response.data);
      });
    } else {
      Axios.post("http://localhost:3001/filter", {
        ram: ram,
        brand: brand,
        color: color,
        processor: processor,
        price: price,
        count: count,
      }).then((response) => {
        console.log(response.data);
        setData(response.data);
      });
    }
  };

  useEffect(() => {
    Submit();
    // get();
  }, []);

 
  //get()

  return (
    <>
    <div style={{backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.6),rgba(0,0,0,0.9))"}}>
      <div className = "container" >
        <div className="form-row row pt-3">
          <div className="col col-md-1 mr-3">
            <select
              className="custom-select"
              onChange={(e) => {
                setRam(e.target.value);
              }}
            >
              <option value="">RAM</option>
              <option value="2">2GB</option>
              <option value="3">3GB</option>
              <option value="4">4GB</option>
              <option value="6">6GB</option>
              <option value="8">8GB</option>
            </select>
          </div>

          <div className="col col-md-2 mr-3">
            <select
              className="custom-select"
              onChange={(e) => {
                setBrand(e.target.value);
              }}
            >
              <option value="">BRAND</option>
              <option value="Xiaomi">Xiaomi</option>
              <option value="Sony">Sony</option>
              <option value="Apple">Apple</option>
              <option value="Samsung">Samsung</option>
              <option value="Oppo">Oppo</option>
              <option value="Vivo">Vivo</option>
              <option value="Poco">Poco</option>
            </select>
          </div>

          <div className="col col-md-2 mr-3">
            <select
              className="custom-select"
              onChange={(e) => {
                setColor(e.target.value);
              }}
            >
              <option value="">COLOR</option>
              <option value="Black">Black</option>
              <option value="Blue">Blue</option>
              <option value="White">White</option>
              <option value="Silver">Silver</option>
              <option value="Grey">Grey</option>
            </select>
          </div>

          <div className="col col-md-3 mr-3">
            <select
              className="custom-select"
              onChange={(e) => {
                setProcessor(e.target.value);
              }}
            >
              <option value="">PROCESSOR</option>
              <option value="Snapdragon">SnapDragon</option>
              <option value="Dimensity">Dimensity</option>
              <option value="Helios">Helios</option>
              <option value="Mediatek">MediaTek</option>
              <option value="Apple">Apple A series</option>
            </select>
          </div>

          <div className="col col-md-1 mr-10">
            <select
              className="custom-select"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            >
              <option value="">PRICE</option>
              <option value="5000">5000></option>
              <option value="10000">10000></option>
              <option value="15000">15000></option>
              <option value="20000">20000></option>
              <option value="30000">30000></option>
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-md col col-md-1"
            onClick={Submit}
          >
            Filter
          </button>
        </div>
        <br />
      </div>
      </div>

      <div>
          <section class="text-gray-600 body-font" style={{backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.6),rgba(0,0,0,0.9))"}}>
          <div class="container px-3 py-24 mx-auto ">
            <div class="flex flex-wrap -m-4">
              {data.map((item) => (

                  <Link
                  key={item.id}
                    to={`/phone/${item.id}`}
                    className="lg:w-1/5 md:w-1/2 pr-4 pl-4 w-full bg-light m-4 border border-secondary rounded phone"
                    
                  >
                    <Card
                      
                      id={item.id}
                      model={item.model}
                      brand={item.brand}
                      price={item.price}
                      img={"images/" + item.brand + "_" + item.model + ".png"}
                      desc={item.des}
                    />
                  </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
