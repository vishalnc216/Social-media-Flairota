import React from 'react';
import './Upload.css';
import editor from './editor';
import { Link } from 'react-router-dom';
import Edit from '../Profile/Edit';
import AccountBalanceRoundedIcon from '@material-ui/icons/AccountBalanceRounded';
import { useDataLayerValue } from '../ContextAPI/DataLayer';
import Topbar from '../Common/Topbar';
import Sidebar from '../Common/Sidebar';
// import axios from "../axios"

function Upload() {
  const [{ File, Caption, Hashtag }, dispatch] = useDataLayerValue();
  const Linkstyle = {
    textDecoration: 'none',
  };
  // const uploadfunc = (e)=>{
  //     e.preventDefault();
  //     axios.post('/api/posts/upload/')
  // }
  return (
    <div>
      <Topbar />
      <Sidebar className='Sidebar' location='upload' />
      <div className='Upload'>
        {/* <div className="upload-img">
                    <input type="file"  onChange={(e) =>
                    dispatch({
                        type: "SET_File",
                        File: URL.createObjectURL(e.target.files[0]),
                    }) } />
                    
                
                    <img src={File} alt=""/>
            </div>
            
           <div className="upload-caption" id="flex">
                <span>Enter Your Caption</span>
                <textarea className="text" value={Caption} spellCheck="false" type="text" rows="20"  cols="50"  placeholder="Rnter Caption" 
                onChange={(e)=> 
                  dispatch({
                      type:"SET_Caption",
                      Caption : e.target.value,
                  })
                }></textarea>
           </div>
           <div className="upload-main-Hashtag" id="flex">
               <span>Lorem Ipsum is simply dummy text :-</span>
               <input id="input2" value={Hashtag} type="text" placeholder=""
                onChange={(e) => 
                dispatch({
                    type:"SET_Hashtag",
                    Hashtag : e.target.value,
                })
                }
               />
           </div> */}
        {/* <Link to="/editor">    
            <div className="Upload-button">
              <button>Submit</button>
            </div>
            </Link> */}

        {/* <div className="uploadpost-c1">
                <AccountBalanceRoundedIcon/>
                </div>
                <div className="uploadpost-c2">
                    <div className="uploadpost-c2-caption">
                        <h2>Gallery  </h2>
                    </div>
                    
                </div>
               
            </div>
            <div className="uploadpost">
                
                <div className="uploadpost-c1">
                <AccountBalanceRoundedIcon/>
                </div>
            <div className="uploadpost-c2">
                <div className="uploadpost-c2-caption">
                    <h2>Meme Template </h2>
                </div>
                
            </div> */}
        <div className='upload-mb-main-container'>
          <Link
            to='/Selectimage'
            style={Linkstyle}
            className='gallery-countainer'
          >
            <div>
              <AccountBalanceRoundedIcon />
              <h2>Gallery</h2>
            </div>
          </Link>
          <hr></hr>
          <div className='meme-countainer'>
            <AccountBalanceRoundedIcon />
            <h2>Meme Template</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;
