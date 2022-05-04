import React, { useState } from 'react'
import { Link } from "react-router-dom";

const SignUp = () => {

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()

  function handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    switch(name){
      case 'uname': setUsername(value); break;
      case 'password': setPassword(value); break;
      case 'email': setEmail(value); break;
      default: console.log("Error: something went wrong.")
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(username, password, email);
  }

    return (
      <div className="formCenter">
        <form onSubmit={handleSubmit} className="formFields">
          <div className="formField">
            <label className="formFieldLabel" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="formFieldInput"
              placeholder="Enter your full name"
              name="uname"
              value={username}
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
              value={password}
              onChange={handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="formField">
            <button className="formFieldButton">Sign Up</button>
            <h6> Have an account? <span> <Link to="/login" className="formFieldLink"> Login </Link> </span> </h6>
          </div>
        </form>
      </div>
    )
}

export default SignUp