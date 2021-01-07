import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chat from '../components/Chat.js';
import SideBar from '../components/SideBar.js';
import TasksWindow from '../components/TasksWindow.js';
import {Link} from 'react-router-dom';

class JobView extends Component {

  state = {
    jobName: 'asd',
};

componentDidMount() {
    console.log("props: ",this.props);
}

render()
{
    return (
       <div>
        <Link to="/">
            <button>
         Back to list of jobs
            </button>
            </Link>
      <h1>Job state: {this.state.jobName}</h1>
        <h2>Job Props {this.props.jobName}!</h2>

      <TasksWindow />
      <Chat />
      <SideBar />
      </div>
  );
};
};


export default JobView;