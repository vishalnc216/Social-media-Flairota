import React, { useState, useEffect } from 'react';
import './Body.css';
import Topbar from './Topbar';
import Story from "../Home/Story"
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route, Link,withRouter } from 'react-router-dom';
import home from '../Home/home';
import chat from '../Chat/chat';
import Explore from '../Explore/Explore';
import Upload from '../Upload/Upload';
import Selectimage from '../Upload/Selectimage';
import Submitpost from '../Upload/Submitpost';
import editor from '../Upload/editor';
import Profile from '../Profile/Profile';
import userprofile from '../Profile/userprofile';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import Edit from '../Profile/Edit';
import Search from '../Common/Search';
import Chatdefault from '../Chat/Chatdefault';
import Comment from '../Common/Comment';
import Chatname from '../Chat/Chatname';
import Chattext from '../Chat/Chattext';
import bottombar from './bottombar.js';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import PublishRoundedIcon from '@material-ui/icons/PublishRounded';
import DynamicFeedOutlinedIcon from '@material-ui/icons/DynamicFeedOutlined';
// import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ExploreClick from '../Explore/ExploreClick';
function Body() {
  const bbStyle = {};
  const [animclass, setanimclass] = useState('bottombar-anim-c1');
  const [icon1, seticon1] = useState('bottombar-icon');
  const [icon2, seticon2] = useState('');
  const [icon3, seticon3] = useState('');
  const [icon4, seticon4] = useState('');
  const [icon5, seticon5] = useState('');

  const bottomanim1 = () => {
    seticon1('bottombar-icon');
    seticon2('');
    seticon3('');
    seticon4('');
    seticon5('');
    setanimclass('bottombar-anim-c1');
  };
  const bottomanim2 = () => {
    seticon2('bottombar-icon');
    seticon1('');
    seticon3('');
    seticon4('');
    seticon5('');
    setanimclass('bottombar-anim-c2');
  };
  const bottomanim3 = () => {
    seticon3('bottombar-icon');
    seticon1('');
    seticon2('');
    seticon4('');
    seticon5('');
    setanimclass('bottombar-anim-c3');
  };
  const bottomanim4 = () => {
    seticon4('bottombar-icon');
    seticon1('');
    seticon2('');
    seticon3('');
    seticon5('');
    setanimclass('bottombar-anim-c4');
  };
  const bottomanim5 = () => {
    seticon5('bottombar-icon');
    seticon1('');
    seticon2('');
    seticon3('');
    seticon4('');
    setanimclass('bottombar-anim-c5');
  };
  const LinkStyle = {
    textDecoration: 'none',
    color: '#000',
  };
  return (
    <Router>
      <div className='bottombar'>
        <div className='bottombar-anim'>
          <div className={animclass}></div>
        </div>
        <div className='bottombar-icons'>
          <Link to='/home' style={LinkStyle}>
            <HomeRoundedIcon className={icon1} onClick={bottomanim1} />
          </Link>
          <Link to='/Explore' style={LinkStyle}>
            <DynamicFeedOutlinedIcon className={icon2} onClick={bottomanim2} />
          </Link>
          <Link to='/Upload' style={LinkStyle}>
            <PublishRoundedIcon className={icon3} onClick={bottomanim3} />
          </Link>
          <Link to='/chat' style={LinkStyle}>
            <ChatRoundedIcon className={icon4} onClick={bottomanim4} />
          </Link>
          <Link to='/Profile' style={LinkStyle}>
            <AccountCircleRoundedIcon className={icon5} onClick={bottomanim5} />
          </Link>
        </div>
      </div>

      <div className='Body'>
        <Helmet>
          <script src='./toolbaranim.js' type='text/javascript' />
        </Helmet>

        <Switch>
          <Route path='/home' component={home} />
          <Route path='/Explore' component={Explore} />
          <Route path='/chat' component={chat} />
          <Route path='/Upload' component={Upload} />
          <Route path='/Submitpost' component={Submitpost} />
          <Route path='/editor' component={editor} />
          <Route path='/Selectimage' component={Selectimage} />
          <Route path='/Profile' exact component={Profile} />
          <Route path='/stories/:username/:userid/:storyid' exact component={(Story)} />
          <Route path='/chat' component={Chatdefault} />
          <Route path='/chat/chattext'>
            <Chatname />
            <Chattext />
          </Route>
          <Route path='/Comment' component={Comment} style={bbStyle}></Route>
          <Route path='/search' exact component={Search}></Route>
          <Route path='/ExploreClick' component={ExploreClick}></Route>
          <Route path='/Edit' component={Edit}></Route>
          <Route path='/:username' exact component={userprofile} />
        </Switch>
      </div>

      {/* <div id="tapbar-mb"> 
      
      <div id="phone">
  <div id="background">
    <div id="round">
    </div>
  </div>
  <ul id="tab-bar">
    <li class="icon selected"><img class="icon-picture" src="https://image.flaticon.com/icons/svg/814/814173.svg" /></li>
    <li class="icon"><img class="icon-picture" src="https://image.flaticon.com/icons/svg/151/151917.svg" /></li>
    <li class="icon"><img class="icon-picture" src="https://image.flaticon.com/icons/svg/318/318147.svg" /></li>
    <li class="icon"><img class="icon-picture" src="https://image.flaticon.com/icons/svg/685/685661.svg" /></li>
    <li class="icon"><img class="icon-picture" src="https://image.flaticon.com/icons/svg/709/709579.svg" /></li>
  </ul>
</div>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <filter id="goo">
  <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -7" result="goo" />
  <feBlend in="SourceGraphic" in2="goo" />
</filter>
  </defs>
</svg>

      </div> */}
    </Router>
  );
}

export default Body;
