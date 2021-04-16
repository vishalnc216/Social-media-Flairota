import './Sidebar.css';
import React, { useState, useEffect } from 'react';
// import home1 from "/image/3.jpg";
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import PublishRoundedIcon from '@material-ui/icons/PublishRounded';
import DynamicFeedOutlinedIcon from '@material-ui/icons/DynamicFeedOutlined';
// import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

import { Link } from 'react-router-dom';
import { useDataLayerValue } from '../ContextAPI/DataLayer';
// import profileimg4 from "/image/7.jpg";
import axios from '../axios';

function Sidebar(props) {
  let [localstorageid, setlocalstorageid] = useState();

  const [
    { Profileimage, userid, Name, Username },
    dispatch,
  ] = useDataLayerValue();
  const [id1, setid1] = useState('');
  const [id2, setid2] = useState('');
  const [id3, setid3] = useState('');
  const [id4, setid4] = useState('');
  const [id5, setid5] = useState('');

  useEffect(() => {
    if (props.location == 'home') {
      setid1('Sidebar-anim');
    }
    if (props.location == 'explore') {
      setid2('Sidebar-anim');
    }
    if (props.location == 'chat') {
      setid3('Sidebar-anim');
    }
    if (props.location == 'upload') {
      setid4('Sidebar-anim');
    }
    if (props.location == 'profile') {
      setid5('Sidebar-anim');
    }
    if (Profileimage == false) {
      dispatch({
        type: 'SET_Profileimage',
        Profileimage: '/image/3.jpg',
      });
    }
  }, []);
  useEffect(() => {
    setvalues();
  }, []);

  async function setvalues() {
    setlocalstorageid((localstorageid = localStorage.getItem('memeappid')));
    console.log(localStorage.getItem('memeappid'));
    // const localstorageid = await localStorage.getItem('memeappid');
    dispatch({
      type: 'SET_UserId',
      userid: localstorageid,
    });
    console.log(userid);
    await axios.get(`/api/accounts/user/${localstorageid}/`).then((res) => {
      console.log(res);
      dispatch({
        type: 'SET_Profileimage',
        Profileimage: res.data.userimage,
      });
      dispatch({
        type: 'SET_Name',
        Name: res.data.user.first_name + ' ' + res.data.user.last_name,
      });
      dispatch({
        type: 'SET_Username',
        Username: res.data.user.username,
      });
      dispatch({
        type: 'SET_Bio',
        Bio: res.data.bio,
      });
    });
  }
  const LinkStyle = {
    textDecoration: 'none',
  };
  return (
    <div className='Sidebar'>
      <div className='Sidebar-size1'>
        <div className='Sidebar-profile'>
          <img
            src={`https://res.cloudinary.com/di9lrcrlj/${Profileimage}`}
          ></img>

          <div className='Sidebar-profile-name'>
            <h4>{Username}</h4>
            <span>{Name}</span>
          </div>
        </div>
      </div>

      <Link to='/home' style={LinkStyle}>
        <div className='Sidebar-home Sidebar_option' id={id1}>
          <div className='Sidebar-size2'>
            <HomeRoundedIcon className='Sidebar-icon' />
            <div className='sidebar-option-name'>Home</div>
          </div>
        </div>
      </Link>
      <Link to='/Explore' style={LinkStyle}>
        <div className='Sidebar-Explore Sidebar_option' id={id2}>
          <div className='Sidebar-size2'>
            <DynamicFeedOutlinedIcon className='Sidebar-icon' />
            <div className='sidebar-option-name'>Explore</div>
          </div>
        </div>
      </Link>
      <Link to='/chat' style={LinkStyle}>
        <div className='Sidebar-Chat Sidebar_option' id={id3}>
          <div className='Sidebar-size2'>
            <ChatRoundedIcon className='Sidebar-icon' />

            <div className='sidebar-option-name'>Chat</div>
          </div>
        </div>
      </Link>
      <Link to='/Upload' style={LinkStyle}>
        <div className='Sidebar-Upload Sidebar_option' id={id4}>
          <div className='Sidebar-size2'>
            <PublishRoundedIcon className='Sidebar-icon' />
            <div className='sidebar-option-name'>Upload</div>
          </div>
        </div>
      </Link>

      <Link to='/Profile' style={LinkStyle}>
        <div className='Sidebar-Profile Sidebar_option' id={id5}>
          <div className='Sidebar-size2'>
            <AccountCircleRoundedIcon className='Sidebar-icon' />
            <div
              onClick={() =>
                dispatch({
                  type: 'SET_UserId',
                  userid: localStorage.getItem('memeappid'),
                })
              }
              className='sidebar-option-name'
            >
              Profile
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Sidebar;
