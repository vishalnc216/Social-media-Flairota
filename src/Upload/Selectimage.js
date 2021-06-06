import React from 'react';
import './Selectimage.css';
import { useDataLayerValue } from '../ContextAPI/DataLayer';
import { Link } from 'react-router-dom';
import Topbar from '../Common/Topbar';
import Sidebar from '../Common/Sidebar';
function Selectimage() {
  const [{ File }, dispatch] = useDataLayerValue();
  return (
    <div>
      <Topbar />
      <Sidebar className='Sidebar' location='upload' />
      <div className='Selectimage'>
        <input
          type='file'
          name=''
          value=''
          id='File'
          onChange={(e) =>
            dispatch({
              type: 'SET_File',
              File: URL.createObjectURL(e.target.files[0]),
            })
          }
          hidden
        />

        <label for='File' className='Selectimage-btn1'>
          Select Image
        </label>
        {/* {(File != "") ? (
     <div>
        <div>
         Image Preview :     
        </div>
        <img src={File} alt="" className="Selectimage-img" />
        <Link to="/editor">
     
          <label  className="Selectimage-btn2"  >Start Editing</label>
        </Link> 
     
     </div>)
     :<div></div> } */}
        <div>
          <div className='Selectimage-img-section'>
            <div>Image Preview :</div>
            {console.log(File)}
            <img src={File} alt='' className='Selectimage-img' />
          </div>
          <Link to='/editor'>
            <label className='Selectimage-btn2'>Start Editing</label>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Selectimage;
