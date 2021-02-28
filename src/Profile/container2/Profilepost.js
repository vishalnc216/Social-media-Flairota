import React,{useState, useEffect} from 'react'
import "./Profilepost.css"
import {Link} from "react-router-dom"
import Post from '../Post'
import Followers from './Followers'
import Following from './Following'
import Saved from  './Saved'
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";


function Profilepost() {
    
    const[Pid1,setPid1] = useState("Pofilepost-anim");
    const Panim1 = () => {
      setPid1("Pofilepost-anim");
      setPid2("");
      setPid3("");
      setPid4("");
     
    }
    const[Pid2,setPid2] = useState("");
    const Panim2 = () => {
      setPid2("Pofilepost-anim");
      setPid1("");
      setPid3("");
      setPid4("");
      
    }
   const[Pid3,setPid3] = useState("");
    const Panim3 = () => {
      setPid3("Pofilepost-anim");
      setPid1("");
      setPid2("");
      setPid4("");
     
    }
    const[Pid4,setPid4] = useState("");
    const Panim4 = () => {
      setPid4("Pofilepost-anim");
      setPid1("");
      setPid2("");
      setPid3("");
    
    }
    const LinkStyle ={
        textDecoration:"none",
        color:"#000"
       
    };
    return (
        <Router>
        <div className="Profilepost">
           <div className="Profilepost-bar">
               <Link to="/Post" style={LinkStyle} >
               <div className="Profilepost-bar1" id={Pid1} onClick={Panim1}>
                   <p>Post </p> <span className="count">69</span> <hr id={Pid1 + "-line"} className="line"/>
               </div>
               </Link>
               <Link to="/Following" style={LinkStyle} >
               <div className="Profilepost-bar1"id={Pid2} onClick={Panim2}>
                   <p>Following</p> <span className="count">69</span>  <hr  id={Pid2 + "-line"} className="line"/>
               </div>
               </Link>
               <Link to="/Followers" style={LinkStyle} >
               <div className="Profilepost-bar1" id={Pid3} onClick={Panim3}>
                   <p>Followers </p><span className="count">69</span> <hr  id={Pid3 + "-line"} className="line"/>
               </div>
               </Link>
               <Link to="/Saved " style={LinkStyle} >
               <div className="Profilepost-bar1" id={Pid4} onClick={Panim4}>
                   <p>Saved </p><span className="count">69</span> <hr  id={Pid4 + "-line"} className="line"/>
               </div>
               </Link>
           </div>
           <hr/>
           
           <div className="Profilepost-content">
           <Switch>
            
            <Route path="/Post"  component={Post} />
            <Route path="/Following" component={Following} />
            <Route path="/Followers" component={Followers} />
            <Route path="/Saved" component={Saved} />
            
         </Switch>
           </div>
        </div>
        </Router>  

    )
}

export default Profilepost
