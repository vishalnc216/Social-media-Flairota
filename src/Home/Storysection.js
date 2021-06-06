import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Storysection.css';
import { useDataLayerValue } from '../ContextAPI/DataLayer.js';
import axios from '../axios';

function Storysection() {
  let history = useHistory();
  const [{ storylist }, dispatch] = useDataLayerValue();
  // const [storylist, setstorylist] = useState("")
  async function getstorylist() {
    await axios
      .post('/api/posts/getsotries/', {
        token: localStorage.getItem('memeapptoken'),
      })
      .then((res) => {
        dispatch({
          type: 'SET_storylist',
          storylist: res.data,
        });
      })
      .catch((err) => console.log(err));
  }
  async function showstory(userid, storyid, username, index) {
    history.push({
      pathname: `/stories/${username}/${userid}/${storyid}`,
    });
  }
  useEffect(() => {
    getstorylist();
  }, []);
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
    <div
      className='Storysection'
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
              borderTop: 'none',
            }
      }
    >
      {console.log(storylist)}
      {storylist != '' ? (
        storylist.map((data, index) => {
          return (
            <div
              style={
                themer == 'true'
                  ? {
                      backgroundColor: lightdark.darktheme[3].comment,
                    }
                  : {
                      backgroundColor: lightdark.lighttheme[3].comment,
                    }
              }
              className='Story-countainer1'
              onClick={() =>
                showstory(
                  data.user.user.id,
                  data.stories[0].id,
                  data.user.user.username,
                  index
                )
              }
            >
              <div className='Story-img-countainer'>
                <img
                  className='Story-img'
                  src={`https://res.cloudinary.com/di9lrcrlj/${data.user.userimage}`}
                />
              </div>

              <span className='Story-name'>{data.user.user.username}</span>
            </div>
          );
        })
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Storysection;
