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
  return (
    <div className='Topbar'>
      <div className='Topbar-lap'>
        <div className='Topbar__logo'>
          <div>Meme Master</div>
        </div>
        <Link to='/search' style={LinkStyle}>
          <div className='Topbar__search'>
            <input
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
