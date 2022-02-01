import React, { useState } from "react";
import Axios from 'axios'

const PhoneInput = () => {
  const [ram, setRam] = useState(2);
  const [brand, setBrand] = useState("Xiaomi");
  const [color, setColor] = useState("Black");
  const [processor, setProcessor] = useState("Snapdragon");
  const [camera, setCamera] = useState("")
  const [model, setModel] = useState("")
  const [price, setPrice] = useState("")
  const [quantity, setQuantity] = useState("")
  const [desc, setDesc] = useState("")


  const Submit = ()=> {
    if(ram==""||brand==""||color==""||processor==""||camera==""||model==""||price==""||quantity==""||desc=="")
    {
      alert("incomplete data")
    }
    else{
    Axios.post('http://localhost:3001/admin/add',{
      ram:ram,
      brand:brand,
      color:color,
      processor:processor,
      camera:camera,
      model:model,
      price:price,
      quantity:quantity,
      desc:desc
    }).then(()=>{

      alert("successful")

    })
  }
  
  }

  return (
    <div className="container mt-5 text-light">
      <form>
        <div className="form-row row">
          <label className="col col-md-1 p-1">Ram: </label>
          <div className="col col-md-1">
            <select
              className="custom-select"
              onChange={(e) => {
                setRam(e.target.value);
              }}
            >
              <option value="2">2GB</option>
              <option value="3">3GB</option>
              <option value="4">4GB</option>
              <option value="6">6GB</option>
              <option value="8">8GB</option>
            </select>
          </div>

          <label className="col col-md-1 p-1">Brand: </label>
          <div className="col col-md-2">
            <select
              className="custom-select"
              onChange={(e) => {
                setBrand(e.target.value);
              }}
            >
              <option value="Xiaomi">Xiaomi</option>
              <option value="Sony">Sony</option>
              <option value="Apple">Apple</option>
              <option value="Samsung">Samsung</option>
              <option value="Oppo">Oppo</option>
              <option value="Vivo">Vivo</option>
              <option value="Poco">Poco</option>
            </select>
          </div>

          <label className="col col-md-1 p-1">Color: </label>
          <div className="col col-md-2">
            <select
              className="custom-select"
              onChange={(e) => {
                setColor(e.target.value);
              }}
            >
              <option value="Black">Black</option>
              <option value="Blue">Blue</option>
              <option value="White">White</option>
              <option value="Silver">Silver</option>
              <option value="Grey">Grey</option>
            </select>
          </div>

          <label className="col col-md-1 p-1">Processor: </label>
          <div className="col col-md-3">
            <select
              className="custom-select"
              onChange={(e) => {
                setProcessor(e.target.value);
              }}
            >
              <option value="Snapdragon">SnapDragon</option>
              <option value="Dimensity">Dimensity</option>
              <option value="Helios">Helios</option>
              <option value="Mediatek">MediaTek</option>
              <option value="Apple">Apple A series</option>
            </select>
          </div>
        </div>
        <br />

        <div className="form-row row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity">Model</label>
            <input type="text" className="form-control" id="inputCity" onChange={(e)=>{
                setModel(e.target.value)
            }}/>
          </div>

          <div className="form-group col-md-2">
            <label htmlFor="inputZip">Camera (MP)</label>
            <input type="text" className="form-control" onChange={(e)=>{
                setCamera(parseInt(e.target.value))
            }}/>
          </div>

          <div className="form-group col-md-2">
            <label>Quantity</label>
            <input type="text" className="form-control" onChange={(e)=>{
                setQuantity(parseInt(e.target.value))
            }}/>
          </div>

          <div className="form-group col-md-2">
            <label>Price</label>
            <input type="text" className="form-control" onChange={(e)=>{
                setPrice(parseInt(e.target.value))
            }}/>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="inputAddress">Description</label>
          <input type="text" className="form-control" id="input" onChange={(e)=>{
                setDesc(e.target.value)
            }}/>
        </div>

        <button type="submit" className="btn btn-primary btn-lg" onClick={Submit}>
          Enter
        </button>
      </form>
    </div>
  );
};

export default PhoneInput;
