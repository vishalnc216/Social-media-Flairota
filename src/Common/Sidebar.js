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
var lightdark;

function Sidebar(props) {
  var [themer, setthemer] = useState('');
  useEffect(() => {
    setthemer(localStorage.getItem('themechanger'));
  }, []);
  console.log(themer);
  console.log(lightdark);
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
  var [themer, setthemer] = useState('');
  useEffect(() => {
    setthemer(localStorage.getItem('themechanger'));
    // dispatch({
    //   type: 'SET_themechange',
    //   themechange: lightdark,
    // });
  }, []);
  const themechange = () => ({
    lighttheme: [
      { card: '#f5f5ff' },
      { text: 'black' },
      { back: '' },
      { comment: 'white' },
      { bigbox: 'white' },
      { border: 'none' },
    ],
    // f5f5ff
    darktheme: [
      { card: '#000000' },
      { text: 'white' },
      { back: '#212121' },
      { comment: 'rgb(32, 35, 39)' },
      { bigbox: 'rgb(14 14 14)' },
      { border: 'rgb(14 14 14)' },
    ],
  });
  lightdark = themechange();
  return (
    <div
      className='Sidebar'
      style={
        themer == 'true'
          ? {
              backgroundColor: lightdark.darktheme[0].card,
              color: lightdark.darktheme[1].text,
            }
          : {
              backgroundColor: lightdark.lighttheme[0].card,
              color: lightdark.lighttheme[1].text,
            }
      }
      // style={
      //   themer == 'true'
      //     ? { backgroundColor: lightdark.darktheme[0].card }
      //     : { backgroundColor: lightdark.lighttheme[0].card }
      // }
    >
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
          <div
            style={
              themer == 'true'
                ? {
                    color: lightdark.darktheme[1].text,
                  }
                : {
                    color: lightdark.lighttheme[1].text,
                  }
            }
            className='Sidebar-size2'
          >
            <HomeRoundedIcon className='Sidebar-icon' />
            <div className='sidebar-option-name'>Home</div>
          </div>
        </div>
      </Link>
      <Link to='/Explore' style={LinkStyle}>
        <div className='Sidebar-Explore Sidebar_option' id={id2}>
          <div
            style={
              themer == 'true'
                ? {
                    color: lightdark.darktheme[1].text,
                  }
                : {
                    color: lightdark.lighttheme[1].text,
                  }
            }
            className='Sidebar-size2'
          >
            <DynamicFeedOutlinedIcon className='Sidebar-icon' />
            <div className='sidebar-option-name'>Explore</div>
          </div>
        </div>
      </Link>
      <Link to='/chat' style={LinkStyle}>
        <div className='Sidebar-Chat Sidebar_option' id={id3}>
          <div
            style={
              themer == 'true'
                ? {
                    color: lightdark.darktheme[1].text,
                  }
                : {
                    color: lightdark.lighttheme[1].text,
                  }
            }
            className='Sidebar-size2'
          >
            <ChatRoundedIcon className='Sidebar-icon' />

            <div className='sidebar-option-name'>Chat</div>
          </div>
        </div>
      </Link>
      <Link to='/Upload' style={LinkStyle}>
        <div className='Sidebar-Upload Sidebar_option' id={id4}>
          <div
            style={
              themer == 'true'
                ? {
                    color: lightdark.darktheme[1].text,
                  }
                : {
                    color: lightdark.lighttheme[1].text,
                  }
            }
            className='Sidebar-size2'
          >
            <PublishRoundedIcon className='Sidebar-icon' />
            <div className='sidebar-option-name'>Upload</div>
          </div>
        </div>
      </Link>

      <Link to='/Profile' style={LinkStyle}>
        <div className='Sidebar-Profile Sidebar_option' id={id5}>
          <div
            style={
              themer == 'true'
                ? {
                    color: lightdark.darktheme[1].text,
                  }
                : {
                    color: lightdark.lighttheme[1].text,
                  }
            }
            className='Sidebar-size2'
          >
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
