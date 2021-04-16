import React, { useEffect, useState } from 'react';
import './Content.css';
import Postclick from '../Common/Postclick';
import Storysection from './Storysection';
import { BlockReserveLoading } from 'react-loadingg';
import { useDataLayerValue } from '../ContextAPI/DataLayer';
import axios from '../axios';

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
  return (
    <div className='Content'>
      <Storysection />
      {Feedposts != '' ? (
        Feedposts.map((data) => {
          return <Postclick data={data} />;
        })
      ) : (
        <div>
          <BlockReserveLoading />
        </div>
      )}
    </div>
  );
}

export default Content;
