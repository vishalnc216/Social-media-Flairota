import React from 'react'
import "./Edit.css"
// import profileimg from "/image/3.jpg";
import { useDataLayerValue } from "../ContextAPI/DataLayer";
import { Link } from 'react-router-dom';
import Topbar from '../Common/Topbar';
import Sidebar from '../Common/Sidebar';
function Edit() {
  const [{ Profileimage, Name, Username, Bio  }, dispatch] = useDataLayerValue();
    return (
      <div className="Edit-main">
      <Topbar/>
      <Sidebar/>
      <div className="Edit">
            <div className="Edit-Profileimg">
               <img src={Profileimage} alt=""/>
             <input  onChange={(e) =>
               dispatch({
                type: "SET_Profileimage",
                Profileimage: URL.createObjectURL(e.target.files[0]),
              }) }  type="file"/>
            </div>
            <div className="Edit-Name" id="flex">
              <label >Name</label>
              <input id="input" type="text" name="" value={Name} onChange={(e) =>
               dispatch({
                type: "SET_Name",
                Name: e.target.value,
              }) }/>
            </div>
            <div className="Edit-Username" id="flex">
              <label >Username</label>
              <input   id="input" type="text" name="" value={Username} onChange={(e) =>
               dispatch({
                type: "SET_Username",
                Username: e.target.value,
              }) }/>
            </div>
            <div className="Edit-bio" id="flex">
              <label >Bio</label>
              <textarea className="" rows="4" maxlength="150" cols="50"  spellCheck="false" value={Bio} onChange={(e) =>
               dispatch({
                type: "SET_Bio",
                Bio: e.target.value,
              }) }>
              </textarea>
            </div>
          
           <Link to="/Profile">    
            <div className="Edit-Submit">
              <button>Submit</button>
            </div>
            </Link>
            
            </div>
        </div>
    )
}

export default Edit
