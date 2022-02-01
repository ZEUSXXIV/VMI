import React from 'react'
import { useState, useEffect } from "react";
import Axios from "axios";
import { ThemeProvider } from "@emotion/react";
import BasicModal from '../Components/Modal';

const Order = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
      // Submit();
      get();
    }, []);
  
    const get = () => {
      Axios.post("http://localhost:3001/order/view", {}).then((response) => {
        console.log(response.data);
        setData(response.data);
      });
    };

    return (
        <div className="bg-light" > 

        <table class="table mt-5">
          <thead class="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">BRAND</th>
              <th scope="col">MODEL</th>
              <th scope="col">NAME</th>
              <th scope="col">PRICE</th>
              <th scope="col">DATE</th>          
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr>
                <th scope="row">{item.order_id}</th>
                <td>{item.brand}</td>
                <td>{item.model}</td>
                <td>{item.name}</td>
                <td>Rs.{item.price}/-</td>
                <td>{item.date}</td>

                
                <td>
                  {/* <button
                    class="btn btn-primary btn-md"
                    onClick={() => {

                    }}
                  >
                    VIEW
                  </button> */}
                  <BasicModal
                  key = {item.order_id}
                  item = {item}

                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
}

export default Order
