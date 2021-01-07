import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chat from '../components/Chat.js';


class JobView extends Component {

  state = {
    jobName: 'asd',
};

render()
{
    return (
       <div>

      <h1>Job: {this.state.jobName}</h1>
      <Chat />
      </div>
  );
};
};


export default JobView;