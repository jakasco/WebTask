import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import JobView from './views/JobView';
import Home from './views/Home';
import {HashRouter as Router, Route} from 'react-router-dom';
import {Redirect} from 'react-router';
import {Grid} from '@material-ui/core';
import Nav from './components/Nav';

class App extends Component {

  state = {
    jobName: 'asd2',
  };

  render()
  {
  return (
    <div className="App">
   
   <Router>
              <Route exact path="/" render={(props) => (
                  <Home {...props} />
              )}/>
              <Route exact path="/jobview" render={(props) => (
                  <JobView {...props} jobName={this.state.jobName}/>
              )}/>
    </Router>
     
    </div>
    
  );
};
};

export default App;
