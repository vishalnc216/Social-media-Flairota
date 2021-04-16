import React from 'react'
import "./chat.css";
import Chatname from "./Chatname"
import Chattext from "./Chattext"
import Chathead from "./Chathead"


import { Router, Route, Switch } from 'react-router-dom';
import Chatdefault from './Chatdefault';
import Topbar from "../Common/Topbar"
import Sidebar from "../Common/Sidebar"
function chat() {

    // const [seed ,setSeed] = useState(["./logo192.png",""]);

    // useEffect(() => {
    //    setSeed(Math.floor(Math.random()*50000));
    // },[]);
    return (
        <div>

             <Topbar/>
            <Sidebar className="Sidebar" location="chat"/>
        <div className="chat">
            <Chathead/>
            <div className="chat-countainer">
                <Chatname/>
                <Chatdefault/>
            </div>
            <div className="chat-countainer-mob">
                <Chatname />
            </div>
        </div>
        </div>
    )
}

export default chat
