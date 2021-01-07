import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chat from '../components/Chat.js';
import SideBar from '../components/SideBar.js';
import TasksWindow from '../components/TasksWindow.js';


class JobView extends Component {

  state = {
    jobName: 'asd',
};

render()
{
    return (
       <div>

      <h1>Job: {this.state.jobName}</h1>

      <TasksWindow />
      <Chat />
      <SideBar />
      </div>
  );
};
};


export default JobView;