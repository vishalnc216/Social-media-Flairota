import React, { useEffect, useState } from 'react';
import './Topbar.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Link } from 'react-router-dom';
import axios from '../axios';
import { useDataLayerValue } from '../ContextAPI/DataLayer';

function Topbar() {
  const LinkStyle = {
    textDecoration: 'none',
    color: '#000',
  };
  const [searchinput, setsearchinput] = useState('');
  const [{ searchpeople }, dispatch] = useDataLayerValue();
  useEffect(() => {
    if (searchinput != '') {
      axios
        .post('https://memeapp-backend.herokuapp.com/api/accounts/getusers/', {
          username: searchinput,
        })
        .then((res) => {
          dispatch({
            type: 'SET_SearchPeople',
            searchpeople: res,
          });
          console.log(res);
        });
    } else {
      dispatch({
        type: 'SET_SearchPeople',
        searchpeople: '',
      });
    }
  }, [searchinput]);
  var lightdark;
  var [themer, setthemer] = useState('');
  useEffect(() => {
    setthemer(localStorage.getItem('themechanger'));
  }, []);
  const themechange = () => ({
    lighttheme: [
      { card: '#CBCBFF' },
      { text: 'black' },
      { back: '' },
      { comment: 'white' },
      { border: 'none' },
    ],
    // f5f5ff
    darktheme: [
      { card: '#000000' },
      { text: 'white' },
      { back: '#212121' },
      { comment: 'rgb(32, 35, 39)' },
      { border: '2px solid rgb(47, 51, 54)' },
    ],
  });
  lightdark = themechange();
  return (
    <div className='Topbar'>
      <div
        className='Topbar-lap'
        style={
          themer == 'true'
            ? {
                backgroundColor: lightdark.darktheme[0].card,
                color: lightdark.darktheme[1].text,
                border: lightdark.darktheme[4].border,
              }
            : {
                backgroundColor: lightdark.lighttheme[0].card,
                color: lightdark.lighttheme[1].text,
                border: lightdark.lighttheme[4].border,
              }
        }
      >
        <div className='Topbar__logo'>
          <div>Social Media</div>
        </div>
        <Link to='/search' style={LinkStyle}>
          <div className='Topbar__search'>
            <input
              style={
                themer == 'true'
                  ? {
                      backgroundColor: lightdark.darktheme[3].comment,
                      color: lightdark.darktheme[1].text,
                    }
                  : {
                      backgroundColor: lightdark.lighttheme[3].comment,
                      color: lightdark.lighttheme[1].text,
                    }
              }
              onChange={(e) => {
                setsearchinput(e.target.value);
              }}
              type='text'
              name=''
              className='Input_search'
              placeholder='Search'
            />
          </div>
        </Link>
        <div className='Topbar__notification'>
          <NotificationsIcon />
        </div>
      </div>
      <div className='topbar-mobile'>
        <h1> </h1>
      </div>
    </div>
  );
}

export default Topbar;
