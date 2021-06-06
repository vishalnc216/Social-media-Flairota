import React, { useEffect, useState } from 'react';
import './Content.css';
import Postclick from '../Common/Postclick';
import Storysection from './Storysection';
import { BlockReserveLoading } from 'react-loadingg';
import { useDataLayerValue } from '../ContextAPI/DataLayer';
import axios from '../axios';
import wait from '../lotty/wait.json';
import Lottie from 'react-lottie';

function Content() {
  const [Feedposts, setFeedposts] = useState('');
  const [count, setcount] = useState(0);
  useEffect(() => {
    const usertoken = localStorage.getItem('memeapptoken');
    axios
      .post('/api/posts/followings_post/', {
        token: usertoken,
      })
      .then((res) => {
        setFeedposts(res.data);
        console.log(res);
      });
  }, []);
  const [{ File }] = useDataLayerValue();
  var lightdark;
  var [themer, setthemer] = useState('');
  useEffect(() => {
    setthemer(localStorage.getItem('themechanger'));
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
      { comment: '#222222' },
      { border: '2px solid rgb(47, 51, 54)' },
    ],
  });
  lightdark = themechange();
  return (
    <div
      className='Content'
      style={
        themer == 'true'
          ? {
              backgroundColor: lightdark.darktheme[2].back,
              // border: lightdark.darktheme[4].border,
            }
          : {
              backgroundColor: lightdark.lighttheme[2].back,
              // border: lightdark.lighttheme[4].border,
            }
      }
    >
      <Storysection />
      {Feedposts != '' ? (
        Feedposts.map((data) => {
          return <Postclick data={data} />;
        })
      ) : (
        <div>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: wait,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
              },
            }}
            height={400}
            width={400}
          />
        </div>
      )}
    </div>
  );
}

export default Content;
