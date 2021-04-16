import React, { useState, useEffect } from 'react';
import './Followers.css';

import axios from './axios';
function Followers(props) {
  const [Followers, setFollowers] = useState(null);
  let urlid
  async function getfollowers(urlusername){
    await axios
    .get(`/api/accounts/username_to_id/${urlusername}/`)
    .then((res) => {
      urlid = res.data.id;
    });
   await axios.get(`/api/accounts/followers/${urlid}/`).then((res) => {
      setFollowers(res);
    });
  
  }
  useEffect(() => {
   
    getfollowers(props.match.params.username)
  }, []);

  return (
    <div>
      {Followers != null &&
        Followers.data.map((data) => {
          return (
            <div className='Following'>
              {console.log(data)}
              <div className='follow'>
                <div className='Following-countainer'>
                  <img src={data.followers.userimage} />

                  <div className='Following-countainer-1'>
                    <p>
                      {data.followers.user.first_name +
                        ' ' +
                        data.followers.user.last_name}
                    </p>
                    <span>{data.followers.user.username}</span>
                  </div>
                </div>
                <div className='Following-button'>
                  <button> Remove</button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Followers;
