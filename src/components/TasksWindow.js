import React, { Component } from 'react';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {Button} from '@material-ui/core';
import PropTypes from 'prop-types';


class TasksWindow extends Component {



render()
{
  const taskWindowStyle = {
    height: "70vh",
    float: "left",
    width: "70%",
    backgroundColor: "rgb(95 95 95)",
  };

    return (

        <div style={taskWindowStyle}>
            Task1

          </div>
  );
};
};

export default TasksWindow;