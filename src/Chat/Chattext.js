
import "./Chattext.css"
import { Avatar , IconButton } from '@material-ui/core'
import React, {useState , useEffect} from 'react'
// import DountLargeIcon from "@material-ui/icons/DonutLarge";
// import ChatIcon from "@material-ui/icons/Chat";
import MicIcon from "@material-ui/icons/Mic";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { InputOutlined, InsertEmoticon, KeyboardArrowDown } from '@material-ui/icons';
function Chattext() {
    const [input ,setinput ] = useState("")
    const [chatImage,setchatImage] = useState("")
    const sendMessage = (e) => {
        e.preventDefault();
        console.log("hello😉" , input);
        
    }
    return (
        <div className="Chattext">
            <div className="chattext-countainer1">
                <img src="/image/3.jpg"/>
                <span className="chattext-name">Lucifer Mornigstar</span>
            </div>
           <div className="chat-countainer-main"> 
            <div className="Chatting-main">

                {/* <div className="chat-user">
                    
                    <small className="chat-img-text"><img className="chat-img-text" src="/image/meme2.jpg" ></img> </small>
                    <small className="chat-img-text"><img className="chat-img-text" ></img> I want, my project Become  most Successful project. and everyperson use that daily min  2 hr. I want, my project Become  most Successful project. and everyperson use that daily min  2 hr. I want, my project Become  most Successful project. and everyperson use that daily min  2 hr. I want, my project Become  most Successful project. and everyperson use that daily min  2 hr. </small>
                   
                    <span className="chat-time"> 6:00 PM</span>
                </div>
               <div className="chat-me-countainer">
                    <div className="chat-me">
                        
                        <small> {input} </small>
                        <span className="chat-time"> 6:00 PM</span>
                    </div>
                </div>  */}
                <p className={`chat-message ${ true && `chat-receiver`}`}> 
                {/* <span className="chat-name">Kshitij (Legend)</span> */}
                {input}
                
                <span className="chat-time1">
                    12:00PM
                </span>
                </p>
                <img src={chatImage}/>
            </div>
          
            
            </div>
            
           <div className="chattext-text">
              
              {/* <form>
                    <input value={input}
                            onChange={(e)=> setInput(e.target.value)} className="chattext-textinput" type="text" placeholder="Type a Message"/>
                    <button onClick = {sendMessage} type="submit">Send a message</button>
               </form> */}
               <div className="chat-footer">
                <InsertEmoticon/>
                <form>
                    <input value={input}
                    onChange={(e)=> setinput(e.target.value)} type="text" placeholder="Type a Message"/>
                    <button onClick = {sendMessage} type="submit">Send a message</button>
                </form>

                
                <input type="file" name="" value="" id="File1" onChange={(e) => setchatImage(URL.createObjectURL(e.target.files[0]))
                    } hidden/> 
                    <label for="File1"  ><MicIcon/></label>

                    {console.log(chatImage)}
           
            </div>
           </div>
           
        </div>
           
       
        
    )
}
    

export default Chattext







