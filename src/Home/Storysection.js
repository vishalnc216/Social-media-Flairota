import React,{useState} from 'react'
import "./Storysection.css"

function Storysection() {
  const[Stories,setStories]=useState([
    {
      "profileimg":"/image/3.jpg",
      "username":"John"
    },
    {
      "profileimg":"/image/3.jpg",
      "username":"Sam"
    }
  ])
    return (
      <div className="Storysection">

        {Stories.map((Story)=>{
          return(

          
             <div className="Story-countainer1">
                
                  <div className="Story-img-countainer">
                    <img className="Story-img" src={Story.profileimg}/>
                  </div>
                    
                    <span className="Story-name">{Story.username}</span>
                    
              </div>
             
             
        
          )
  
        })}
      </div>
    )
}

export default Storysection
