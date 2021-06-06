import React, { useState, useEffect } from 'react';
import Exploresection from './Exploresection';
import Trending from './Trending';
import './Explore.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Topbar from '../Common/Topbar';
import Sidebar from '../Common/Sidebar';

function Explore() {
  const LinkStyle = {
    textDecoration: 'none',
    color: '#000',
  };
  var lightdark;
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
      { card: 'white' },
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
    <div>
      <Topbar />
      <Sidebar className='Sidebar' location='explore' />
      <Router>
        <div
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
          className='Explore'
        >
          <div className='Explore-header'>
            <Link to='/Exploresection' style={LinkStyle}>
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
                className='Explore-header-explore'
              >
                Explore
              </div>
            </Link>
            <Link to='/Trending' style={LinkStyle}>
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
                className='Explore-header-trending'
              >
                Trending
              </div>
            </Link>
          </div>

          <div className='Explorepost-section'>
            <Switch>
              <Route path='/Exploresection' component={Exploresection} />
              <Route path='/Trending' component={Trending} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default Explore;
