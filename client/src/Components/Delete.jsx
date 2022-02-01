import PhoneInput from "../Pages/PhoneInput";
import React, { useState, useEffect } from "react";
import Axios from "axios";

const Delete = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Submit();
    get();
  }, []);

  const get = () => {
    Axios.post("http://localhost:3001/admin/all", {}).then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  };

  const Del = (props) => {
    console.log(props);
    Axios.post("http://localhost:3001/admin/delete", { id: props });

    window.location.reload();
  };

  return (
    <div className="bg-light" > 

      <table class="table mt-5">
        <thead class="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">BRAND</th>
            <th scope="col">MODEL</th>
            <th scope="col">RAM</th>
            <th scope="col">PROCESSOR</th>
            <th scope="col">CAMERA (MP)</th>
            <th scope="col">COLOR</th>
            <th scope="col">PRICE</th>
            <th scope="col">QUANTITY</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <th scope="row">{item.id}</th>
              <td>{item.brand}</td>
              <td>{item.model}</td>
              <td>{item.ram}</td>
              <td>{item.processor}</td>
              <td>{item.camera} MP</td>
              <td>{item.color}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>
                <button
                  class="btn btn-danger btn-md"
                  onClick={() => {
                    Del(item.id);
                  }}
                >
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Delete;
