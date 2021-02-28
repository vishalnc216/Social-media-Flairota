import React from 'react'
import Edit from 
'./Edit';
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
function Editroute() {
    return (
     <Router>
          <div>
              <Switch>
                 <Route path="/Edit" component={Edit}/> 
              </Switch>
          </div>
     </Router>
    )
}

export default Editroute
