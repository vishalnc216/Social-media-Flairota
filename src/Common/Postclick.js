import React,{useState} from 'react'
import "./Postclick.css"
import { Link } from 'react-router-dom';
// import profileimg from "/image/3.jpg";
// import profileimg1 from "/image/8.jpg";
// import profileimg2 from "/image/9.jpg";

// import profileimg4 from "/image/7.jpg";
// import meme1 from "/image/meme2.jpg";

import { useDataLayerValue } from "../ContextAPI/DataLayer";

function Postclick() {
    const [{ File , Caption , Hashtag}] = useDataLayerValue();
    const[show , setshow]=useState(false)
    const showtrue = () => {
        setshow(true)
    }
    const showfalse = () => {
        setshow(false)
    }
    return (
        <div className="Postclick">
            
            <div className="Postclick-mb">
            {(show == true)?
            ( 
                <div className="Postclick-mb-options">
                <div>
                    Report
                </div>
                <div>
                    Report
                </div>
                <div>
                    Report
                </div>
                
                </div>
            ):
            (
                <div></div>
            )}
                
                <div className="Postclick-mb-container-1">
                     
                  <div className="seprate-1">
                    
                    <div className="Postclick-mb-img">
                        <img src="/image/3.jpg"/>
                    </div>

                    <div className="Postclick-mb-name">
                        <p>Lucifer👿 </p>
                        <span>Devil</span>
                    </div>
                  </div>
                  
                  <div className="seprate-2">
                    <div className="Postclick-mb-time">
                        <span>10min ago</span>
                    </div>
                    <div className="Postclick-mb-ore">
                        {(show == true)?(  <img src="https://img.icons8.com/ios/50/000000/multiply.png" onClick={showfalse}/>):(<img src="https://img.icons8.com/material-rounded/24/000000/menu-2.png" onClick={showtrue}/>)}
                  
                    </div>
                  </div>
                    
                </div>
                    <div className="Postclick-comment-1">
                        <p className="Postclick-caption-default-1">I’m just getting off my work right now I’m going home to pick up some stuff and then get to the top to the bottom of a wall of my own and my life was so hard to be able and to make a new one ☝️ is my first season of season I’m just getting off my work right now I’m going home to pick up some stuff and then get to the top to the bottom of a wall of my own and my life was so hard to be able and to make a new one ☝️ is my first season of season 
                         {/* <span>More</span> */}
                         </p> 
                </div>
                 
                <div className="Postclick-mb-post">
                    <img src="/image/10.jpg"/>
                </div>
               
                <div className="Postclick-mb-response">
                    
                        <div className="postclick-photo-like">
                             <img className="active" src="https://img.icons8.com/fluent/50/000000/filled-like.png"/>
                             <span>69 Likes</span>
                        </div>
                        <div className="postclick-photo-share">
                            <img src="https://img.icons8.com/material/24/000000/filled-sent.png"/>
                            <span>69 Likes</span>
                        </div>
                       
                        
                        <div className="postclick-photo-Bookmark">
                            <img src="https://img.icons8.com/wired/64/000000/bookmark-ribbon.png"/>
                            <span>69 Likes</span>
                        </div>
                    
                </div>
                <div className="postclick-comment-section">
                    <div className="comment-show">
                        <div className="comment-show-1">
                           <div className="comment-show-1-1">
                            <img src="/image/2.jpg"></img>
                            <div className="postclick-comment-name">
                                <span className="postclick-comment-name-usename">Kshitij</span>
                                <span className="postclick-comment-name-id">Dumbre</span>
                            </div>
                           </div>  
                            <p className="postclick-comment-time">10:00AM</p>
                        </div>
                        <div className="comment-show-2">
                        <p className="Postclick-1stcomment">I’m just getting off my work right now I’m going home to pick up some stuff and then get to the top to the bottom of a wall of my own and my life was so hard to be able and to make a new one ☝️ is my first season of season I’m just getting off my work right now I’m going home to pick up some stuff and then get to the top to the bottom of a wall of my own and my life was so hard to be able and to make a new one ☝️ is my first season of season 
                         {/* <span>More</span> */}
                         </p>
                        </div>
                    </div>
                </div>
                    <div className="comment-input">
                        <img src="https://img.icons8.com/ios/50/000000/topic.png"/>
                        <input className="comment-input-1" type="text" placeholder="Enter comment"/>
                        <img src="https://img.icons8.com/ios/50/000000/topic.png"/>
                    </div>
               <Link to="./Comment">
                <div className="Postclick-view-comment">
                    <div>View All Comments <span>(299)</span></div>
                </div>
                </Link>

            </div>
           
           
           
           
      </div>
        
    )
}

export default Postclick;
