import React from 'react'
import Content from "./Content";
import Recomend from "../Home/Recomend/Recomend";

function home() {
    return (
        <div>
          <div className= "Body_main">
            
            <Content className="Content"/>
            <Recomend className="Recomend" />
      </div>
        
        
         
        </div>
    )
}

export default (home);