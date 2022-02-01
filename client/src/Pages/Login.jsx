import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Submit = () => {
    if (email == "" || password == "") {
      alert("incomplete data");
    } else {
      console.log(email + password);
      Axios.post("http://localhost:3001/login", {
        email: email,
        password: password,
      }).then((response) => {
        console.log(response.data[0].password);
        localStorage.setItem("user", response.data[0].user_id);
        alert(response.data[0].user_id);
        console.log(response.data.length);

        if (password == response.data[0].password) {
          window.location.href = "/home";
        } else {
          alert("incorrect password");
        }
      });
    }

    // const [id, setId] = useState("");
    // const [pass, setPass] = useState("");

    // const Submit = () => {
    //   if (email == "" || password == "") {
    //     alert("incomplete data");
    //   } else {
    //     console.log(email + password);
    //     Axios.post("http://localhost:3001/login", {
    //       email: email,
    //       password: password,
    //     }).then((response) => {
    //       setTimeout(1000)
    //       alert(response.data[0].user_id)
    //       console.log(response.data[0].password);
    //       setPass(response.data[0].password)
    //       setId(response.data[0].user_id)
    //       Proceed()
    //     });

    // const Proceed = () =>{

    //   localStorage.setItem("user",id);

    //   console.log(pass);

    //   if(password==pass)
    //   {
    //     window.location.href = "/home";

    //   }
    //   else{
    //     alert('incorrect password '+password+' '+pass)
    //   }

    // }

    //   }

    // alert(confirm)
  };

  return (
    <div>
      <section
        class="vh-100"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.6),rgba(0,0,0,0.9))",
        }}
      >
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-xl-10">
              <div class="card" style={{ borderRadius: "1rem" }}>
                <div class="row g-0">
                  <div class="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      // src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.jpg"
                      src="images/background.jpg"
                      alt="login form"
                      class="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div class="col-md-6 col-lg-7 d-flex align-items-center">
                    <div class="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div class="d-flex align-items-center mb-3 pb-1">
                          <i
                            class="fas fa-cubes fa-2x me-3"
                            style={{ color: "#ff6219" }}
                          ></i>
                          <div
                            class="h1 mb-0"
                            style={{ textAlign: "center", width: "100%" }}
                          >
                            VMI
                          </div>
                        </div>

                        <h5
                          class="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                          Sign into your account
                        </h5>

                        <div class="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example17"
                            class="form-control form-control-lg"
                            placeholder="Email"
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                          />
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example27"
                            class="form-control form-control-lg"
                            placeholder="Password"
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                          />
                        </div>

                        <div class="pt-1 mb-4">
                          <button
                            class="btn btn-dark btn-lg btn-block"
                            type="submit"
                            onClick={Submit}
                          >
                            Login
                          </button>
                        </div>

                        <p class="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                          Don't have an account?{" "}
                          <a href="/signup" style={{ color: "#393f81" }}>
                            Register here
                          </a>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
