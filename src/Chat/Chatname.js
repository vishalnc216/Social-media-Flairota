import React, { useEffect } from 'react'
import "./Chatname.css"
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { Link } from 'react-router-dom';

function Chatname(props) {
const LinkStyle = {
    textDecoration: "none",
    color:"black",
}
const chatmain =[
    {
        username:"kshitij",
        userImage:"/image/7.jpg",
        messagetime:"6:00PM"
    },
    {
        username:"Vishal",
        userImage:"/image/7.jpg",
        messagetime:"1:00PM"
    },
    {
        username:"Yash",
        userImage:"/image/7.jpg",
        messagetime:"2:00PM"
    },
    {
        username:"Nishant",
        userImage:"/image/7.jpg",
        messagetime:"4:00PM"
    },
]
    

    
    
    return (

        <div className="Chatname">
            <div className="Chat-search">
                <div className="chat-input">
                    <input className="chat-input-1" type="text" placeholder="Search"></input>
                    <SearchRoundedIcon className="chat-icon1"/>
                </div>
                <div className="chat-group">
                    <AddRoundedIcon className="chat-icon2"/>
                </div>
            </div>
           {chatmain.map((data)=> {

           return(
           <Link to="/chat/chattext" style={LinkStyle}>
            <div className="chat-countainer0">
            <div className="chat-countainer1">
                <div className="chat-countainer1-1">
                    <img src={data.userImage}/>
                    <div className="chat-mini-name ">
           <p>{data.username}</p>
                        <span>What Do you Desire 👿 ?</span>
                    </div>
                </div>
                <div className="chat-countainer1-2">
           <p className="chat-time">{data.messagetime}</p>
                    <div className="chat-mini2">
                        <p className="chat-stike">300🔥</p>
                        <span className="chat-no-message">3</span>
                    </div>
                </div>
            </div>
            </div>
            </Link>  
           )
         })} 
        </div>
    )
}

export default Chatname
