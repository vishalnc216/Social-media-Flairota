import { InsertEmoticon } from '@material-ui/icons'
import MicIcon from "@material-ui/icons/Mic";
import React,{useState} from 'react'
import "./Comment.css"
import { Link } from 'react-router-dom';

const Comment = () => {
    const [commentlike,setCommentLike]=useState(0)
    // let setCommentLike=0;
    const [count,setcount]=useState(0)
    let key=0;
    const [comment , setComment]=useState("");
    let [ temcomments, settemComments ] = useState([
        { comment: 'yo bitch', key: key++ },
        
    ]);
    
    const presslike =()=>{
        setcount(count+1);
       if(count % 2 == 0){

           setCommentLike(commentlike+1);
       }
       else{
           setCommentLike(commentlike-1);
       } 
    }
   
    // const [comment , setComment] = useState[""];
    const  sendComment = ((e)=>{
        e.preventDefault();
        
        const tempArray = temcomments.slice();
        tempArray.push({ comment: comment, key: key++ });
        settemComments( temcomments = tempArray );
        setComment('');}
    )
    console.log("hello😉" , temcomments);
    
   
    return (
        <div className="comment-comment">
            <Link to="./home">
            <div className="comment-topbar">
                <div className="comment-back-button" ><InsertEmoticon/></div>
            </div>
            </Link>
            <div className="comment-countainer-1">
            <div className="comment-seprate">
                         
                    <div className="seprate-1">
                            
                            <div className="comment-mb-img">
                                <img src="/image/3.jpg"/>
                            </div>

                            <div className="comment-mb-name">
                                <p>Lucifer👿 </p>
                                <span>Devil</span>
                            </div>
                        </div>
                        
                        <div className="seprate-2">
                            <div className="comment-mb-time">
                                <span>10min ago</span>
                            </div>
                            <div className="comment-mb-ore">
                                <img src="https://img.icons8.com/material-rounded/24/000000/menu-2.png" />
                        
                            </div>
                        </div>
                     </div>
            <hr className="comment-hr"/>
            
                <div className="comment-photo">
                    <img src="/image/2.jpg"/>
                </div>
                <hr/>
                <div className="comment-mb-response">
                        
                            <div className="comment-photo-like">
                                <img className="active" src="https://img.icons8.com/fluent/50/000000/filled-like.png"/>
                                <span>69 Likes</span>
                            </div>
                            <div className="comment-photo-share">
                                <img src="https://img.icons8.com/material/24/000000/filled-sent.png"/>
                                <span>69 Likes</span>
                            </div>
                        
                            
                            <div className="comment-photo-Bookmark">
                                <img src="https://img.icons8.com/wired/64/000000/bookmark-ribbon.png"/>
                                <span>69 Likes</span>
                            </div>
                        
                </div>
                {temcomments.map((data)=> {
                    return(
                <div className="comment-main-countainer">
                  
                    <div className="comment-comment-section">
                            <div className="comment-show">
                                <div className="comment-show-1">
                                <div className="comment-show-1-1">
                                    <img src="/image/2.jpg"></img>
                                    <div className="comment-comment-name">
                                        <span className="comment-comment-name-usename">Kshitij</span>
                                        <span className="comment-comment-name-id">Dumbre</span>
                                    </div>
                                </div>  
                                    <p className="comment-comment-time">10:00AM</p>
                                </div>
                                <div className="comment-show-2">
                                <p className="comment-1stcomment">{data.comment}
                                {/* <span>More</span> */}
                                </p>
                                <div className="comment-2reply">
                                    <small>reply</small>
                                    <div className="comment-like-1">
                                        <img onClick={presslike} className="active" src="https://img.icons8.com/fluent/50/000000/filled-like.png"/>
                                        <span className="comment-like-count" >{commentlike}</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
               <hr/>
                
                </div>
                    )})}
            
              
            </div>
            <div className="comment-footer-main">

            <div className="comment-footer">
            
                <InsertEmoticon/>
                <form>
                    <input 
                    type="text" value={comment} onChange={(e)=>setComment(e.target.value)} placeholder="Type a Message"/>
                    <button onClick={(sendComment)}type="submit">Send a message</button>
                </form>
                <label  ><MicIcon/></label>

            </div>
            </div>
            {/* var key = 0; */}
    {/* let [ comments, setComments ] = useState([
        { comment: 'Nishant', key: key++ },
        { comment: 'Yash', key: key++ },
        { comment: 'Vishal', key: key++ },
        { comment: 'Kshitij', key: key++ },
        { comment: 'Saish', key: key++ },
        { comment: 'Gaurav', key: key++ },
    ]);

    const [ newComment, setNewComment ] = useState('');

    function ChangeNewComment(enteredText: string) {
        setNewComment(enteredText);
    }

    function AddNewComponent() {
        const tempArray = comments.slice();
        tempArray.push({ comment: newComment, key: key++ });
        setComments( comments = tempArray );
        setNewComment('');
    } */}

        </div>
        
        
        
    )
}

export default Comment

