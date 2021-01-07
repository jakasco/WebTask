import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core/';
import {Home} from '@material-ui/icons/';
import JobView from '../views/JobView';

const listStyle = {
  width: "20%",
  backgroundColor: "grey"
}

const Nav = (props) => {
  return (
      <nav style={listStyle}>
        <List>
          <ListItem  button component={Link} to="/">
             <ListItemIcon>
                <Home />
             </ListItemIcon>
              <ListItemText primary='Home' />
          </ListItem>
          <ListItem button component={Link} to="/jobview">
             <ListItemIcon>
                <Home />
             </ListItemIcon>
              <ListItemText primary='Job' />
          </ListItem>
        </List>
      </nav>
  );
};

export default Nav;