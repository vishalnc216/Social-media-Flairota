import React, { useEffect,useState,useReducer } from 'react';
import {useHistory,Redirect} from "react-router-dom"

import "./Story.css"
import { useDataLayerValue } from '../ContextAPI/DataLayer.js';

const Story = (props) => {
    let history = useHistory()
    const [
        { storylist},
        
    ] = useDataLayerValue();
    
    let [storyimage, setstoryimage] = useState("")
    let [storyuserimage, setstoryuserimage] = useState("")
    let [storyusername, setstoryusername] = useState("")
const [storyid, setstoryid] = useState(props.match.params.storyid)
// forceUpdate()
var i,j;
var userindex = storylist.findIndex(obj => obj.user.id==props.match.params.userid);
const getstories  = ()=>{
   //  console.log(i)
         // return <Redirect to='/login'  />
         // history.push(`/stories/${storylist[storyindex].user.user.username}/${storylist[storyindex].user.user.id}/${storylist[storyindex].stories[i+1].id}`)
         for ( i = storyindex; i < storylist.length; i++) {
          for ( j = 0; j < storylist[i].stories.length; j++) {
            setTimeout({
              function(){

                setstoryimage(storyimage=storylist[i].stories[j].image)
                setstoryuserimage(storyuserimage=storylist[i].stories[j].user.userimage)
                setstoryusername(storyusername=storylist[i].user.user.username)
                // console.log(i + " " +j)
                console.log(storyimage)
                console.log(storyusername)
              }
              
            }, 3000)
          }
           
        }
}
    useEffect(() => {
      console.log(props);
      
      
      
      console.log(storylist);
      
    }, [])
   
    return (
        <div className="bg">
        <div className="Story"> 
            <img src={`https://res.cloudinary.com/di9lrcrlj/${storyimage}`}></img>
            <div className="Story-bottom">
               <div className="story-userinfo">
                  <img src={`https://res.cloudinary.com/di9lrcrlj/${storyuserimage}`}/>
                  <span>{storyusername}</span>
                </div>
               <a>Reply</a>
            </div>
        </div>
        </div>
        )
}



export default Story;