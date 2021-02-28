import React from 'react'
import "./Followers.css"
// import meme1 from "/image/2.jpg"

function Followers() {
    return (
        <div className="Following">
        <div className="follow">
           <div className="Following-countainer">

                  {/* <img src={meme1}/>  */}

                  <div className="Following-countainer-1">
                     <p>Kaden Majeed</p>  
                     <span>@wellie😘</span> 
                  </div>
            </div> 
            <div className="Following-button">
                <button> Remove</button>
            </div>
        </div>
        
        
        
      
    </div>
    )
}

export default Followers
