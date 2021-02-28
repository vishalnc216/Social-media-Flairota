
import "./Sidebar.css";
import React, {useState, useEffect} from 'react';
// import home1 from "/image/3.jpg";
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import PublishRoundedIcon from '@material-ui/icons/PublishRounded';
import DynamicFeedOutlinedIcon from '@material-ui/icons/DynamicFeedOutlined';
// import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

import {Link} from "react-router-dom";
import { useDataLayerValue } from "../ContextAPI/DataLayer";
// import profileimg4 from "/image/7.jpg";

function Sidebar() {
    const[{Profileimage , Name, Username}, dispatch] = useDataLayerValue();
    useEffect(() => {
     if(Profileimage == false){
      dispatch({
        type: "SET_Profileimage",
        Profileimage: "/image/3.jpg",
      })
     }
     
    },)
    const[id1,setid1] = useState("Sidebar-anim");
    const anim1 = () => {
      setid1("Sidebar-anim");
      setid2("");
      setid3("");
      setid4("");
      setid5("");
    }
    const[id2,setid2] = useState("");
    const anim2 = () => {
      setid2("Sidebar-anim");
      setid1("");
      setid3("");
      setid4("");
      setid5("");
    }
    const[id3,setid3] = useState("");
    const anim3 = () => {
      setid3("Sidebar-anim");
      setid1("");
      setid2("");
      setid4("");
      setid5("");
    }
    const[id4,setid4] = useState("");
    const anim4 = () => {
      setid4("Sidebar-anim");
      setid1("");
      setid2("");
      setid3("");
      setid5("");
    }
    const[id5,setid5] = useState("");
    const anim5 = () => {
      setid5("Sidebar-anim");
      setid1("");
      setid2("");
      setid3("");
      setid4("");
    }
    
    const LinkStyle ={
        textDecoration:"none",
       
    };
    return (
        <div className="Sidebar">
          <div className="Sidebar-size1">
             <div className="Sidebar-profile">
                 <img src={Profileimage }   ></img >
                
                 <div className="Sidebar-profile-name">
                        <h4>{Username}</h4>
                        <span>{Name}</span>
                 </div>
            </div >
          </div>
          
         <Link to="/home" style={LinkStyle}>
            <div className="Sidebar-home Sidebar_option" id={id1} onClick={anim1}>
               <div className="Sidebar-size2">
            
                <HomeRoundedIcon className="Sidebar-icon" />
                 <div className="sidebar-option-name">Home</div>
               </div>
            </div>
          </Link>
            <Link to="/Explore" style={LinkStyle}>
          <div className="Sidebar-Explore Sidebar_option" id={id2} onClick={anim2} >
             <div className="Sidebar-size2">
                <DynamicFeedOutlinedIcon className="Sidebar-icon" />
                 <div className="sidebar-option-name">Explore</div>
             </div>
          </div>
          </Link>
        <Link to="/chat" style={LinkStyle}>
          <div className="Sidebar-Chat Sidebar_option" id={id3} onClick={anim3}>
           <div className="Sidebar-size2">
             
                <  ChatRoundedIcon className="Sidebar-icon"/>
              
              <div className="sidebar-option-name">Chat</div>
            </div>
          </div>
        </Link>
        <Link to="/Upload" style={LinkStyle}>
          <div className="Sidebar-Upload Sidebar_option" id={id4} onClick={anim4}>
            <div className="Sidebar-size2">
              <PublishRoundedIcon className="Sidebar-icon" />
              <div className="sidebar-option-name">Upload</div>
            </div>
          </div>
          </Link>
          <Link to="/Profile" style={LinkStyle}>
          <div className="Sidebar-Profile Sidebar_option" id={id5} onClick={anim5}>
          <div className="Sidebar-size2">
            <AccountCircleRoundedIcon className="Sidebar-icon" />
            <div className="sidebar-option-name">Profile</div>

          </div>
        </div>
        </Link>




        
            
        </div>
    )
}

export default Sidebar
