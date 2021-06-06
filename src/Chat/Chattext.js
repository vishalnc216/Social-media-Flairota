import './Chattext.css';
import { Avatar, IconButton } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
// import DountLargeIcon from "@material-ui/icons/DonutLarge";
// import ChatIcon from "@material-ui/icons/Chat";
import MicIcon from '@material-ui/icons/Mic';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {
  InputOutlined,
  InsertEmoticon,
  KeyboardArrowDown,
} from '@material-ui/icons';
function Chattext() {
  const [chatImage, setchatImage] = useState('');
  const [input, setInput] = useState('');
  const [seed, setSeed] = useState('');
  //   const { roomId } = useParams();
  const [roomName, setRoomName] = useState('');
  //   const [{ user }, dispatch] = useDataLayerValue();
  const [messages, setMessages] = useState([
    {
      name: 'nishat',
    },
  ]);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log('hello😉', input);
    setMessages([...messages, { msg: input }]);
    var element = document.getElementById('chat-body');
    element.scrollTop = element.scrollHeight;
    // db.collection('rooms').doc(roomId).collection('messages').add({
    //     messages :input,
    //     name : user.displayName,
    //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),

    // });
    setInput('');
  };
  return (
    <div className='Chattext'>
      <div className='chattext-countainer1'>
        <img src='/image/3.jpg' />
        <span className='chattext-name'>Lucifer Mornigstar</span>
      </div>
      <div className='chat-countainer-main'>
        <div className='chat-body' id='chat-body'>
          {messages.map((message) => (
            <div
              className={
                message.msg ==
                'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available'
                  ? 'chat-inside-rev'
                  : 'chat-inside'
              }
            >
              <p className={'chat-message'}>
                <span className='chat-name'>Nishat</span>
                <div className='chatmain'>
                  <pre className='chat-main-message'>{message.msg}</pre>
                </div>
              </p>
              <span className='chat-time'>12pm</span>
            </div>

            //   <div>
            //     <p>{message.name}</p>
            //     <span>{message.mes}</span>
            //   </div>
          ))}
        </div>
      </div>

      <div className='chat-footer'>
        <InsertEmoticon />
        <form onSubmit={sendMessage}>
          <textarea
            className='chat-textarea'
            rows='10'
            cols='50'
            spellCheck='false'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type='textarea'
            placeholder='Type a Message'
          />
          <button type='submit' className='chat-send'>
            Send
          </button>
        </form>

        {/* <input
          type='file'
          name=''
          value=''
          id='File1'
          onChange={(e) => setchatImage(URL.createObjectURL(e.target.files[0]))}
          hidden
        />
        <label for='File1'>
          <MicIcon />
        </label> */}

        {console.log(chatImage)}
      </div>
    </div>
  );
}

export default Chattext;
