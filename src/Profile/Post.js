import React from 'react'
// import profileimg from "/image/3.jpg";
// import meme1 from "/image/meme2.jpg";
import "./Post.css";


import { useDataLayerValue } from "../ContextAPI/DataLayer";
import {Link } from "react-router-dom";
function Post() {
    const [{ File}] = useDataLayerValue();
    const Poststyle ={
        textdDecoration:"none",
    
    }
    return (

        
        <div className="Post" style={Poststyle}>
            
            {console.log("images",File)}
            {File?.map((file)=>{ 
                return (
               <Link to="/Showpost"> 
                    <img src={file} style={Poststyle} className="img"/> 
                </Link>

                );     
})
            }
            {/* const doubleValue = numbers.map((number)=>{   
    return (number * 2);   
});  */}
            {/* {Array(File)
                    .fill()
                    .map((_, i) => (
                        <Link to="/Showpost"> 
                          <img src={File} style={Poststyle} className="img"/> 
                        </Link>  
                    ))} */}
                
            
            
        </div> 
        
    )
}

export default Post
