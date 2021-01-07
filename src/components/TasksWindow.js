import React, { Component } from 'react';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {Button} from '@material-ui/core';
import PropTypes from 'prop-types';
import AddModal from './AddModal';
import { useState } from 'react';


class TasksWindow extends Component {

myRef = React.createRef();

handleTaskSubmit = (evt) => {

};





componentDidMount() {
/*
  const node = this.myRef.current;

 // const [dynamicElems, setDynamicElems] = useState([]);

  node.addEventListener('click', (event) => {
    console.log("asd ",event);
    let coords = {
      x: event.screenX,
      y: event.screenY,
    };

    console.log("coords: ",coords);
 
  });*/
}


  
 // const [dynamicElems, setDynamicElems] = useState([]);
/*
addElement = () => {
  console.log("Add element");
    // Creates the dynamic paragraph
    const newDynamicElem = <p className={classes.elements}>This is paragraph</p>;
    // adds it to the state
    setDynamicElems(() => [...dynamicElems, newDynamicElem]);
};*/
  
// style={taskWindowStyle} className="taskWindow" ref={this.myRef}

render()
{
  const taskWindowStyle = {
    height: "70vh",
    float: "left",
    width: "70%",
    backgroundColor: "rgb(95 95 95)",
  };

    return (

        <div> 
            Task1
          
      <AddModal />
          </div>
  );
};
};

export default TasksWindow;