import React, { useState,useEffect } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { useDataLayerValue } from "../ContextAPI/DataLayer.js";
import { colors } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import axios from "../axios";
function Signup() {
   const linkStyle = {
    textDecoration: "none",
  };
   const Iconshow = {
    display: "block",
  };
   const Iconhide = {
    display: "none",
  };
  const signupfunc = (e) => {
    e.preventDefault();
    axios.post('/api/accounts/signup/',{
      email:SignupEmailOrPhoneno,
      username:SignupUserName,
      password:SignupPassword
    }).then((res) => {
      console.log(res.data.key);
      localStorage.setItem("memeapptoken", res.data.key);
    }).catch((err) => console.log(err));
  }
  const passwordvarify=() =>{
    if (confirmpassword!=SignupPassword) {
      return(
        <h5 className="password-error" >it didn't match</h5>
        )
      }
      else{
        return(
          <h5 style={{display:"none"}} className="password-error" >it didn't match</h5>
          )
        }
      }
      const [
        { SignupUserName, SignupPassword, SignupEmailOrPhoneno },
        dispatch,
      ] = useDataLayerValue();
      useEffect(() => {
          if(SignupUserName != null){

            axios.post('/api/accounts/verify_username/',{
           
              username:SignupUserName
             
             }).then((res) => {
              console.log(res.data.avaliable);
              if(SignupUserName!=null){
                  setdisplayicon("block")
              }
              if(SignupUserName==""){
                  setdisplayicon("none")
              }

              if(res.data.avaliable && !SignupUserName.includes('@') )
              {
                setshowicon(true)
              }
              else{
                setshowicon(false)
              }
            })
          } 
    
        
      }, [SignupUserName])
  const[passwordnum,setpasswordnum] = useState();
  const[passwordchar,setpasswordchar] = useState();
  const[passwordsize,setpasswordsize] = useState();
  const[confirmpassword,setconfirmpassword] = useState();
  const[passwordtype,setpasswordtype] = useState("password");
  const[icon1style,seticon1style] = useState(Iconshow);
  const[icon2style,seticon2style] = useState(Iconhide);
  const[showicon,setshowicon] = useState(false);
  const[displayicon,setdisplayicon] = useState("none");
  const passwordcheck = () => {
    var charformat = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    var numformat = /\d/g ;
    if (SignupPassword.length>8) {
      setpasswordsize(true)
    } 
    if(numformat.test(SignupPassword)){
      setpasswordnum(true)
    }
    if(charformat.test(SignupPassword)){
      setpasswordchar(true)
    }
  }
  
  return (
    <div className="Form__main">
      <form className="From__main-1">
        <center>
          <h1 className="Form__text"> Sign Up </h1>
        </center>
        <div clas="username_input" style={{position: "relative"}}>
          {showicon ?   <CheckCircleIcon style={{fill: "green",display:displayicon}} className="CheckCircleIcon"/> :   <CancelIcon style={{fill: "red",display:displayicon}} className="CheckCircleIcon"/>}
        
          <input
          className="Form__input-username"
          type="text"
          name=""
          placeholder="username"
          value={SignupUserName}
          onChange={(e) =>{
            
            dispatch({
              type: "SET_SignupUserName",
              SignupUserName: e.target.value,
            })
            
            
          }
          
          }
          />

        </div>
        <div>
        
     
        </div>
        <input
          className="Form__input-Email"
          type="email"
          name=""
          placeholder="Enter Your Email "
          value={SignupEmailOrPhoneno}
          onChange={(e) =>
            dispatch({
              type: "SET_SignupEmailOrPhoneno",
              SignupEmailOrPhoneno: e.target.value,
            })
          }
        />

        <div className="Form__input-password-0">
          <input
            className="Form__input-password"
            type={passwordtype}
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
          <div className="visible-icon">
            <VisibilityIcon onClick={() => {setpasswordtype("text");seticon2style(Iconshow);seticon1style(Iconhide)}}  style={icon1style} />
            <VisibilityOffIcon onClick={() => {setpasswordtype("password");seticon1style(Iconshow);seticon2style(Iconhide)}} style={icon2style}/>
          </div>
        </div>
        <div className="Form__input-password-1 ">
          <input
            className="Form__input-password-1-1 Confirm-password"
            type="password"
            name=""
            placeholder="Confirm Password "
            value={confirmpassword}
            onChange={(e) => 
            {
                setconfirmpassword(e.target.value)
            }}
          />
          {passwordvarify()}
          
        </div>
        
        
        <div className="Submit-next">
          
          <button className="Form__input-button" type="submit" onClick={signupfunc}>
              Sign Up
            </button>
           
        </div>
        

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
