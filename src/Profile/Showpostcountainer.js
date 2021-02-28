import React from 'react'
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import Showpost from "./Showpost"
function Showpostcountainer() {
    return (
        <div>
            <Router>
            <Switch>

                <Route path="/Showpost" component={Showpost} />
            </Switch>
             
        </Router  > 
        </div>
    )
}

export default Showpostcountainer
