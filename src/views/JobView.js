import React, { Component } from 'react';
import PropTypes from 'prop-types';


class JobView extends Component {

  state = {
    jobName: 'asd',
};

render()
{
    return (
      <h1>Job: {this.state.jobName}</h1>
  );
};
};


export default JobView;