import React, { useState } from "react";
import Axios from 'axios'

const Filters = () => {
  const [ram, setRam] = useState("");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [processor, setProcessor] = useState("");
  const [price, setPrice] = useState("");


  const Submit = ()=> {


    Axios.post('http://localhost:3001/filter',{
      ram:ram,
      brand:brand,
      color:color,
      processor:processor,
      price:price,

    }).then(()=>{

      alert("successful")

    })
  }
  
  

  return (
    <div style={{ backgroundColor: "#808080" }}>
      <form>
        <div className="form-row row">
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

          <button type="submit" className="btn btn-primary btn-md col col-md-1" onClick={Submit}>
            Filter
          </button>
        </div>
        <br />
      </form>
    </div>
  );
};

export default Filters;
