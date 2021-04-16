import React,{useState,useEffect} from 'react';
import {useHistory} from "react-router-dom"
import './Storysection.css';
import { useDataLayerValue } from '../ContextAPI/DataLayer.js';
import axios from "../axios"
function Storysection() {
  let history = useHistory()
  const [
    { storylist},
    dispatch,
  ] = useDataLayerValue();
  // const [storylist, setstorylist] = useState("")
  async function getstorylist(){
    await axios.post('/api/posts/getsotries/',{
      token:localStorage.getItem("memeapptoken")
    })
    .then((res)=>{
      dispatch(
        {
          type: 'SET_storylist',
          storylist: res.data,
        }
      )
    })
    .catch((err)=>console.log(err))
  }
  async function showstory(userid,storyid,username,index){
    history.push({
      pathname: `/stories/${username}/${userid}/${storyid}`,
     
      
    })
  }
  useEffect(() => {
    getstorylist()
    
  }, [])
  return (
    <div className='Storysection' >
      {console.log(storylist)}
      {storylist != "" ?
      (
       storylist.map((data, index) => {return(

      <div className='Story-countainer1' onClick={()=>showstory(data.user.user.id,data.stories[0].id,data.user.user.username,index)}>
        <div className='Story-img-countainer'>
          <img className='Story-img' src={`https://res.cloudinary.com/di9lrcrlj/${data.user.userimage}`} />
        </div>

        <span className='Story-name'>{data.user.user.username}</span>
      </div>
         )
       })

        
      ):
      (<div></div>)
    }
   
    </div>
  );
}

export default Storysection;
