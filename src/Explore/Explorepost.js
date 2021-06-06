import React, { useState, useEffect } from 'react';
import './Explorepost.css';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Postclick from '../Common/Postclick';
import axios from '../axios';
function Explorepost(props) {
  const [explorecollection, setexplorecollection] = useState('');
  useEffect(() => {
    axios.get(`api/posts/`).then((res) => {
      setexplorecollection(res.data);
    });
  }, []);
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    paper: {
      backgroundColor: theme.palette.background.paper,
      overflow: 'scroll',
      boxShadow: theme.shadows[5],
      outline: 'none',
      borderRadius: '20px',
      width: '64vw',
      height: '95vh',
    },
  }));
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  var lightdark;
  var [themer, setthemer] = useState('');
  useEffect(() => {
    setthemer(localStorage.getItem('themechanger'));
    // dispatch({
    //   type: 'SET_themechange',
    //   themechange: lightdark,
    // });
  }, []);
  const themechange = () => ({
    lighttheme: [
      { card: 'white' },
      { text: 'black' },
      { back: '' },
      { comment: 'white' },
      { bigbox: 'white' },
      { border: 'none' },
      { boxShadow: '2px 2px 5px #acacac' },
    ],
    // f5f5ff
    darktheme: [
      { card: '#000000' },
      { text: 'white' },
      { back: '#212121' },
      { comment: 'rgb(32, 35, 39)' },
      { bigbox: 'rgb(14 14 14)' },
      { border: 'rgb(14 14 14)' },
      { boxShadow: '2px 2px 5px rgb(14 14 14)' },
    ],
  });
  lightdark = themechange();
  return (
    <div>
      <div
        style={
          themer == 'true'
            ? {
                backgroundColor: lightdark.darktheme[3].comment,
                color: lightdark.darktheme[1].text,
                boxShadow: lightdark.darktheme[6].boxShadow,
              }
            : {
                backgroundColor: lightdark.lighttheme[3].comment,
                color: lightdark.lighttheme[1].text,
                boxShadow: lightdark.lighttheme[6].boxShadow,
              }
        }
        onClick={handleOpen}
        className='Explorepost'
      >
        <div className='Explorepost-c1'>
          <img
            src={`https://res.cloudinary.com/di9lrcrlj/${props.data.image}`}
            alt=''
          />
        </div>
        <div className='Explorepost-c2'>
          {/* <div className='Explorepost-c2-caption'>{props.data.caption}</div> */}
          <div className='Explorepost-c2-userinfo'>
            <div className='Explorepost-c2-userinfo-text'>
              <div className='Explorepost-c2-username'>
                {props.data.user.user.username}
              </div>
              <div className='Explorepost-c2-name'>
                {props.data.user.user.first_name +
                  ' ' +
                  props.data.user.user.last_name}
              </div>
            </div>
            <div className='Explorepost-c2-profileimg'>
              <img
                src={`https://res.cloudinary.com/di9lrcrlj/${props.data.user.userimage}`}
              />
            </div>
          </div>
        </div>
      </div>

      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Postclick data={props.data} />
            {explorecollection != '' ? (
              explorecollection.map((data) => {
                return <Postclick data={data} />;
              })
            ) : (
              <div>nope</div>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default Explorepost;
