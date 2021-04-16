import React, { useEffect,useState,useReducer } from 'react';
import {useHistory,Redirect} from "react-router-dom"

import "./Story.css"
import { useDataLayerValue } from '../ContextAPI/DataLayer.js';

const Story = (props) => {
    let history = useHistory()
    const [
        { storylist},
        
    ] = useDataLayerValue();
    
    const [storyimage, setstoryimage] = useState("")
    const [storyuserimage, setstoryuserimage] = useState("")
    const [storyusername, setstoryusername] = useState("")
const [storyid, setstoryid] = useState(props.match.params.storyid)
// forceUpdate()
var storyindex = storylist.findIndex(obj => obj.user.id==props.match.params.userid);
    const [i, seti] = useState(0)
    useEffect(() => {
      
    console.log(props);
       

       console.log(storylist);
    }, [])
    var myfunc=setTimeout(
       function(){
       
         console.log(i)
         // return <Redirect to='/login'  />
         // history.push(`/stories/${storylist[storyindex].user.user.username}/${storylist[storyindex].user.user.id}/${storylist[storyindex].stories[i+1].id}`)
         for (let i = storyindex; i < storylist.length; i++) {
             for (let j = 0; j < storylist[i].stories.length; j++) {
               setstoryimage(storylist[i].stories[j].image)
               setstoryuserimage(storylist[i].stories[j].user.userimage)
               setstoryusername(storylist[i].user.user.username)
             }
               
           }
       
     
       },3000
    )
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