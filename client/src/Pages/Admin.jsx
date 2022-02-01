import React, { useState, useEffect } from "react";
import Delete from "../Components/Delete";
import PhoneInput from "./PhoneInput";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../Components/Header";
import Order from "./Order";

const Admin = () => {

  return (
    <div style={{backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.6),rgba(0,0,0,0.9))", height:"100vh"}}  >
      <Header/>

        <Routes>
          {/* <Route exact path='/login'>
              <Login/>
            </Route> */}

          <Route exact path="/" element={<PhoneInput />} />

          <Route exact path="/delete" element={<Delete />} />

          <Route exact path="/orders" element={<Order/>} />
          
          </Routes>

      
      {/* <PhoneInput/>
      <Delete/> */}
    </div>
  );
};

export default Admin;
