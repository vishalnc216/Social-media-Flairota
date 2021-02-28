import React from 'react'
import Exploresection from './Exploresection'
import Trending from './Trending'
import "./Explore.css"

import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
function Explore() {
  
    const LinkStyle ={
      textDecoration:"none",
      color:"#000"
     
  };
    return (
      <Router>
<div className="Explore">
           <div className="Explore-header">
             <Link to="/Exploresection" style={LinkStyle}>
               <div className="Explore-header-explore">
                 Explore
               </div>
             </Link>
             <Link to="/Trending" style={LinkStyle}>
               <div className="Explore-header-trending">
                 Trending
               </div>
              </Link>
           </div>

           <div className="Explorepost-section">
             <Switch>
              <Route path="/Exploresection" component={Exploresection}/>
              <Route path="/Trending" component={Trending}/>
            </Switch>
             

            
           </div>
        </div>
      </Router>
        
    )
}

export default Explore
