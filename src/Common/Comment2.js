import { InsertEmoticon } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import React, { useState, useEffect } from 'react';
import './Comment.css';
import { Link } from 'react-router-dom';
import axios from '../axios';
import { useDataLayerValue } from '../ContextAPI/DataLayer';
// import Topbar from './Topbar';
import { logDOM } from '@testing-library/dom';
// import Topbar from '../Common/Topbar';
function Comment2(props) {
  // console.log(props);

  const [commentlike, setCommentLike] = useState(0);
  const memeuserid = localStorage.getItem('memeappid');
  const memeusertoken = localStorage.getItem('memeapptoken');
  // let setCommentLike=0;
  const [show, setshow] = useState(false);
  const showtrue = () => {
    setshow(true);
  };
  const showfalse = () => {
    setshow(false);
  };

  const deletecomment = async (cid, commentid) => {
    // console.log(memeuserid);
    // console.log(allcommentdata.data.user.user.id);
    if (memeuserid == cid) {
      await axios
        .post(`/api/posts/deletecomment/${commentid}/`, {
          token: memeusertoken,
        })
        .then((res) => {
          if (res.data.deleted == true) {
            window.location.reload();
          }
        });
    } else {
      alert('hello');
    }
  };

  const presslike = async (commentid) => {
    await axios
      .post(`/api/posts/like_dislike_comment/${commentid}/`, {
        token: memeusertoken,
      })
      .then((res) => {
        showcommentlike(commentid);
        console.log(res);
      });
  };
  const showcommentlike = async (commentid) => {
    await axios.get(`/api/posts/get_comment_like/${commentid}/`).then((res) => {
      setCommentLike(res.data.length);
      console.log(res.data);
    });
  };
  return (
    <div className='comment-main-countainer'>
      {/* <Topbar /> */}
      <div className='comment-comment-section'>
        <div className='comment-show'>
          {show == true ? (
            <div className='comment-mb-options'>
              <div>Report</div>
              {memeuserid == props.data.user.user.id ? (
                <div
                  onClick={() =>
                    deletecomment(props.data.user.user.id, props.data.id)
                  }
                >
                  Delete Comment
                </div>
              ) : (
                <div></div>
              )}
            </div>
          ) : (
            <div></div>
          )}
          <div className='comment-show-1'>
            <div className='comment-show-1-1'>
              <img
                src={`https://res.cloudinary.com/di9lrcrlj/${props.data.user.userimage}`}
              ></img>
              <div className='comment-comment-name'>
                <span className='comment-comment-name-usename'>
                  {props.data.user.user.username}
                </span>
                <span className='comment-comment-name-id'>
                  {props.data.user.user.first_name +
                    ' ' +
                    props.data.user.user.last_name}
                </span>
              </div>
            </div>
            <div className='comment-show-1-2'>
              <p className='comment-comment-time'>10:00AM</p>
              <div className='Postclick-mb-ore'>
                {show == true ? (
                  <img
                    src='https://img.icons8.com/ios/50/000000/multiply.png'
                    onClick={showfalse}
                  />
                ) : (
                  <img
                    src='https://img.icons8.com/material-rounded/24/000000/menu-2.png'
                    onClick={showtrue}
                  />
                )}
              </div>
            </div>
          </div>
          <div className='comment-show-2'>
            <p className='comment-1stcomment'>
              {props.data.comment}
              {/* <span>More</span> */}
            </p>
            <div className='comment-2reply'>
              <div className='comment-like-1'>
                <img
                  onClick={() => presslike(props.data.id)}
                  className='active'
                  src='https://img.icons8.com/fluent/50/000000/filled-like.png'
                />
                <span className='comment-like-count'>{commentlike}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Comment2;
