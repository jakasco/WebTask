import React, { Component } from 'react';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {Button} from '@material-ui/core';
import PropTypes from 'prop-types';
import AddModal from './AddModal';
import { useState } from 'react';


class TasksWindow extends Component {

handleTaskSubmit = (evt) => {

};

render()
{
    return (

        <div> 
            Task1
          
      <AddModal />
          </div>
  );
};
};

export default TasksWindow;