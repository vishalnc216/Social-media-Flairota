import React, { useState } from "react";
import "./Form.css";
import { Link } from "react-router-dom";
import { useDataLayerValue } from "../ContextAPI/DataLayer";
function Form() {
  const linkStyle = {
    textDecoration: "none",
  };
  const [{ SigninUserName, SigninPassword }, dispatch] = useDataLayerValue();
  return (
    <div className="Form__main">
      <form className="From__main-1">
        <h1 className="Form__text">Sign in </h1>
        <input
          value={SigninUserName}
          onChange={(e) =>
            dispatch({
              type: "SET_SigninUserName",
              SigninUserName: e.target.value,
            })
          }
          className="Form__input-username"
          type="text"
          name=""
          placeholder="Phone no,username,email"
        />
        <div className="Form__input-password-1">
          <input
            value={SigninPassword}
            onChange={(e) =>
              dispatch({
                type: "SET_SigninPassword",
                SigninPassword: e.target.value,
              })
            }
            className="Form__input-password"
            type="text"
            name=""
            placeholder="Password "
          />
        </div>
        <input
          className="Form__input-button"
          type="submit"
          name=""
          value="Login"
        />
        <a href="#" className="Form__forgetpassword">
          Forgot Password?
        </a>
        <h3>Login With</h3>
        <div className="Form__Login-other">
          <div className="Form__google-icon">
            <img
              className="Form__google-img"
              src="https://img.icons8.com/color/50/000000/google-logo.png"
            />
          </div>
          <div className="Form__facebook-icon">
            <img
              className="Form__facebook-img"
              src="https://img.icons8.com/fluent/48/000000/facebook-new.png"
            />
          </div>
        </div>
        <h2 className="Form__signup">
          Don't have an account?
          <Link to="/Signup" style={linkStyle}>
            <a href="" className="Form__signup-link">
              Sign up
            </a>
          </Link>
        </h2>
      </form>
    </div>
  );
}

export default Form;
