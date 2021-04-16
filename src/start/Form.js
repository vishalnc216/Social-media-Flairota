import React, { useState } from "react";
import "./Form.css";
import { Link } from "react-router-dom";
import Sidebar from "../Common/Sidebar"
import { useDataLayerValue } from "../ContextAPI/DataLayer.js";
import axios from "../axios";
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

function Form() {
  // <Sidebar style={SidebarStyle}/>
  const linkStyle = {
    
    textDecoration: "none",
  };
  const Iconshow = {
    display: "block",
  };
   const Iconhide = {
    display: "none",
  };
  
  const signinfunc = (e) => {
    e.preventDefault();
     axios.post('/api/accounts/login/',{
     email:SigninUserName,
 
     password:SigninPassword
    }).then((res) => {
     console.log(res.data.key);
     
   }).catch((err) => console.log(err));
  }  
  const [{ SigninUserName, SigninPassword }, dispatch] = useDataLayerValue();
  const[passwordtype,setpasswordtype] = useState("password");
  const[icon1style,seticon1style] = useState(Iconshow);
  const[icon2style,seticon2style] = useState(Iconhide);
  return (
    
    <div className="Form__main">
      <form className="From__main-1 " onSubmit={signinfunc}>
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
            type={passwordtype}
            name=""
            placeholder="Password "
          />
          <div className="visible-icon">
            <VisibilityIcon onClick={() => { setpasswordtype("text");seticon2style(Iconshow);seticon1style(Iconhide)}}  style={icon1style} />
            <VisibilityOffIcon onClick={() => { setpasswordtype("password");seticon1style(Iconshow);seticon2style(Iconhide)}} style={icon2style}/>
          </div>
        </div>
        <button
          className="Form__input-button"
          type="submit"
         
        >Sign in </button>
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
