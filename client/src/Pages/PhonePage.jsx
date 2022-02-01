import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Axios from "axios";

const PhonePage = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const get = () => {
    Axios.post("http://localhost:3001/phone", { id: id }).then((response) => {
      console.log(response.data);
      setData(response.data[0]);
    });
  };

  const order = () => {
    const user_id = localStorage.getItem("user");
    Axios.post("http://localhost:3001/order/insert", {id:id,user_id:user_id}).then(() => {
      
    });
    alert("Order placed!")
  };

  // console.log(id)
  useEffect(() => {
    console.log(id);
    get();
  }, []);

  return (
    <div
      style={{
        // backgroundColor:"blue"
        backgroundImage:
          "linear-gradient(to right, rgba(0,0,158,0.7), rgba(0,0,255,0.5),rgba(0,0,158,0.7))", height:"98vh"
      }}
    >
      <div >
        <div className="form-row row pt-3">
          <div className="col col-md-5 mr-3  rounded">
            <img
              alt={data.brand + " " + data.model}
              class="object-cover object-center w-full h-full block placeholder"
              src={"../images/" + data.brand + "_" + data.model + ".png"}
            />
          </div>

          <div
            className="col col-md-6 mr-3 ml-3 text-light"
            style={{ textAlign: "canter" }}
          >
            <p className="display-4 pb-4 text-dark font-weight-bold">
              Brand: {data.brand}
            </p>
            <p className="display-4 p-2">Model: {data.model}</p>
            <p className="display-4 p-2">Ram: {data.ram} GB</p>
            <p className="display-4 p-2">Processor: {data.processor}</p>
            <p className="display-4 p-2">Camera: {data.ram} MP</p>
            <p className="display-4 p-2">Price: Rs.{data.price}</p>
            <p className=" p-2" style={{fontSize:"50px"}}>Description: {data.des}</p>
            <button type="button" class="btn btn-outline-warning mt-3" onClick={order}>
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhonePage;
