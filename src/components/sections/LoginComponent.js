import React, { useState} from 'react'
import "./styles.css";
import { Link } from "react-router-dom";

const Login = () => {

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  function handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    switch(name){
      case 'uname': setUsername(value); break;
      case 'password': setPassword(value); break;
      default: console.log("Error: something went wrong.")
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(username, password);
  }

  return (
    <>    
      <div className="login-form">
      <h2 data-reveal-delay="200">
        Log <span className="text-color-primary">In</span>
      </h2>
      <div className="formCenter">
        <form className="formFields" onSubmit={handleSubmit}>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="formFieldInput"
              placeholder="Enter your username"
              name="uname"
              onChange={handleChange}
            />
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              onChange={handleChange}
            />
          </div>
            <div className="formField">
              <button className="formFieldButton" onClick={handleSubmit}>Sign In</button> <br/>
              <h6> Not a member? <span> <Link to="/signup" className="formFieldLink"> Create an account</Link> </span> </h6>
            </div>
          </form>
        </div>
      </div>
    </>
  )
};

export default Login
