import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { useDataLayerValue } from "./DataLayer";
function Signup() {
  const linkStyle = {
    textDecoration: "none",
  };
  const [
    { SignupUserName, SignupPassword, SignupEmailOrPhoneno },
    dispatch,
  ] = useDataLayerValue();
  return (
    <div className="Form__main">
      <form className="From__main-1">
        <center>
          <h1 className="Form__text"> Sign Up </h1>
        </center>
        <input
          className="Form__input-username"
          type="text"
          name=""
          placeholder="username"
          value={SignupUserName}
          onChange={(e) =>
            dispatch({
              type: "SET_SignupUserName",
              SignupUserName: e.target.value,
            })
          }
        />

        <div className="Form__input-password-1">
          <input
            className="Form__input-password"
            type="text"
            name=""
            placeholder="Password "
            value={SignupPassword}
            onChange={(e) =>
              dispatch({
                type: "SET_SignupPassword",
                SignupPassword: e.target.value,
              })
            }
          />
        </div>
        <input
          className="Form__input-Email"
          type="text"
          name=""
          placeholder="Email or PhoneNo."
          value={SignupEmailOrPhoneno}
          onChange={(e) =>
            dispatch({
              type: "SET_SignupEmailOrPhoneno",
              SignupEmailOrPhoneno: e.target.value,
            })
          }
        />

        <input
          className="Form__input-button"
          type="submit"
          name=""
          value="SignUp"
        />

        <h3>SignUp With</h3>
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
          {" "}
          have an account?{" "}
          <Link to="/" style={linkStyle}>
            <a href="" className="Form__signup-link">
              Sign in
            </a>
          </Link>
        </h2>
      </form>
    </div>
  );
}

export default Signup;
