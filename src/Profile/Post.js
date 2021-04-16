import React, { useEffect, useState } from 'react';
// import profileimg from "/image/3.jpg";
// import meme1 from "/image/meme2.jpg";
import './Post.css';

import { useDataLayerValue } from '../ContextAPI/DataLayer';
import { Link } from 'react-router-dom';
import axios from '../axios';
function Post(props) {
  const [userposts, setuserposts] = useState(null);
  const Poststyle = {
    textdDecoration: 'none',
  };
  let urlid
  async function getposts(urlusername){
    await axios
    .get(`/api/accounts/username_to_id/${urlusername}/`)
    .then((res) => {
      urlid = res.data.id;
      console.log(urlid);
    });
    await axios.get(`/api/posts/userpost/${urlid}/`).then((res) => {
      console.log(res);
      
      setuserposts(res.data.reverse());
    });
  }
  useEffect(() => {
    console.log(props.match.params.username);
    getposts(props.match.params.username)
  }, []);
  return (
    <div className='Post' style={Poststyle}>
      {userposts != null &&
        userposts.map((data) => {
          return (
            <Link to='/Showpost'>
              <img
                src={`https://res.cloudinary.com/di9lrcrlj/${data.image}`}
                style={Poststyle}
                className='img'
              />
            </Link>
          );
        })}
    </div>
  );
}

export default Post;
