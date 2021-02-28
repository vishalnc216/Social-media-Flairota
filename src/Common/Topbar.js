import React from "react";
import "./Topbar.css";
import NotificationsIcon from '@material-ui/icons/Notifications';

function Topbar() {
  return (
    <div className="Topbar">
     <div className="Topbar-lap">
      <div className="Topbar__logo">
      
        <div>Meme Master</div>
      </div>
      <div className="Topbar__search">
        <input
          type="text"
          name=""
          className="Input_search"
          placeholder="Search"
        />
      </div>
      <div className="Topbar__notification"><NotificationsIcon/></div>
      </div> 
      <div className="topbar-mobile">
        <h1> </h1>
      </div>
    </div>
  );
}

export default Topbar;
