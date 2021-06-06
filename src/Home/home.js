import React, { useState, useEffect } from 'react';
import Content from './Content';
import Recomend from './Recomend/Recomend';
import Topbar from '../Common/Topbar';
import Sidebar from '../Common/Sidebar';
import { useDataLayerValue } from '../ContextAPI/DataLayer';
import './home.css';
// import { lightdark } from '../Common/Postclick';
// import { openliketravel } from '../Common/Postclick';
function Home() {
  const [{ likeopen }] = useDataLayerValue();
  // var [themer, setthemer] = useState('');
  // useEffect(() => {
  //   setthemer(localStorage.getItem('themechanger'));
  // }, []);
  // console.log(themer);

  return (
    <div>
      <div className='Body_main'>
        <div
          style={likeopen ? { display: 'block' } : { display: 'none' }}
          className='postclick-like-click'
        >
          hello
        </div>
        <Topbar />
        <Sidebar
          // style={
          //   themer == 'true'
          //     ? { backgroundColor: lightdark.darktheme[0].card }
          //     : { backgroundColor: lightdark.lighttheme[0].card }
          // }
          className='Sidebar'
          location='home'
        />
        <Content className='Content' />
        <Recomend className='Recomend' />
      </div>
    </div>
  );
}

export default Home;
