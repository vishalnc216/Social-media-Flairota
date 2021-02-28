import React from 'react'
import Post from './Post'
import Followers from './Followers'
import Following from './Following'
import Saved from  './Saved'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Profilecontainer() {
    return (
        <div>
            <Router>
            <Switch>
            
            <Route path="/Post"  component={Post} />
            <Route path="/Following" component={Following} />
            <Route path="/Followers" component={Followers} />
            <Route path="/Saved" component={Saved} />
            
         </Switch>
            </Router>
        </div>
    )
}

export default Profilecontainer
