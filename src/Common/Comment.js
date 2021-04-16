import { InsertEmoticon } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import React, { useState, useEffect } from 'react';
import './Comment.css';
import { Link } from 'react-router-dom';
import axios from '../axios';
import { useDataLayerValue } from '../ContextAPI/DataLayer';
import Topbar from './Topbar';
import { logDOM } from '@testing-library/dom';
import Comment2 from './Comment2';

const Comment = (props) => {
  const [commentlike, setCommentLike] = useState(0);
  const memeuserid = localStorage.getItem('memeappid');
  const memeusertoken = localStorage.getItem('memeapptoken');
  // let setCommentLike=0;
  const [count, setcount] = useState(0);
  let key = 0;
  const [comment, setComment] = useState('');
  let [temcomments, settemComments] = useState('');
  const [allcommentdata, setallcommentdata] = useState('');
  const [show, setshow] = useState(false);
  const showtrue = () => {
    setshow(true);
  };
  const showfalse = () => {
    setshow(false);
  };
  const { id } = props.location.state;

  async function commentarray() {
    await axios
      .post(`/api/posts/comments/`, {
        postID: id.data.id,
      })
      .then((res) => {
        settemComments(res.data.reverse());
      });
    // await axios.get(`/api/posts/${id}/`).then((res) => {
    //   setallcommentdata(res.data.user);
    // });
  }
  // console.log(temcomments);
  useEffect(() => {
    commentarray();
    setallcommentdata(id);
  }, []);
  // console.log(allcommentdata.data);

  // const [comment , setComment] = useState[""];
  const sendComment = async (e) => {
    e.preventDefault();
    // const tempArray = temcomments.slice();
    // tempArray.push({ comment: comment, key: key++ });
    // settemComments((temcomments = tempArray));
    setComment('');
    await axios
      .post(`/api/posts/addcomment/`, {
        token: localStorage.getItem('memeapptoken'),
        postID: id.data.id,
        comment: comment,
      })
      .then(async (res) => {
        await axios
          .post(`/api/posts/comments/`, {
            postID: id.data.id,
          })
          .then((res) => {
            settemComments(res.data.reverse());
          });
      });
  };

  // console.log(temcomments);

  return (
    // <div className='comment-topbar'>
    //   <Topbar />
    <div className='normal-comment'>
      {allcommentdata != '' ? (
        <div className='comment-comment'>
          {/* {show == true ? (
            <div className='comment-mb-options'>
              <div onClick={() => postreport(props.data.id)}>Report</div>
              <div>Unfollow</div>
              <div>Unfollow</div>
              <div>Unfollow</div>
              <div>Unfollow</div>
              <div>Unfollow</div>
              <div>Unfollow</div>
              <div>Unfollow</div>
              <div>Unfollow</div>
              <div>Unfollow</div>
              <div>Unfollow</div>
              <div>Unfollow</div>
            </div>
          ) : (
            <div></div>
          )} */}
          <Link to='./home'>
            <div className='comment-topbar'>
              <div className='comment-back-button'>
                <InsertEmoticon />
              </div>
            </div>
          </Link>
          <div className='comment-countainer-1'>
            <div className='comment-seprate'>
              <div className='seprate-1'>
                <div className='comment-mb-img'>
                  <img
                    src={`https://res.cloudinary.com/di9lrcrlj/${allcommentdata.data.user.userimage}`}
                  />
                </div>

                <div className='comment-mb-name'>
                  <p>{allcommentdata.data.user.user.username}</p>
                  <span>
                    {allcommentdata.data.user.user.first_name +
                      ' ' +
                      allcommentdata.data.user.user.last_name}
                  </span>
                </div>
              </div>

              <div className='seprate-2'>
                <div className='comment-mb-time'>
                  <span>10min ago</span>
                </div>
                <div className='comment-mb-ore'>
                  <img src='https://img.icons8.com/material-rounded/24/000000/menu-2.png' />
                </div>
              </div>
            </div>
            <hr className='comment-hr' />

            <div className='comment-photo'>
              <img
                src={`https://res.cloudinary.com/di9lrcrlj/${allcommentdata.data.image}`}
              />
            </div>
            <hr />
            <div className='comment-mb-response'>
              <div className='comment-photo-like'>
                <img
                  className='active'
                  src='https://img.icons8.com/fluent/50/000000/filled-like.png'
                />
                <span>69 Likes</span>
              </div>
              <div className='comment-photo-share'>
                <img src='https://img.icons8.com/material/24/000000/filled-sent.png' />
                <span>69 Likes</span>
              </div>

              <div className='comment-photo-Bookmark'>
                <img src='https://img.icons8.com/wired/64/000000/bookmark-ribbon.png' />
                <span>69 Likes</span>
              </div>
            </div>
            {temcomments == '' ? (
              <div></div>
            ) : (
              temcomments.map((data) => {
                return <Comment2 data={data} />;
              })
            )}
          </div>
          <div className='comment-footer-main'>
            <div className='comment-footer'>
              <InsertEmoticon />
              <form>
                <input
                  type='text'
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder='Type a Message'
                />
                <button onClick={sendComment} type='submit'>
                  Send a message
                </button>
              </form>
              <label>
                <MicIcon />
              </label>
            </div>
          </div>
          {/* var key = 0; */}
          {/* let [ comments, setComments ] = useState([
      { comment: 'Nishant', key: key++ },
      { comment: 'Yash', key: key++ },
      { comment: 'Vishal', key: key++ },
      { comment: 'Kshitij', key: key++ },
      { comment: 'Saish', key: key++ },
      { comment: 'Gaurav', key: key++ },
  ]);

  const [ newComment, setNewComment ] = useState('');

  function ChangeNewComment(enteredText: string) {
      setNewComment(enteredText);
  }

  function AddNewComponent() {
      const tempArray = comments.slice();
      tempArray.push({ comment: newComment, key: key++ });
      setComments( comments = tempArray );
      setNewComment('');
  } */}{' '}
        </div>
      ) : (
        <div>hello</div>
      )}
    </div>
    // </div>
  );
};

export default Comment;
