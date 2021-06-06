import React, { useEffect, useState } from 'react';
import './userprofile.css';
// import image1 from "/image/profile-background-3.jpg";
// import profileimg from "/image/3.jpg";
import Profilepost from './container2/Profilepost';
// import bgimg from "/image/4685.jpg";
import Post from './Post';
import Following from './container2/Following';
import Followers from './container2/Followers';
import SettingsIcon from '@material-ui/icons/Settings';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useDataLayerValue } from '../ContextAPI/DataLayer';
import Topbar from '../Common/Topbar';
import Sidebar from '../Common/Sidebar';
import axios from '../axios';
function Profile(props) {
  const LinkStyle = {
    textDecoration: 'none',
    color: '#000',
  };
  const bgimg = '/image/2.jpg';
  const bgstyle = {
    backgroundImage: `url(${bgimg})`,
  };
  const [{ userid }] = useDataLayerValue();
  const [userbio, setuserbio] = useState('');
  const [userprofileimage, setuserprofileimage] = useState('');
  const [username, setusername] = useState('');
  const [userusername, setuserusername] = useState('');
  const localstorageid = localStorage.getItem('memeappid');
  const [followid, setfollowid] = useState(null);
  const [showfollow, setshowfollow] = useState(false);
  let urlid;
  async function getuserprofile(urlusername) {
    await axios
      .get(`/api/accounts/username_to_id/${urlusername}/`)
      .then((res) => {
        urlid = res.data.id;
      });
    console.log(urlid);
    await axios.get(`/api/accounts/user/${urlid}/`).then((res) => {
      console.log(res);
      setuserusername(res.data.user.username);
      setusername(res.data.user.first_name + ' ' + res.data.user.last_name);
      setuserbio(res.data.bio);
      setuserprofileimage(res.data.userimage);
      setfollowid(res.data.id);
    });
  }
  async function checkfollowing() {
    const localid = localStorage.getItem('memeappid');
    await axios
      .get(`/api/accounts/isfollowing/${localid}/${userid}/`)
      .then((res) => {
        if (res.data.following) {
          setshowfollow(false);
        } else {
          setshowfollow(true);
        }
      });
  }

  useEffect(() => {
    getuserprofile(props.match.params.username);
    checkfollowing();
  }, []);
  const Followunfollow1 = async () => {
    await axios
      .post(`/api/accounts/follow_unfollow/${followid}/`, {
        token: localStorage.getItem('memeapptoken'),
      })
      .then((res) => {
        console.log(res);
      });
    setshowfollow(false);
    // Followunfollow2();
  };
  const Followunfollow2 = async () => {
    await axios
      .post(`/api/accounts/follow_unfollow/${followid}/`, {
        token: localStorage.getItem('memeapptoken'),
      })
      .then((res) => {
        console.log(res);
      });
    setshowfollow(true);
    // Followunfollow2();
  };
  // const Followunfollow2 = () => {
  //   style="color:blue;"
  // }
  return (
    <div>
      <Topbar />
      <Sidebar className='Sidebar' location='userprofile' />
      <Router>
        <div>
          <div className='Profile'>
            <div className='Profile_coverimg'>
              <div className='overlay'></div>
              <img src='/image/background.png' />
            </div>
            <div className='profile-setting'>
              <SettingsIcon />
            </div>
            <div className='main-container'>
              <div className='container1'>
                <div className='profile-img'>
                  <img
                    src={`https://res.cloudinary.com/di9lrcrlj/${userprofileimage}`}
                  />
                </div>
                <div className='Profile-Username'>
                  {userusername}
                  <span className='Profile-strick'>300🔥</span>
                  <p>{username}</p>
                </div>
                <div className='Profile-bio'>{userbio}</div>

                <div>
                  <div className='Profile-Edit'>
                    {showfollow ? (
                      <button
                        onClick={Followunfollow1}
                        className='profile-follow'
                      >
                        Follow
                      </button>
                    ) : (
                      <button
                        onClick={Followunfollow2}
                        className='profile-follow'
                      >
                        UnFollow
                      </button>
                    )}

                    <Link to='./profile/Edit'>
                      <button className='profile-Editbtn'>Message</button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className='container2'>
                <Profilepost
                  username={props.match.params.username}
                  location='userprofile'
                />
              </div>
            </div>
          </div>

          <div className='Profile-mb'>
            <div className='Profile-mb-clippath' style={bgstyle}>
              <div className='Profile-mb-clippath2'></div>
              <div className='Profile-mb-main'>
                <div className='Profile-mb-container1'>
                  <div className='Profile-mb-container1-1'>
                    <div className='Profile-mb-profileimg'>
                      <img
                        src={`https://res.cloudinary.com/di9lrcrlj/${userprofileimage}`}
                      />
                    </div>
                    <div className='Profile-mb-profileinfo'>
                      <div className='Profile-mb-username'>
                        {userusername}{' '}
                        <span className='Profile-mb-strick'>300🔥</span>
                      </div>
                      <div className='Profile-mb-secondname'>{username}</div>
                      <div className='Profile-mb-bio'>
                        {userbio}
                        <span></span>
                      </div>
                    </div>
                  </div>

                  <Link to='/Edit'>
                    <div className='Profile-mb-buttons'>
                      <button className='Profile-mb-editbtn'>Edit</button>
                    </div>
                  </Link>
                  {/* <div className="Profile-mb-buttons">
            <button className="Profile-mb-followbtn">Follow</button>
            <button className="Profile-mb-messagebtn">Message</button>
          </div> */}
                </div>

                <div className='Profile-mb-counts'>
                  <Link to='/Post' style={LinkStyle}>
                    <div className='Profile-mb-post'>
                      Posts
                      <br />
                      <span className='Profile-mb-posts-count'>59</span>
                    </div>
                  </Link>
                  <Link to='/Following' style={LinkStyle}>
                    <div className='Profile-mb-post'>
                      Following
                      <br />
                      <span className='Profile-mb-posts-count'>59</span>
                    </div>
                  </Link>
                  <Link to='/Followers' style={LinkStyle}>
                    <div className='Profile-mb-post'>
                      Followers
                      <br />
                      <span className='Profile-mb-posts-count'>59</span>
                    </div>
                  </Link>
                </div>
              </div>
              <div className='Profile-mb-posts-main'>
                <div className='Profile-mb-main-container'>
                  <div className='post-icon'>🔥 </div>
                  <div className='Saved-icon'>🔥</div>
                </div>
                <div className='Profile-mb-postorsaved'>
                  <Switch>
                    <Route path='/Post' component={Post} />
                    <Route path='/Followers' component={Followers} />
                    <Route path='/Following' component={Following} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default Profile;
