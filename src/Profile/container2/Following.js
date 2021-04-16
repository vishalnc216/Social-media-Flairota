import React, { useState, useEffect } from 'react';
import './Following.css';
// import meme1 from "/image/2.jpg"
import axios from './axios';
// import { useDataLayerValue } from '.../ContextAPI/DataLayer';

function Following(props) {
  const [Followings, setFollowings] = useState(null);
    const localuserid = localStorage.getItem('memeappid');
  // const [{ userid }, dispatch] = useDataLayerValue();
  let urlid
  async function getfollowings(urlusername){
    await axios
    .get(`/api/accounts/username_to_id/${urlusername}/`)
    .then((res) => {
      urlid = res.data.id;
    });
   await axios.get(`/api/accounts/following/${urlid}/`).then((res) => {
      setFollowings(res);
    });
  
  }
  useEffect(() => {
    getfollowings(props.match.params.username)
    
  }, []);
  return (
    <div>
      {Followings != null &&
        Followings.data.map((data) => {
          return (
            <div className='Following'>
              {console.log(data)}
              <div className='follow'>
                <div className='Following-countainer'>
                  <img src={data.following.userimage} />

                  <div className='Following-countainer-1'>
                    <p>
                      {data.following.user.first_name +
                        ' ' +
                        data.following.user.last_name}
                    </p>
                    <span>{data.following.user.username}</span>
                  </div>
                </div>
                <div className='Following-button'>
                  <button>Unfollow</button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Following;
