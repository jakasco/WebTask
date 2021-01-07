import React, { Component } from 'react';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {Button} from '@material-ui/core';
import PropTypes from 'prop-types';


class SideBar extends Component {



render()
{
    const sideBarStyle = {
        color: "white",
        width: "30%",
        float: "right",
        backgroundColor: "grey",
        height: "70vh",
      /*  marginTop: "-10%",*/
      };
    return (
        <div style={sideBarStyle}>

            
            <ul>
                <li>ID: </li>
                <li>Status: </li>
                <li>Info: </li>
            </ul>
            <hr/>
            <h2>Photos</h2>
            <hr/>
            <h2>Task list</h2>

          </div>
  );
};
};

export default SideBar;