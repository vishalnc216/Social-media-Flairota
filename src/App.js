import React from "react";
import Header from "./start/Header";
import Form from "./start/Form";
import "./App.css";
import Signup from "./start/Signup";
import { BrowserRouter as Router, Switch, Route, HashRouter  } from "react-router-dom";
import Body from "./Common/Body";
import Edit from "./Profile/Edit"
import Profile from "./Profile/Profile"

import Chat from "./Chat/chat"
import Signup1 from "./start/Signup1";


function App() {
  return (
   <Router>

     <Switch>
      
       {/* <Route path="/Profile"> <Profile/></Route> */}
        </Switch>
    
      <div className="App">
        <Header />
        <Signup/> 
        <Switch>
          <Route path="/" exact component={Form} />
          <Route path="/Signup" component={Signup} />
          
          
        </Switch>
        {/* <Body /> */}
        
      </div>
    </Router>
  );
}

export default App;
