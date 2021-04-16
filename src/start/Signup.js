import React, { useState, useEffect } from 'react';
import './Signup.css';
import 'date-fns';
import { Link } from 'react-router-dom';
import { useDataLayerValue } from '../ContextAPI/DataLayer.js';
import { colors } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import axios from '../axios';
import Header from './Header';
import zxcvbn from 'zxcvbn';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib

import {
  DatePicker,
  KeyboardDatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
function Signup() {
  const linkStyle = {
    textDecoration: 'none',
  };
  const Iconshow = {
    display: 'block',
  };
  const Iconhide = {
    display: 'none',
  };
  function formatDate(date) {
    return (
      date.getMonth() + 1 + '/' + date.getFullYear() + '/' + date.getDate()
    );
  }
  const signupfunc = async (e) => {
    if (gender == 'Not selected') {
      window.alert('Select gender');
    } else {
      if (gender == 'Male') {
        setgender(1);
      }
      if (gender == 'Female') {
        setgender(2);
      }
      if (gender == 'Others') {
        setgender(3);
      }
      let DOB =
        ('0' + dob.getDate()).slice(-2) +
        '-' +
        ('0' + (dob.getMonth() + 1)).slice(-2) +
        '-' +
        dob.getFullYear();
      console.log(SignupEmailOrPhoneno);
      console.log(SignupUserName);
      console.log(SignupPassword);
      console.log(firstname);
      console.log(lastname);
      console.log(DOB);

      e.preventDefault();
      await axios
        .post('/api/accounts/signup/', {
          email: SignupEmailOrPhoneno,
          username: SignupUserName,
          password: SignupPassword,
          firstname: firstname,
          lastname: lastname,
          dob: DOB,
          mobile_no: phoneno,
          gender: gender,
        })
        .then(async (res) => {
          console.log(res.data.key);
          localStorage.setItem('memeapptoken', res.data.key);
          await axios
            .post('/api/accounts/verify_token/', {
              token: res.data.key,
            })
            .then((res) => {
              console.log(res.data.login);
              localStorage.setItem('memeappid', res.data.login);
            })
            .catch((err) => console.log(err));
          window.location = 'http://localhost:3000/home';
        })
        .catch((err) => console.log(err));
    }
  };
  const proceed1 = (e) => {
    e.preventDefault();
    setshowhide1('none');
    setshowhide2('block');
  };
  const proceed2 = (e) => {
    e.preventDefault();
    setshowhide1('block');
    setshowhide2('none');
  };
  const passwordvarify = () => {
    if (confirmpassword != SignupPassword) {
      return <h5 className='password-error'>it didn't match</h5>;
    } else {
      return (
        <h5 style={{ display: 'none' }} className='password-error'>
          it didn't match
        </h5>
      );
    }
  };
  const [
    { SignupUserName, SignupPassword, SignupEmailOrPhoneno },
    dispatch,
  ] = useDataLayerValue();
  useEffect(() => {
    if (SignupUserName != null) {
      axios
        .post('/api/accounts/verify_username/', {
          username: SignupUserName,
        })
        .then((res) => {
          console.log(res.data.avaliable);
          if (SignupUserName != null) {
            setdisplayicon('block');
          }
          if (SignupUserName == '') {
            setdisplayicon('none');
          }

          if (res.data.avaliable && !SignupUserName.includes('@')) {
            setshowicon(true);
          } else {
            setshowicon(false);
          }
        });
    }
  }, [SignupUserName]);
  const [score, setScore] = useState('null');
  const [pclass, setpclass] = useState('none');

  const [passwordnum, setpasswordnum] = useState();
  const [passwordchar, setpasswordchar] = useState();
  const [passwordsize, setpasswordsize] = useState();
  const [confirmpassword, setconfirmpassword] = useState();
  const [passwordtype, setpasswordtype] = useState('password');
  const [icon1style, seticon1style] = useState(Iconshow);
  const [icon2style, seticon2style] = useState(Iconhide);
  const [showicon, setshowicon] = useState(false);
  const [displayicon, setdisplayicon] = useState('none');
  const [firstname, setfirstname] = useState('');
  const [phoneno, setphoneno] = useState('');
  const [lastname, setlastname] = useState('');
  const [dob, setdob] = useState(new Date());
  const [showhide2, setshowhide2] = useState('none');
  const [showhide1, setshowhide1] = useState('block');
  const [gender, setgender] = useState('Not selected');
  const [maxdate, setmaxdate] = useState('');
  const passwordcheck = () => {
    var charformat = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    var numformat = /\d/g;
    if (SignupPassword.length > 8) {
      setpasswordsize(true);
    }
    if (numformat.test(SignupPassword)) {
      setpasswordnum(true);
    }
    if (charformat.test(SignupPassword)) {
      setpasswordchar(true);
    }
  };
  const testStrengthPassword = (e) => {
    dispatch({
      type: 'SET_SignupPassword',
      SignupPassword: e.target.value,
    });
    if (e.target.value !== '') {
      let pass = zxcvbn(e.target.value);
      setScore(pass.score);
      if (pass.score == '0') {
        setpclass('Very Weak');
      }
      if (pass.score == '1') {
        setpclass('Weak');
      }
      if (pass.score == '2') {
        setpclass('Medium');
      }
      if (pass.score == '3') {
        setpclass('Strong');
      }
      if (pass.score == '4') {
        setpclass('Very Strong');
      }
    } else {
      setScore('null');
      setpclass('none');
    }
  };
  useEffect(() => {
    var date = new Date();

    date.setFullYear(date.getFullYear() - 13);
    setmaxdate(date);
  }, []);
  return (
    <div>
      <div className='Form__main' style={{ display: showhide1 }}>
        <form className='From__main-1'>
          <center style={{ marginBottom: '10px' }}>
            <span className='Form__text'> Sign Up </span>
          </center>
          <div clas='username_input' style={{ position: 'relative' }}>
            {showicon ? (
              <CheckCircleIcon
                style={{ fill: 'green', display: displayicon }}
                className='CheckCircleIcon'
              />
            ) : (
              <CancelIcon
                style={{ fill: 'red', display: displayicon }}
                className='CheckCircleIcon'
              />
            )}

            <input
              className='Form__input-username'
              type='text'
              name=''
              required
              placeholder='Username'
              value={SignupUserName}
              onChange={(e) => {
                dispatch({
                  type: 'SET_SignupUserName',
                  SignupUserName: e.target.value,
                });
              }}
            />
          </div>
          <div></div>
          <input
            required
            className='Form__input-Email'
            type='text'
            name=''
            placeholder='Firstname'
            value={firstname}
            onChange={(e) => setfirstname(e.target.value)}
          />
          <input
            required
            className='Form__input-Email'
            type='text'
            name=''
            placeholder='Lastname'
            value={lastname}
            onChange={(e) => setlastname(e.target.value)}
          />

          <div className='Form__input-password-0'>
            <input
              required
              className='Form__input-password'
              type={passwordtype}
              name=''
              placeholder='Password '
              value={SignupPassword}
              onChange={testStrengthPassword}
            />
            <div className='visible-icon'>
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
          <sapn className='strength-password-container'>
            <span className='strength-password' data-score={score}></span>
          </sapn>
          <span className={pclass.replace(/ /g, '')}>{pclass}</span>

          <div className='Submit-next'>
            <button className='Form__input-button' onClick={proceed1}>
              Next
            </button>
          </div>

          <h3>SignUp With</h3>
          <div className='Form__Login-other'>
            <div className='Form__google-icon'>
              <img
                className='Form__google-img'
                src='https://img.icons8.com/color/50/000000/google-logo.png'
              />
            </div>
            <div className='Form__facebook-icon'>
              <img
                className='Form__facebook-img'
                src='https://img.icons8.com/fluent/48/000000/facebook-new.png'
              />
            </div>
          </div>
          <h2 className='Form__signup'>
            {' '}
            have an account?{' '}
            <Link to='/' style={linkStyle}>
              <a href='' className='Form__signup-link'>
                Sign in
              </a>
            </Link>
          </h2>
        </form>
      </div>
      <div className='Form__main1' style={{ display: showhide2 }}>
        <form className='From__main-1'>
          <center style={{ marginBottom: '10px' }}>
            <span className='Form__text'> Sign Up </span>
          </center>
          <input
            className='Form__input-Email'
            type='email'
            name=''
            required
            placeholder='Enter Your Email '
            value={SignupEmailOrPhoneno}
            onChange={(e) =>
              dispatch({
                type: 'SET_SignupEmailOrPhoneno',
                SignupEmailOrPhoneno: e.target.value,
              })
            }
          />

          <div className='Form__input-password-0'>
            <input
              className='Form__input-password'
              type='tel'
              name=''
              placeholder='Mobile No'
              value={phoneno}
              onChange={(e) => setphoneno(e.target.value)}
            />
          </div>
          <div className='Form__input-Gender'>
            <label for='gender'>Select your Gender</label>

            <select
              name='gender'
              id='gender'
              value={gender}
              onChange={(e) => setgender(e.target.value)}
            >
              <option value='Not selected'>Not selected</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
              <option value='Others'>Others</option>
            </select>
            {console.log(gender)}
          </div>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              value={dob}
              maxDate={maxdate}
              onChange={(date) => setdob(date)}
              format='dd-MM-yyyy'
              formatDate={(date) => formatDate(date)}
              required
            />
          </MuiPickersUtilsProvider>

          <div className='Submit-next'>
            <button
              className='Form__input-button'
              type='submit'
              onClick={signupfunc}
            >
              Sign Up
            </button>
          </div>

          <h3>SignUp With</h3>
          <div className='Form__Login-other'>
            <div className='Form__google-icon'>
              <img
                className='Form__google-img'
                src='https://img.icons8.com/color/50/000000/google-logo.png'
              />
            </div>
            <div className='Form__facebook-icon'>
              <img
                className='Form__facebook-img'
                src='https://img.icons8.com/fluent/48/000000/facebook-new.png'
              />
            </div>
          </div>
          <h2 className='Form__signup'>
            {' '}
            have an account?{' '}
            <Link to='/' style={linkStyle}>
              <a href='' className='Form__signup-link'>
                Sign in
              </a>
            </Link>
          </h2>
        </form>
      </div>
    </div>
  );
}

export default Signup;
