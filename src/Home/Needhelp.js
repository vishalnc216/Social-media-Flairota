import React from 'react';
import Sidebar from '../Common/Sidebar';
import './Needhelp.css';
import Topbar from '../Common/Topbar';
import axios from '../axios';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

function Needhelp() {
  // const [explorecollection, setexplorecollection] = useState('');
  // useEffect(() => {
  //   axios.get(`api/posts/`).then((res) => {
  //     setexplorecollection(res.data);
  //   });
  // }, []);
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
  return (
    <div className='needhelp-main'>
      <Sidebar />
      <Topbar />
      <div className='needhelp'>
        <div onClick={handleOpen} className='needhelp-countainer'>
          <div className='needhelp-c1'>
            <img
              // src={`https://res.cloudinary.com/di9lrcrlj/${props.data.image}`}
              src='/image/7.jpg'
              alt=''
            />
          </div>
          <div className='needhelp-c2'>
            {/* <div className='needhelp-c2-caption'>{props.data.caption}</div> */}
          </div>
        </div>
        <div onClick={handleOpen} className='needhelp-countainer'>
          <div className='needhelp-c1'>
            <img
              // src={`https://res.cloudinary.com/di9lrcrlj/${props.data.image}`}
              src='/image/7.jpg'
              alt=''
            />
          </div>
          <div className='needhelp-c2'>
            {/* <div className='needhelp-c2-caption'>{props.data.caption}</div> */}
          </div>
        </div>
        <div onClick={handleOpen} className='needhelp-countainer'>
          <div className='needhelp-c1'>
            <img
              // src={`https://res.cloudinary.com/di9lrcrlj/${props.data.image}`}
              src='/image/7.jpg'
              alt=''
            />
          </div>
          <div className='needhelp-c2'>
            {/* <div className='needhelp-c2-caption'>{props.data.caption}</div> */}
          </div>
        </div>
        <div onClick={handleOpen} className='needhelp-countainer'>
          <div className='needhelp-c1'>
            <img
              // src={`https://res.cloudinary.com/di9lrcrlj/${props.data.image}`}
              src='/image/7.jpg'
              alt=''
            />
          </div>
          <div className='needhelp-c2'>
            {/* <div className='needhelp-c2-caption'>{props.data.caption}</div> */}
          </div>
        </div>
        <div onClick={handleOpen} className='needhelp-countainer'>
          <div className='needhelp-c1'>
            <img
              // src={`https://res.cloudinary.com/di9lrcrlj/${props.data.image}`}
              src='/image/7.jpg'
              alt=''
            />
          </div>
          <div className='needhelp-c2'>
            {/* <div className='needhelp-c2-caption'>{props.data.caption}</div> */}
          </div>
        </div>
        <div onClick={handleOpen} className='needhelp-countainer'>
          <div className='needhelp-c1'>
            <img
              // src={`https://res.cloudinary.com/di9lrcrlj/${props.data.image}`}
              src='/image/7.jpg'
              alt=''
            />
          </div>
          <div className='needhelp-c2'>
            {/* <div className='needhelp-c2-caption'>{props.data.caption}</div> */}
          </div>
        </div>
        <div onClick={handleOpen} className='needhelp-countainer'>
          <div className='needhelp-c1'>
            <img
              // src={`https://res.cloudinary.com/di9lrcrlj/${props.data.image}`}
              src='/image/7.jpg'
              alt=''
            />
          </div>
          <div className='needhelp-c2'>
            {/* <div className='needhelp-c2-caption'>{props.data.caption}</div> */}
          </div>
        </div>
        <div onClick={handleOpen} className='needhelp-countainer'>
          <div className='needhelp-c1'>
            <img
              // src={`https://res.cloudinary.com/di9lrcrlj/${props.data.image}`}
              src='/image/7.jpg'
              alt=''
            />
          </div>
          <div className='needhelp-c2'>
            {/* <div className='needhelp-c2-caption'>{props.data.caption}</div> */}
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
              {/* <Postclick data={props.data} />
            {explorecollection != '' ? (
              explorecollection.map((data) => {
                return <Postclick data={data} />;
              })
            ) : (
              <div>nope</div>
            )} */}
              Hello
            </div>
          </Fade>
        </Modal>
        {/* <div className='needhelp'>hello</div> */}
      </div>
    </div>
  );
}

export default Needhelp;
