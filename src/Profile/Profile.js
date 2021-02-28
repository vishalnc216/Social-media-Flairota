import React, { useEffect } from "react";
import "./Profile.css";
// import image1 from "/image/profile-background-3.jpg";
// import profileimg from "/image/3.jpg";
import Profilepost from "./container2/Profilepost";
// import bgimg from "/image/4685.jpg";
import Post from './Post'
import Following from './container2/Following'
import Followers from './container2/Followers'
import SettingsIcon from '@material-ui/icons/Settings';
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import { useDataLayerValue } from "../ContextAPI/DataLayer";
function Profile() {
  const LinkStyle ={
    textDecoration:"none",
    color:"#000"
   
};
const bgimg = "/image/2.jpg"
const bgstyle = {
  backgroundImage: `url(${bgimg})`
  
}
const [{ Profileimage, Name, Username, Bio  }] = useDataLayerValue();
  return (
    <Router>
 <div>
      <div className="Profile">
        <div className="Profile_coverimg">
          <div className="overlay">
          </div>
            <img src="/image/5.jpg"/>
          
        </div>
        <div className="profile-setting"><SettingsIcon/></div>
        <div className="main-container">
          <div className="container1">
            <div className="profile-img">
             <img src={Profileimage}  />
            </div>
            <div className="Profile-Username">
              {Username}
              <span className="Profile-strick">300🔥</span>
              <p>{Name}</p>
            </div>
            <div className="Profile-bio">
             {Bio}
            </div>
              
              <div className="Profile-Edit">
            <Link to="./profile/Edit" >
                <button className="Editbtn">Edit</button>
            </Link>
              </div>
          </div>

          <div className="container2">
            <Profilepost />
          </div>
        </div>
      </div>

      <div className="Profile-mb">
        <div className="Profile-mb-clippath" style={bgstyle} >
            
          <div className="Profile-mb-clippath2">
            
          </div>
        <div className="Profile-mb-main">
          <div className="Profile-mb-container1">
             <div className="Profile-mb-container1-1">
            <div className="Profile-mb-profileimg">
            <img src={Profileimage}  />
              
            </div>
            <div className="Profile-mb-profileinfo">
              <div className="Profile-mb-username">
              {Username} <span className="Profile-mb-strick">300🔥</span>
              </div>
              <div className="Profile-mb-secondname">{Name}</div>
              <div className="Profile-mb-bio">
              {Bio}
                <span></span>
              </div>
            </div>
            </div>
            <Link to="/Edit">
          <div className="Profile-mb-buttons">
            <button className="Profile-mb-editbtn">Edit</button>
          </div>
            </Link>
          {/* <div className="Profile-mb-buttons">
            <button className="Profile-mb-followbtn">Follow</button>
            <button className="Profile-mb-messagebtn">Message</button>
          </div> */}
          </div>
          
          
          <div className="Profile-mb-counts">
           
              <Link to="/Post" style={LinkStyle}>           
              <div className="Profile-mb-post">
                Posts
                <br />
                <span className="Profile-mb-posts-count">59</span>
              </div>
              </Link>
              <Link to="/Following" style={LinkStyle}>           
              <div className="Profile-mb-post">
              Following
                <br />
                <span className="Profile-mb-posts-count">59</span>
              </div>
              </Link>
              <Link to="/Followers" style={LinkStyle}>           
              <div className="Profile-mb-post">
              Followers
                <br />
                <span className="Profile-mb-posts-count">59</span>
              </div>
              </Link>
             
           
          </div>
        </div>
          <div className="Profile-mb-posts-main">
            <div className="Profile-mb-main-container">
              <div className="post-icon">🔥 </div>
              <div className="Saved-icon">🔥</div>
            </div>
            <div className="Profile-mb-postorsaved" >
              
           <Switch>
             <Route path="/Post" component={Post}/>
             <Route path="/Followers" component={Followers}/>
             <Route path="/Following" component={Following}/>
           </Switch>
          </div>
          </div>
        </div>
      </div>
    </div>
    </Router>
   
  );
}

export default Profile;