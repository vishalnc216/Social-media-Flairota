import React, { useEffect, useState } from 'react';
import { BlockReserveLoading } from 'react-loadingg';
import { Link } from 'react-router-dom';

import axios from './axios';
function Saved() {
  const [savedposts, setsavedposts] = useState('');
  async function showsavedposts() {
    await axios
      .post('/api/posts/savedpost/', {
        token: localStorage.getItem('memeapptoken'),
      })
      .then((res) => {
        console.log(res);
        setsavedposts(res);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    showsavedposts();
  }, []);
  const Poststyle = {
    textdDecoration: 'none',
  };
  return (
    <div>
      {savedposts != '' ? (
        savedposts.data.map((data) => {
          return (
            <Link to='/Showpost'>
              <img
                src={`https://res.cloudinary.com/di9lrcrlj/${data.image}`}
                style={Poststyle}
                className='img'
              />
            </Link>
          );
        })
      ) : (
        <div>
          <BlockReserveLoading />
        </div>
      )}
    </div>
  );
}

export default Saved;
