import React from 'react'
import "./Submitpost.css"
import {Link} from 'react-router-dom';
import Topbar from "../Common/Topbar"
import Sidebar from "../Common/Sidebar"
import { useDataLayerValue } from "../ContextAPI/DataLayer";
function Submitpost() {
    const [{ File , Caption , Hashtag}, dispatch] = useDataLayerValue();
    return (
        <div className="Submitpost">
            
           

            <Topbar/>
            <Sidebar className="Sidebar" location="upload"/>
            <div   className="Submitpost-section-main">
                
            </div>
            <div className="Submitpost-section">
                
           <div className="Submitpost-preview">
               <div>
                   Edited Image:
               </div>
               <img src={File} alt=""/>
               {console.log(File)}
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
               <input id="input1" value={Hashtag} type="text" placeholder=""
                onChange={(e) => 
                dispatch({
                    type:"SET_Hashtag",
                    Hashtag : e.target.value,
                })
                }
               />
           </div> 
            <Link to="/editor">    
            <div  id="flex">
              <button className="Upload-button">Submit</button>
            </div>
            </Link>
            </div>
        </div>
    )
}

export default Submitpost
