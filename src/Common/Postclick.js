import React, { useState } from 'react';
import './Postclick.css';
import { Link } from 'react-router-dom';
import { useDataLayerValue } from '../ContextAPI/DataLayer';
import axios from '../axios';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';
import { InsertEmoticon } from '@material-ui/icons';
import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
function Postclick(props) {
  const [emojiclick, setemojiclick] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [editedcap, seteditedcap] = useState('');
  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const useStyles = makeStyles((theme) => ({
    typography: {
      padding: theme.spacing(2),
    },
  }));
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //
  //
  //
  const useStyles1 = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      border: 'none',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  const [open1, setOpen1] = React.useState(false);
  const classes1 = useStyles1();
  const handleOpen1 = () => {
    setOpen1(true);
    seteditedcap(props.data.caption);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
  //
  //
  //
  const [{ postId, File, Caption, Hashtag }, dispatch] = useDataLayerValue();
  const [comment, setComment] = useState('');
  const [postlike, setpostlike] = useState('');
  let [temcomments, settemComments] = useState('');
  const memeappid = localStorage.getItem('memeappid');
  const [totalcommentcount, settotalcommentcount] = useState('');
  var count = 0;
  var flag = 0;
  function likepost2(postid) {
    count++;
    flag++;
    if (count == 2 && flag == 2) {
      axios
        .post('/api/posts/like_dislike/', {
          token: localStorage.getItem('memeapptoken'),
          post_id: postid,
        })
        .then((res) => {
          console.log(res);
          if (!res.data.liked) {
            axios
              .post('/api/posts/like_dislike/', {
                token: localStorage.getItem('memeapptoken'),
                post_id: postid,
              })
              .then((res) => console.log(res))
              .catch((err) => console.log(err));
          }
        })
        .catch((err) => console.log(err));
    } else {
      setTimeout(() => {
        count = 0;
      }, 1000);
    }
  }
  // async function commentarray(id) {
  //   await axios
  //     .post(`/api/posts/comments/`, {
  //       postID: id.data.id,
  //     })
  //     .then((res) => {
  //       settotalcommentcount(res.data);
  // }
  function settime() {
    var gotdate = new Date(props.data.date);
    var presentdate = new Date();
    // console.log(gotdate.toLocaleDateString("MMM DD YYYY"))

    var date_diff = gotdate.getDate() - presentdate.getDate();
    //console.log(date_diff)

    var hour_diff =
      presentdate.getTime() / 3600000 - gotdate.getTime() / 3600000;
    //console.log(Math.round(hour_diff))

    var time_diff = presentdate.getTime() / 60000 - gotdate.getTime() / 60000;
    //console.log(time_diff)

    var days = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'June',
      'July',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
    ];

    if (date_diff > 5) {
      return (
        gotdate.getDate() +
        ' ' +
        days[gotdate.getMonth()] +
        ' ' +
        gotdate.getFullYear()
      );
    } else if (date_diff > 1) {
      return date_diff + ' days ago';
    } else if (hour_diff > 1) {
      return Math.round(hour_diff) + ' hour ago';
    } else {
      return Math.round(time_diff) + ' min ago';
    }
  }
  const sendComment = async (e, Id) => {
    e.preventDefault();
    setComment('');
    await axios.post(`/api/posts/addcomment/`, {
      token: localStorage.getItem('memeapptoken'),
      postID: Id,
      comment: comment,
    });
    window.alert(Id);
    // .then((res) => {
    //   axios
    //     .post(`/api/posts/comments/`, {
    //       postID: Id,
    //     })
    //     .then((res) => {
    //       settemComments(res.data);
    //     });
    // });
  };

  async function postreport(id) {
    await axios
      .post(`/api/posts/report/${id}/`)
      .then((res) => console.log(res));
  }
  async function saveunsavepost(id) {
    await axios
      .post(`/api/posts/saveunsavepost/`, {
        token: localStorage.getItem('memeapptoken'),
        postID: id,
      })
      .then((res) => console.log(res));
  }

  async function postlikes(id) {
    await axios.get(`/api/posts/likes/${id}/`).then((res) => {
      console.log(res);
    });
  }
  function postidpass(id) {
    // dispatch({
    //   type: 'SET_postId',
    //   postId: id,
    // });
    console.log(postId);
  }

  // console.log(props.data.id);
  async function deletepost(id) {
    await axios
      .post(`api/posts/deletepost/${id}/`, {
        token: localStorage.getItem('memeapptoken'),
      })
      .then((res) => {
        window.location.reload();
      });
  }
  const [show, setshow] = useState(false);
  const showtrue = () => {
    setshow(true);
  };
  const showfalse = () => {
    setshow(false);
  };
  function likepost1(postid) {
    axios
      .post('/api/posts/like_dislike/', {
        token: localStorage.getItem('memeapptoken'),
        post_id: postid,
      })
      .then((res) => {
        console.log(res);
        if (!res.data.liked) {
          flag = 0;
        }
      })
      .catch((err) => console.log(err));
  }
  async function editpost() {
    if (editedcap == props.data.caption) {
      alert('you have not edited caption');
    } else {
      await axios
        .post(`/api/posts/editpost/${props.data.id}/`, {
          caption: editedcap,
          token: localStorage.getItem('memeapptoken'),
        })
        .then((res) => window.location.reload());
    }
  }
  return (
    <div className='Postclick'>
      {props.data != null ? (
        <div className='Postclick-mb'>
          {/* {commentarray(props.data.id)} */}
          <div className='Postclick-mb-container-1'>
            <div className='seprate-1'>
              <div className='Postclick-mb-img'>
                <img
                  src={`https://res.cloudinary.com/di9lrcrlj/${props.data.user.userimage}`}
                />
              </div>

              <div className='Postclick-mb-name'>
                <p>{props.data.user.user.username}</p>
                <span>
                  {props.data.user.user.first_name +
                    ' ' +
                    props.data.user.user.last_name}
                </span>
              </div>
            </div>

            <div className='seprate-2'>
              <div className='Postclick-mb-time'>
                <span>{settime()}</span>
              </div>
              <div className='Postclick-mb-ore'>
                <img
                  src='https://img.icons8.com/material-rounded/24/000000/menu-2.png'
                  aria-controls='simple-menu'
                  aria-haspopup='true'
                  onClick={handleClick2}
                />
                <Menu
                  id='simple-menu'
                  anchorEl={anchorEl2}
                  open={Boolean(anchorEl2)}
                  onClose={handleClose2}
                >
                  <MenuItem
                    onClick={() => {
                      handleClose2();
                      postreport(props.data.id);
                    }}
                  >
                    Report
                  </MenuItem>
                  <MenuItem onClick={handleClose2}>Unfollow</MenuItem>
                  {memeappid == props.data.user.user.id ? (
                    <MenuItem
                      onClick={() => {
                        handleClose2();
                        deletepost(props.data.id);
                      }}
                    >
                      Delete Post
                    </MenuItem>
                  ) : (
                    <div></div>
                  )}
                  {memeappid == props.data.user.user.id ? (
                    <div>
                      <MenuItem
                        onClick={() => {
                          handleOpen1();
                        }}
                      >
                        Edit Post
                      </MenuItem>

                      <Modal
                        aria-labelledby='transition-modal-title'
                        aria-describedby='transition-modal-description'
                        className={classes1.modal}
                        open={open1}
                        onClose={handleClose1}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                          timeout: 500,
                        }}
                      >
                        <Fade in={open1}>
                          <div className={classes1.paper}>
                            <img
                              src={`https://res.cloudinary.com/di9lrcrlj/${props.data.image}`}
                            />
                            <input
                              onChange={(e) => seteditedcap(e.target.value)}
                              value={editedcap}
                            ></input>
                            <button onClick={(e) => editpost()}>Submit</button>
                          </div>
                        </Fade>
                      </Modal>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </Menu>
              </div>
            </div>
          </div>
          <div className='Postclick-comment-1'>
            <p className='Postclick-caption-default-1'>
              {props.data.caption}
              {/* <span>More</span> */}
            </p>
          </div>

          <div className='Postclick-mb-post'>
            <img
              src={`https://res.cloudinary.com/di9lrcrlj/${props.data.image}`}
              onClick={() => likepost2(props.data.id)}
            />
          </div>

          <div className='Postclick-mb-response'>
            <div className='postclick-photo-like'>
              <img
                className='active'
                src='/image/like.svg'
                onClick={() => likepost1(props.data.id)}
              />
              <span onClick={() => postlikes(props.data.id)}>69 Likes</span>
            </div>
            <div className='postclick-photo-share'>
              <img src='/image/save.svg' />
              <span>69 Likes</span>
            </div>

            <div
              className='postclick-photo-Bookmark'
              onClick={() => saveunsavepost(props.data.id)}
            >
              <img src='/image/share.svg' />
              <span>69 Likes</span>
            </div>
          </div>
          <div className='postclick-comment-section'>
            <div className='comment-show'>
              <div className='comment-show-1'>
                <div className='comment-show-1-1'>
                  <img src='/image/2.jpg'></img>
                  <div className='postclick-comment-name'>
                    <span className='postclick-comment-name-usename'>
                      Kshitij
                    </span>
                    <span className='postclick-comment-name-id'>Dumbre</span>
                  </div>
                </div>
                <p className='postclick-comment-time'>10:00AM</p>
              </div>
              <div className='comment-show-2'>
                <p className='Postclick-1stcomment'>
                  I’m just getting off my work right now I’m going home to pick
                  up some stuff and then get to the top to the bottom of a wall
                  of my own and my life was so hard to be able and to make a new
                  one ☝️ is my first season of season I’m just getting off my
                  work right now I’m going home to pick up some stuff and then
                  get to the top to the bottom of a wall of my own and my life
                  was so hard to be able and to make a new one ☝️ is my first
                  season of season
                  {/* <span>More</span> */}
                </p>
              </div>
            </div>
          </div>
          <div className='comment-input-0'>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <Typography className={classes.typography}>
                <Picker set='apple' />
              </Typography>
            </Popover>

            <a
              aria-describedby={id}
              variant='contained'
              color='primary'
              onClick={handleClick}
            >
              <InsertEmoticon onClick={() => setemojiclick(true)} />
            </a>

            <div className='comment-input'>
              <form
                className='postclick-form'
                onSubmit={(e) => sendComment(e, props.data.id)}
              >
                <input
                  className='comment-input-1'
                  type='text'
                  placeholder='Enter comment'
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />

                <button className='postclick-comment-button' type='submit'>
                  {/* <img src='https://img.icons8.com/ios/50/000000/topic.png' /> */}
                  <img src='https://img.icons8.com/ios/50/000000/topic.png' />
                </button>
              </form>
            </div>
          </div>
          <Link
            to={{
              pathname: '/Comment',
              state: {
                id: props,
              },
            }}
          >
            <div className='Postclick-view-comment'>
              <div onClick={() => postidpass(props.data.id)}>
                View All Comments <span>(299)</span>
              </div>
            </div>
          </Link>
        </div>
      ) : (
        <div>loadddd.....</div>
      )}
    </div>
  );
}

export default Postclick;
