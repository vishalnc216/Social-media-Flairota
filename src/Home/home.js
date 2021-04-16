import React from 'react'
import Content from "./Content";
import Recomend from "../Home/Recomend/Recomend";
import Topbar from '../Common/Topbar';
import Sidebar from '../Common/Sidebar';

function home() {
    return (
        <div>
          <div className= "Body_main">
            <Topbar/>
            <Sidebar className="Sidebar"/>
            <Content className="Content"/>
            <Recomend className="Recomend" />
      </div>
        
        
         
        </div>
    )
}

export default (home);