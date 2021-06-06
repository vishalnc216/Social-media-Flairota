import React, { useState, useEffect } from 'react';
import './Recomend.css';
import userrecommend from './userrecommend';
import { useDataLayerValue } from '../../ContextAPI/DataLayer';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Link } from 'react-router-dom';

function Recomend() {
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: '10px',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      outline: 'none',
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
  }, []);
  const themechange = () => ({
    lighttheme: [
      { card: '#f5f5ff' },
      { text: 'black' },
      { back: '' },
      { comment: 'white' },
      { bigbox: 'white' },
    ],
    darktheme: [
      { card: '#000000' },
      { text: 'white' },
      { back: '#212121' },
      { comment: '#222222' },
      { bigbox: 'rgb(14 14 14)' },
    ],
  });
  lightdark = themechange();
  return (
    <div
      className='Recomend'
      style={
        themer == 'true'
          ? {
              backgroundColor: lightdark.darktheme[0].card,
              color: lightdark.darktheme[1].text,
            }
          : {
              backgroundColor: lightdark.lighttheme[0].card,
              color: lightdark.lighttheme[1].text,
            }
      }
    >
      <div className='covid-help'>
        <div className='help-info'>
          <div className='help-name'>Covid Relief</div>
          <div className='help-button'>
            <button className='vacci' type='button'>
              Vaccination Center
            </button>
            <button className='covid-feedback' type='button'>
              Feedback
            </button>
          </div>
          <div className='help-button'>
            <button
              className='covid-help-button'
              type='button'
              onClick={handleOpen}
            >
              Help
            </button>
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
                  <div className='help-popup'>
                    <div className='help-1'>
                      <Link to='/Needhelpform'>
                        <img className='help-1-img' src='/image/7.jpg' />
                        <span> Need Help</span>
                      </Link>
                    </div>
                    <div className='help-1'>
                      <img className='help-1-img' src='/image/7.jpg' />
                      <span> Want To Help</span>
                    </div>
                    <div className='help-1'>
                      <img className='help-1-img' src='/image/7.jpg' />
                      <span> Need Help</span>
                    </div>
                    <div className='help-1'>
                      <img className='help-1-img' src='/image/7.jpg' />
                      <span> Need Help</span>
                    </div>
                  </div>
                </div>
              </Fade>
            </Modal>
            {/* <button className='help-button-press'> Help</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recomend;
