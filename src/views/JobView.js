import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chat from '../components/Chat.js';
import SideBar from '../components/SideBar.js';
import TasksWindow from '../components/TasksWindow.js';
import {Link} from 'react-router-dom';

class JobView extends Component {

  state = {
    jobName: '',
};

componentDidMount() {
    console.log("props: ",this.props);
}


render()
{
    const buttonStyle = {
        fontSize: "18px",
        color: "white",
        backgroundColor: "black",
        marginTop: "20px"
    }
    return (
       <div style={{backgroundColor:"grey"}}>
        <Link to="/">
            <button style={buttonStyle}>
                Back to list of jobs
            </button>
            </Link>
      <h1>Job: {this.state.jobName}</h1>

      <TasksWindow />
      <Chat />
      <SideBar />
      </div>
  );
};
};


export default JobView;