import React, { useEffect, useState } from 'react';
import './Profile.css';
// import image1 from "/image/profile-background-3.jpg";
// import profileimg from "/image/3.jpg";
import Profilepost from './container2/Profilepost';
// import bgimg from "/image/4685.jpg";
import Post from './Post';
import Following from './container2/Following';
import Followers from './container2/Followers';
import SettingsIcon from '@material-ui/icons/Settings';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useDataLayerValue } from '../ContextAPI/DataLayer';
import Topbar from '../Common/Topbar';
import Sidebar from '../Common/Sidebar';
import axios from '../axios';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
let themechanger;

function Profile() {
  const [state, setState] = React.useState({
    checkedB: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  themechanger = state.checkedB;
  // console.log(themechanger);
  const [password, setpassword] = useState('');

  const Iconshow = {
    display: 'block',
  };
  const Iconhide = {
    display: 'none',
  };

  const [icon1style, seticon1style] = useState(Iconshow);
  const [icon2style, seticon2style] = useState(Iconhide);
  const [oldpassword, setoldpassword] = useState('');
  const [passwordtype, setpasswordtype] = useState('password');
  const [{ SigninPassword }] = useDataLayerValue();
  //
  const drawerWidth = '25%';
  const theme = useTheme();
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: 'none',
      width: '400px',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      borderRadius: '20px',
      outline: 'none',
    },
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    },
    title: {
      flexGrow: 1,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-start',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    },
  }));
  //
  //
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const handleOpen = () => {
    setOpen1(true);
  };

  const handleClose = () => {
    setOpen1(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  //

  const LinkStyle = {
    textDecoration: 'none',
    color: '#000',
  };
  const bgimg = '/image/2.jpg';
  const bgstyle = {
    backgroundImage: `url(${bgimg})`,
  };
  const memeusertoken = localStorage.getItem('memeapptoken');
  const [
    { Profileimage, Name, Username, Bio, userid },
    dispatch,
  ] = useDataLayerValue();
  async function changepassword() {
    console.log(password);
    await axios
      .post(`/api/accounts/change_password/`, {
        token: memeusertoken,
        password: oldpassword,
        newpassword: password,
      })
      .then((res) => {
        if (res.data.changed == false) {
          alert("Old Password Didn't Match");
        } else {
          alert('Password Change Succesfully');
        }
      });
  }
  return (
    <div>
      <Topbar />
      <Sidebar className='Sidebar' location='profile' />
      <Router>
        <div>
          <div className='Profile'>
            <div className='Profile_coverimg'>
              <div className='overlay'></div>
              <img src='/image/12.jpg' />
            </div>
            <div className='profile-setting'>
              {/* 1 */}
              <div className={classes.root}>
                <CssBaseline />
                <IconButton
                  color='inherit'
                  aria-label='open drawer'
                  edge='end'
                  onClick={handleDrawerOpen}
                  className={clsx(open && classes.hide)}
                  style={{ marginRight: '0' }}
                >
                  <SettingsIcon />
                </IconButton>
                <Drawer
                  className={classes.drawer}
                  variant='persistent'
                  anchor='right'
                  open={open}
                  classes={{
                    paper: classes.drawerPaper,
                  }}
                >
                  <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                      {theme.direction === 'rtl' ? (
                        <ChevronLeftIcon />
                      ) : (
                        <ChevronRightIcon />
                      )}
                    </IconButton>
                    <div className='profile-side-setting'>
                      <h3>Setting</h3>
                    </div>
                  </div>
                  <Divider />
                  <div className='profile-setting-menu'>
                    <div className='profile-setting-1'>Account</div>
                    <List>
                      <div>
                        <ListItem type='button' onClick={handleOpen} button>
                          <InboxIcon />
                          <div className='profile-inside'>Change Password</div>
                        </ListItem>

                        <Modal
                          aria-labelledby='transition-modal-title'
                          aria-describedby='transition-modal-description'
                          className={classes.modal}
                          open={open1}
                          onClose={handleClose}
                          closeAfterTransition
                          BackdropComponent={Backdrop}
                          BackdropProps={{
                            timeout: 500,
                          }}
                        >
                          <Fade in={open1}>
                            <div className={classes.paper}>
                              <div className='changepassword-main'>
                                <div className='changepassword-main-1'>
                                  <div className='changepassword-adjust'>
                                    <form
                                      className={classes.root}
                                      noValidate
                                      autoComplete='off'
                                      style={{
                                        padding: '7px 10px',
                                      }}
                                    >
                                      <TextField
                                        type={passwordtype}
                                        onChange={(e) =>
                                          setoldpassword(e.target.value)
                                        }
                                        id='outlined-basic'
                                        label='Enter Your Old Password'
                                        variant='outlined'
                                        style={{
                                          width: '300px',
                                        }}
                                      />
                                    </form>
                                    <div className='changepassword-visible-icon'>
                                      <VisibilityIcon
                                        onClick={() => {
                                          setpasswordtype('text');
                                          seticon2style(Iconshow);
                                          seticon1style(Iconhide);
                                        }}
                                        style={icon1style}
                                      />
                                      <VisibilityOffIcon
                                        onClick={() => {
                                          setpasswordtype('password');
                                          seticon1style(Iconshow);
                                          seticon2style(Iconhide);
                                        }}
                                        style={icon2style}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className='changepassword-main-2'>
                                  <div className='changepassword-adjust'>
                                    <form
                                      className={classes.root}
                                      noValidate
                                      autoComplete='off'
                                      style={{
                                        padding: '7px 10px',
                                      }}
                                    >
                                      <TextField
                                        required
                                        type={passwordtype}
                                        name=''
                                        placeholder='Password '
                                        // value={SignupPassword}
                                        onChange={(e) =>
                                          setpassword(e.target.value)
                                        }
                                        id='outlined-basic'
                                        label='Enter Your New Password'
                                        variant='outlined'
                                        style={{
                                          width: '300px',
                                        }}
                                      />
                                    </form>
                                    <div className='changepassword-visible-icon'>
                                      <VisibilityIcon
                                        onClick={() => {
                                          setpasswordtype('text');
                                          seticon2style(Iconshow);
                                          seticon1style(Iconhide);
                                        }}
                                        style={icon1style}
                                      />
                                      <VisibilityOffIcon
                                        onClick={() => {
                                          setpasswordtype('password');
                                          seticon1style(Iconshow);
                                          seticon2style(Iconhide);
                                        }}
                                        style={icon2style}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <Button
                                  variant='contained'
                                  onClick={changepassword}
                                  type='submit'
                                  color='default'
                                  disableElevation
                                  style={{
                                    width: '300px',
                                    display: 'flex',
                                    margin: 'auto',
                                    marginTop: '10px',
                                  }}
                                >
                                  Change Password
                                </Button>
                              </div>
                            </div>
                          </Fade>
                        </Modal>
                      </div>

                      <ListItem button>
                        <InboxIcon />
                        <div className='profile-inside'>Current Status</div>
                      </ListItem>
                      <ListItem button>
                        <InboxIcon />
                        <div className='profile-inside'>Edit Profile</div>
                      </ListItem>
                      <ListItem button>
                        <InboxIcon />
                        <div className='profile-inside'>Public / Private</div>
                      </ListItem>
                      <ListItem button>
                        <InboxIcon />
                        <div className='profile-inside'>Deactivate Account</div>
                      </ListItem>
                    </List>
                  </div>
                  <div className='profile-setting-menu'>
                    <div className='profile-setting-1'>Statistics</div>
                    <List>
                      <ListItem button>
                        <InboxIcon />
                        <div className='profile-inside'>Coins Collected</div>
                      </ListItem>
                      <ListItem button>
                        <InboxIcon />
                        <div className='profile-inside'>Total Likes</div>
                      </ListItem>
                      <ListItem button>
                        <InboxIcon />
                        <div className='profile-inside'>Total Comments</div>
                      </ListItem>
                    </List>
                  </div>

                  <div className='profile-setting-menu'>
                    <div className='profile-setting-1'>Notification</div>
                    {/* <List>
                      <ListItem button>
                        <InboxIcon />
                        <div className='profile-inside'>Coins Collected</div>
                      </ListItem>
                      <ListItem button>
                        <InboxIcon />
                        <div className='profile-inside'>Total Likes</div>
                      </ListItem>
                      <ListItem button>
                        <InboxIcon />
                        <div className='profile-inside'>Total Comments</div>
                      </ListItem>
                    </List> */}
                  </div>

                  <div className='profile-setting-menu'>
                    <div className='profile-setting-1'>Theme</div>
                    <List>
                      <ListItem button>
                        <InboxIcon />
                        <div className='profile-inside'>Theme</div>
                      </ListItem>
                    </List>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={state.checkedB}
                          onChange={handleChange}
                          name='checkedB'
                          color='primary'
                        />
                      }
                    />
                  </div>

                  <div className='profile-setting-menu'>
                    <div className='profile-setting-1'>Others</div>
                    <List>
                      <ListItem button>
                        <InboxIcon />
                        <div className='profile-inside'>Coins Collected</div>
                      </ListItem>
                    </List>
                  </div>

                  <div className='profile-setting-menu'>
                    <div className='profile-setting-1'>Regarding Us</div>
                    <List>
                      <ListItem button>
                        <InboxIcon />
                        <div className='profile-inside'>Report Bug</div>
                      </ListItem>
                      <ListItem button>
                        <InboxIcon />
                        <div className='profile-inside'>About Us</div>
                      </ListItem>
                    </List>
                  </div>

                  {/* <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                      <ListItem button key={text}>
                        <ListItemIcon>
                          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItem>
                    ))}
                  </List> */}
                </Drawer>
                {/* 1 */}
              </div>
            </div>
            <div className='main-container'>
              <div className='container1'>
                <div className='profile-img'>
                  <img
                    src={`https://res.cloudinary.com/di9lrcrlj/${Profileimage}`}
                  />
                </div>
                <div className='Profile-Username'>
                  {Username}
                  <span className='Profile-strick'>300🔥</span>
                  <p>{Name}</p>
                </div>
                <div className='Profile-bio'>{Bio}</div>
                {/* {localstorageid==userid ?  */}
                <div className='Profile-Edit'>
                  <Link to='./profile/Edit'>
                    <button className='Editbtn'>Edit</button>
                  </Link>
                </div>
                {/* :  */}
                {/* <div>
                  <div className='Profile-Edit'>
                    <Link to='./profile/Edit'>
                      <button className='profile-follow'>Follow</button>
                    </Link>
                    <Link to='./profile/Edit'>
                      <button className='profile-Editbtn'>Message</button>
                    </Link>
                  </div>
                </div> */}
                {/* } */}
              </div>

              <div className='container2'>
                <Profilepost />
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
                        src={`https://res.cloudinary.com/di9lrcrlj/${Profileimage}`}
                      />
                    </div>
                    <div className='Profile-mb-profileinfo'>
                      <div className='Profile-mb-username'>
                        {Username}{' '}
                        <span className='Profile-mb-strick'>300🔥</span>
                      </div>
                      <div className='Profile-mb-secondname'>{Name}</div>
                      <div className='Profile-mb-bio'>
                        {Bio}
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
                  {/* <Switch>
                    <Route path='/Post' component={Post} />
                    <Route path='/Followers' component={Followers} />
                    <Route path='/Following' component={Following} /> */}
                  {/* <Route path='/Save' component={Following} /> */}
                  {/* </Switch> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

console.log(themechanger);
export { themechanger };
export default Profile;
