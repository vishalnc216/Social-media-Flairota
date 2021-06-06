import React, { useEffect, useState, useReducer } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import './Story.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useDataLayerValue } from '../ContextAPI/DataLayer.js';
import axios from '../axios';

let abc = undefined;
const Story = (props) => {
  let history = useHistory();
  const [{ storylist }] = useDataLayerValue();

  let [storyimage, setstoryimage] = useState('');
  let [urlstoryindex, seturlstoryindex] = useState('');
  let [urlstorylist, seturlstorylist] = useState('');
  let [storyuserimage, setstoryuserimage] = useState('');
  let [storyusername, setstoryusername] = useState('');
  let [userindex, setuserindex] = useState(null);
  let [storyindex, setstoryindex] = useState(0);

  async function urlgetstories() {
    setuserindex((userindex = props.match.params.userid));
    await axios
      .get(`/api/posts/getsotries/${userindex}/`)
      .then((res) => {
        seturlstorylist((urlstorylist = res.data));
        console.log(urlstorylist);
      })
      .catch((err) => console.log(err));
    seturlstoryindex(
      (urlstoryindex = urlstorylist.findIndex(
        (obj) => obj.id == props.match.params.storyid
      ))
    );
    // console.log(urlstoryindex);
    abc = setInterval(function () {
      if (urlstoryindex < urlstorylist.length - 1) {
        seturlstoryindex((urlstoryindex = urlstoryindex + 1));
      } else {
        history.push('/home');
        clearTimeout(abc);
      }
    }, 3000);
  }

  useEffect(() => {
    document.body.style.backgroundColor = '#1a1a1a';
    if (storylist == '') {
      urlgetstories();
    } else {
      setuserindex(
        (userindex = storylist.findIndex(
          (obj) => obj.user.user.id == props.match.params.userid
        ))
      );
      // history.push(`/stories/${storylist[userindex].user.user.username}/${storylist[userindex].user.user.id}/${storylist[userindex].stories[storyindex].id}`)
      console.log(userindex);
      // console.log(storylist[1].stories.length);

      abc = setInterval(function () {
        if (storyindex < storylist[userindex].stories.length - 1) {
          setstoryindex((storyindex = storyindex + 1));
          // console.log(storyindex);
        } else {
          if (userindex < storylist.length - 1) {
            setuserindex((userindex = userindex + 1));
            if (storyindex == 0) {
              history.push(
                `/stories/${storylist[userindex].user.user.username}/${storylist[userindex].user.user.id}/${storylist[userindex].stories[storyindex].id}`
              );

              // console.log(userindex);
              setstoryimage(
                (storyimage = storylist[userindex].stories[storyindex].image)
              );
              setstoryuserimage(
                (storyuserimage = storylist[userindex].user.userimage)
              );
              setstoryusername(
                (storyusername = storylist[userindex].user.user.username)
              );
              //  console.log(storyimage);
            }
            setstoryindex((storyindex = 0));
            //  console.log(storyindex);
            history.push(
              `/stories/${storylist[userindex].user.user.username}/${storylist[userindex].user.user.id}/${storylist[userindex].stories[storyindex].id}`
            );
          } else {
            clearTimeout(abc);
            history.push('/home');
          }
        }
      }, 3000);

      // console.log(storylist);
    }
  }, []);

  useEffect(() => {
    if (urlstorylist != '') {
      history.push(
        `/stories/${urlstorylist[0].user.user.username}/${urlstorylist[0].user.user.id}/${urlstorylist[urlstoryindex].id}`
      );

      // console.log(userindex);
      setstoryimage((storyimage = urlstorylist[urlstoryindex].image));
      setstoryuserimage(
        (storyuserimage = urlstorylist[urlstoryindex].user.userimage)
      );
      setstoryusername(
        (storyusername = urlstorylist[urlstoryindex].user.user.username)
      );
      //  console.log(storyimage);

      //  alert(storylist[1].stories.length)
    }
  }, [urlstoryindex]);

  useEffect(() => {
    if (storylist == '') {
      console.log('abc');
    } else {
      // console.log(storylist[userindex].stories.length);

      if (
        storyindex != -1 &&
        storyindex < storylist[userindex].stories.length
      ) {
        history.push(
          `/stories/${storylist[userindex].user.user.username}/${storylist[userindex].user.user.id}/${storylist[userindex].stories[storyindex].id}`
        );

        // console.log(userindex);
        setstoryimage(
          (storyimage = storylist[userindex].stories[storyindex].image)
        );
        setstoryuserimage(
          (storyuserimage = storylist[userindex].user.userimage)
        );
        setstoryusername(
          (storyusername = storylist[userindex].user.user.username)
        );
        //  console.log(storyimage);
      }
    }
    //  alert(storylist[1].stories.length)
  }, [storyindex]);

  function prevstory() {
    if (storylist == '') {
      if (urlstoryindex != 0) {
        clearTimeout(abc);
        seturlstoryindex((urlstoryindex = urlstoryindex - 1));
        abc = setInterval(function () {
          if (urlstoryindex < urlstorylist.length - 1) {
            seturlstoryindex((urlstoryindex = urlstoryindex + 1));
          } else {
            history.push('/home');
            clearTimeout(abc);
          }
        }, 3000);
      } else {
        clearTimeout(abc);
        history.push('/home');
      }
    } else {
      if (storyindex != 0) {
        setstoryindex((storyindex = storyindex - 1));
        // console.log("prevstoin:",storyindex);
        clearTimeout(abc);

        abc = setInterval(function () {
          if (storyindex < storylist[userindex].stories.length - 1) {
            setstoryindex((storyindex = storyindex + 1));
            console.log(storyindex);
          } else {
            if (userindex < storylist.length - 1) {
              setuserindex((userindex = userindex + 1));
              setstoryindex((storyindex = 0));
              //  console.log(storyindex);
              history.push(
                `/stories/${storylist[userindex].user.user.username}/${storylist[userindex].user.user.id}/${storylist[userindex].stories[storyindex].id}`
              );
            } else {
              //  history.push('/home')
              console.log('else');
              clearTimeout(abc);
            }
          }
        }, 3000);
      } else {
        if (userindex == 0) {
          clearTimeout(abc);
          history.push('/home');
        } else {
          clearTimeout(abc);
          setuserindex((userindex = userindex - 1));
          // console.log(storylist[userindex].stories.length-1);
          setstoryindex((storyindex = storylist[userindex].stories.length - 1));
          // clearTimeout(abc)
          // console.log("prevst0:",storyindex);
          // console.log("prevstuserind:",userindex);
          if (storyindex == 0) {
            history.push(
              `/stories/${storylist[userindex].user.user.username}/${storylist[userindex].user.user.id}/${storylist[userindex].stories[storyindex].id}`
            );

            // console.log(userindex);
            setstoryimage(storylist[userindex].stories[storyindex].image);
            setstoryuserimage(storylist[userindex].user.userimage);
            setstoryusername(storylist[userindex].user.user.username);
            console.log(storyimage);
          }
          // clearTimeout(abc)
          abc = setInterval(function () {
            if (storyindex < storylist[userindex].stories.length - 1) {
              setstoryindex((storyindex = storyindex + 1));
              console.log(storyindex);
            } else {
              if (userindex < storylist.length - 1) {
                if (storyindex == 0) {
                  setuserindex((userindex = userindex + 1));
                  history.push(
                    `/stories/${storylist[userindex].user.user.username}/${storylist[userindex].user.user.id}/${storylist[userindex].stories[storyindex].id}`
                  );

                  //  console.log(userindex);
                  setstoryimage(storylist[userindex].stories[storyindex].image);
                  setstoryuserimage(storylist[userindex].user.userimage);
                  setstoryusername(storylist[userindex].user.user.username);
                  console.log(storyimage);
                } else {
                  setuserindex((userindex = userindex + 1));

                  setstoryindex((storyindex = 0));
                  history.push(
                    `/stories/${storylist[userindex].user.user.username}/${storylist[userindex].user.user.id}/${storylist[userindex].stories[storyindex].id}`
                  );
                  //  console.log(storyindex);
                }
              } else {
                //  history.push('/home')
                //  console.log("else");
                clearTimeout(abc);
              }
            }
          }, 3000);
        }
      }
    }
  }

  function nextstory() {
    if (storylist == '') {
      if (urlstoryindex != urlstorylist.length - 1) {
        clearTimeout(abc);
        seturlstoryindex((urlstoryindex = urlstoryindex + 1));
        abc = setInterval(function () {
          if (urlstoryindex < urlstorylist.length - 1) {
            seturlstoryindex((urlstoryindex = urlstoryindex + 1));
          } else {
            history.push('/home');
            clearTimeout(abc);
          }
        }, 3000);
      } else {
        clearTimeout(abc);
        history.push('/home');
      }
    } else {
      if (
        userindex == storylist.length - 1 &&
        storyindex == storylist[userindex].stories.length - 1
      ) {
        clearTimeout(abc);
        history.push('/home');
      }
      if (
        userindex != storylist.length - 1 &&
        storyindex == storylist[userindex].stories.length - 1
      ) {
        clearTimeout(abc);
        setuserindex((userindex = userindex + 1));
        if (storyindex == 0) {
          history.push(
            `/stories/${storylist[userindex].user.user.username}/${storylist[userindex].user.user.id}/${storylist[userindex].stories[storyindex].id}`
          );

          // console.log(userindex);
          setstoryimage(storylist[userindex].stories[storyindex].image);
          setstoryuserimage(storylist[userindex].user.userimage);
          setstoryusername(storylist[userindex].user.user.username);
        }
        setstoryindex((storyindex = 0));
        abc = setInterval(function () {
          if (storyindex < storylist[userindex].stories.length - 1) {
            setstoryindex((storyindex = storyindex + 1));
            console.log(storyindex);
          } else {
            if (userindex < storylist.length - 1) {
              setuserindex((userindex = userindex + 1));
              setstoryindex((storyindex = 0));
              //  console.log(storyindex);
              history.push(
                `/stories/${storylist[userindex].user.user.username}/${storylist[userindex].user.user.id}/${storylist[userindex].stories[storyindex].id}`
              );
            } else {
              //  history.push('/home')
              //  console.log("else");
              clearTimeout(abc);
            }
          }
        }, 3000);
      } else {
        clearTimeout(abc);
        setstoryindex((storyindex = storyindex + 1));
        abc = setInterval(function () {
          if (storyindex < storylist[userindex].stories.length - 1) {
            setstoryindex((storyindex = storyindex + 1));
            // console.log(storyindex);
          } else {
            if (userindex < storylist.length - 1) {
              setuserindex((userindex = userindex + 1));
              setstoryindex((storyindex = 0));
              //  console.log(storyindex);
              history.push(
                `/stories/${storylist[userindex].user.user.username}/${storylist[userindex].user.user.id}/${storylist[userindex].stories[storyindex].id}`
              );
            } else {
              history.push('/home');
              //  console.log("else");
              clearTimeout(abc);
            }
          }
        }, 3000);
      }
    }
  }
  var lightdark;
  var [themer, setthemer] = useState('');
  useEffect(() => {
    setthemer(localStorage.getItem('themechanger'));
  }, []);
  const themechange = () => ({
    lighttheme: [
      { card: 'white' },
      { text: 'black' },
      { back: '' },
      { comment: 'white' },
      { border: 'none' },
    ],

    darktheme: [
      { card: '#000000' },
      { text: 'white' },
      { back: '#212121' },
      { comment: '#222222' },
      { border: '2px solid rgb(47, 51, 54)' },
    ],
  });
  lightdark = themechange();
  return (
    <div
      style={
        themer == 'true'
          ? {
              backgroundColor: lightdark.darktheme[0].card,
              color: lightdark.darktheme[1].text,
              // border: lightdark.darktheme[4].border,
            }
          : {
              backgroundColor: lightdark.lighttheme[0].card,
              color: lightdark.lighttheme[1].text,
              // border: lightdark.lighttheme[4].border,
            }
      }
      className='bg'
    >
      <div className='story-icons'>
        <img
          src='https://img.icons8.com/ios-glyphs/26/000000/less-than.png'
          className='icon1'
          onClick={() => prevstory()}
        />
        <img
          src='https://img.icons8.com/ios-glyphs/30/000000/more-than.png'
          className='icon2'
          onClick={() => nextstory()}
        />
      </div>
      <div className='Story'>
        <img src={`https://res.cloudinary.com/di9lrcrlj/${storyimage}`}></img>
        <div className='Story-bottom'>
          <div className='story-userinfo'>
            <img
              src={`https://res.cloudinary.com/di9lrcrlj/${storyuserimage}`}
            />
            <span>{storyusername}</span>
          </div>
          <a>Reply</a>
        </div>
      </div>
    </div>
  );
};

export default Story;
