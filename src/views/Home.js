import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chat from '../components/Chat.js';
import SideBar from '../components/SideBar.js';
import TasksWindow from '../components/TasksWindow.js';
import {HashRouter as Router, Route} from 'react-router-dom';
import {Redirect} from 'react-router';
import JobView from './JobView';
import ListOfJobs from '../components/ListOfJobs';

class Home extends Component {

  state = {
    jobName: 'asd',
};

componentDidMount() {
    console.log("props home: ",this.props);
}

render()
{
    return (
       <div>

      <h1>Home: {this.state.jobName}</h1>
        <div>
             <h1>Jobs</h1>
             <h1>Users</h1>
             <h1>Customers</h1>
        </div>
        <ListOfJobs />
      </div>
  );
};
};


export default Home;