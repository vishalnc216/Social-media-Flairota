import React, { useState, useEffect } from "react";
import "./editor.css";
import "tui-image-editor/dist/tui-image-editor.css";
import ImageEditor from "@toast-ui/react-image-editor";
import { useDataLayerValue } from "../ContextAPI/DataLayer";
import {useHistory,Link} from "react-router-dom"
import editorbtn from "./editorbtn"
const icona = require("tui-image-editor/dist/svg/icon-a.svg");
const iconb = require("tui-image-editor/dist/svg/icon-b.svg");
const iconc = require("tui-image-editor/dist/svg/icon-c.svg");
const icond = require("tui-image-editor/dist/svg/icon-d.svg");
const download = require("downloadjs");
const myTheme = {
  "menu.backgroundColor": "white",
  "common.backgroundColor": "#151515",
  "downloadButton.backgroundColor": "white",
  "downloadButton.borderColor": "white",
  "downloadButton.display": "none",
  "loadButton.display": "none",
  
  
  
  "menuBar.width": "2vw",

  "menu.normalIcon.path": icond,
  "menu.activeIcon.path": iconb,
  "menu.disabledIcon.path": icona,
  "menu.hoverIcon.path": iconc,
  "tui-colorpicker-palette-button.width": "2vw",
  "tui-colorpicker-palette-button.height": "2vw",
};
function HomePage() {
    const history = useHistory();
    const [{ File }, dispatch] = useDataLayerValue();
    const[image,setimage] = useState("");
//     var images = document.getElementsByClassName('.image');
//     for(var i = 0; i < images.length; i++) {
//         images[i].onclick = function (img) {
//         var index = File.findIndex(image => image === img.src);
//         console.log(index + ' clicked.');
//     }
// }
   
    //   function editimg(file){
    //       const pos =  ;

    // }
  const imageEditor = React.createRef();
  const saveImage = () => {
    const imageEditorInst = imageEditor.current.imageEditorInst;
    const data = imageEditorInst.toDataURL();
    dispatch({
      type: "SET_File",
      File: data,
  }) 
  
    // if (data) {
    //   const mimeType = data.split(";")[0];
    //   const extension = data.split(";")[0].split("/")[1];
    //   download(data, `image.${extension}`, mimeType);
    // }
  };
  return (
    <div className="home-page">
      {/* <editorbtn/> */}
     {/* <input type="file" name="" value="" id="File" onChange={(e) =>
                    dispatch({
                        type: "SET_File",
                        File: URL.createObjectURL(e.target.files[0]),
                    }) } hidden/> 
     <label for="File" className="editor-btn1" >Choose File</label>
      {/* <div className="center">
        <h1>Photo Editor</h1>
        <Button className="bu
        tton" onClick={saveImageToDisk}>
          Save Image to Disk
        </Button>
      </div> */}
     <Link to="/Submitpost">
     
     <label  className="editor-btn2" onClick={saveImage}>Save Changes</label> 
     </Link> 
      
      <ImageEditor
        className="ImageEditor"
        includeUI={{
          loadImage: {
            path: File,
            name: "SampleImage",
          },
          theme:  myTheme,
          menu: [
            "shape",
            "filter",
            "text",
            "crop",
            "flip",
            "icon",
            "mask",
            "rotate",
            "draw",
          ],
          initMenu: "filter",
          uiSize:  {
            width: "100vw",
            height: "100vh",
          },
           menuBarPosition: "bottom",
           
          
          
        }}
        selectionStyle={{
           cornerSize: 20,
          rotatingPointOffset: 70,
        }}
        usageStatistics={false}
        ref={imageEditor}
      />
         
         </div>
  );
}
export default HomePage;
