import React from 'react';
import Header from './start/Header';
import Form from './start/Form';
import './App.css';
import Signup from './start/Signup';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from 'react-router-dom';
import Body from './Common/Body';
import Edit from './Profile/Edit';
import Profile from './Profile/Profile';

import Chattext from './Chat/Chattext';
import Signup1 from './start/Signup1';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/' exact>
            <Header />
            <Form />
          </Route>
          <Route path='/Signup' exact>
            <Header />
            <Signup />
          </Route>
        </Switch>
        <Body />
        {/* <Chattext /> */}
      </div>
    </Router>
  );
}

export default App;
