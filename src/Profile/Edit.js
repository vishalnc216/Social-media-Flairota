import React,{useState,useEffect} from 'react'
import "./Edit.css"
// import profileimg from "/image/3.jpg";
import { useDataLayerValue } from "../ContextAPI/DataLayer";
import { Link } from 'react-router-dom';
import Topbar from '../Common/Topbar';
import Sidebar from '../Common/Sidebar';
import axios from '../axios'
function Edit() {
  
  const [editusername, seteditusername] = useState('');
  
  const [edituserbio, setedituserbio] = useState('');
  const [edituserprofileimage, setedituserprofileimage] = useState('');
  const [editfirstname, seteditfirstname] = useState('');
  const [editlastname, seteditlastname] = useState('');
  const [editemail, seteditemail] = useState('');
  let [editlocalstorageid, seteditlocalstorageid] = useState(null);
  let [editlocalstoragetoken, seteditlocalstoragetoken] = useState(null);
  const [{ Profileimage, Name, Username,lastname, Email, Bio }, dispatch] = useDataLayerValue();
  async function setvalues() {
    seteditlocalstorageid((editlocalstorageid = localStorage.getItem('memeappid')));
  
   
    await axios.get(`/api/accounts/user/${editlocalstorageid}/`).then((res) => {
      setedituserbio(res.data.bio);
     setedituserprofileimage(res.data.userimage);
     seteditusername(res.data.user.username);
     seteditfirstname(res.data.user.first_name);
     seteditlastname(res.data.user.last_name);
     seteditemail(res.data.user.email)
     
    });
  }
  async function editprofile(){
    await seteditlocalstoragetoken((editlocalstoragetoken = localStorage.getItem('memeapptoken')));
    await axios.post('/api/accounts/editprofile/',{
      token:editlocalstoragetoken,
      username:editusername,
      lastname:editlastname,
      firstname:editfirstname,
      email:editemail,
      bio:edituserbio
    }).then((res)=>console.log(res))
    window.location="http://localhost:3000/Profile"
  }
  useEffect(() => {
    setvalues()
  }, [])
    return (
      <div className="Edit-main">
      <Topbar/>
      <Sidebar/>
      <div className="Edit">
            <div className="Edit-Profileimg">
               <img src={`https://res.cloudinary.com/di9lrcrlj/${Profileimage}`} alt=""/>
             <input  onChange={(e) =>
               dispatch({
                type: "SET_Profileimage",
                Profileimage: URL.createObjectURL(e.target.files[0]),
              }) }  type="file"/>
            </div>
            <div className="firstname-lastname">
            <div className="Edit-Name" id="flex">
              <label >First Name</label>
              <input id="input" type="text" name="" value={editfirstname} onChange={(e) => seteditfirstname(e.target.value) }/>
            </div>  
            <div className="Edit-Name" id="flex">
              <label >Last Name</label>
              <input id="input" type="text" name="" value={editlastname} onChange={(e) => seteditlastname(e.target.value)}/>
            </div>

            </div>
            <div className="firstname-lastname">

            <div className="Edit-Username" id="flex">
              <label >Username</label>
              <input   id="input" type="text" name="" value={editusername} onChange={(e) =>seteditusername(e.target.value) }/>
            </div>
            <div className="Edit-Username" id="flex">
              <label >Email</label>
              <input   id="input" type="text" name="" value={editemail} onChange={(e) =>seteditemail(e.target.value) }/>
            </div>
            </div>
            <div className="Edit-bio" id="flex">
              <label >Bio</label>
              <textarea className="" rows="4" maxlength="150" cols="50"  spellCheck="false" value={edituserbio} onChange={(e) =>setedituserbio(e.target.value) }>
              </textarea>
            </div>
          
         
            <div className="Edit-Submit" onClick={()=>{editprofile()}}>
              <button>Submit</button>
            </div>
           
            
            </div>
        </div>
    )
}

export default Edit
