import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AssessmentIcon from '@material-ui/icons/Assessment';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import FunctionsIcon from '@material-ui/icons/Functions';

import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import BookIcon from '@material-ui/icons/Book';
import ContactsIcon from '@material-ui/icons/Contacts';

import MyAv from './avatar'
import Avatar from '@material-ui/core/Avatar';




function MainListItem(props) {
  
  function handleListItemClick(event, index) {
    props.setSelectedIndex(index);
  }

  return (
  	<List component="nav">
	  <ListItem 
	    button
	    selected={props.selectedIndex === 0}
	    onClick={event => handleListItemClick(event, 0)}
	  >
      	<MyAv />
     	<ListItemText primary="About" />
      </ListItem>
	  <ListItem 
	    button
	    selected={props.selectedIndex === 1}
	    onClick={event => handleListItemClick(event, 1)}
	  >
      	<ListItemIcon>
          <FunctionsIcon />
      	</ListItemIcon>
      	<ListItemText primary="Models" />
   	  </ListItem>
      <ListItem 
	    button
	    selected={props.selectedIndex === 2}
	    onClick={event => handleListItemClick(event, 2)}
	  >
    	
      	<ListItemIcon>
          <InsertChartIcon />
      	</ListItemIcon>
      	<ListItemText primary="Visualization" />
      </ListItem>
      <ListItem 
	    button
	    selected={props.selectedIndex === 3}
	    onClick={event => handleListItemClick(event, 3)}
	  >
      	<ListItemIcon>
          <BookIcon />
      	</ListItemIcon>
      	<ListItemText primary="Publications" />
   	  </ListItem>
      <ListItem 
	    button
	    selected={props.selectedIndex === 4}
	    onClick={event => handleListItemClick(event, 4)}
	  >
    	<ListItemIcon>
          <ContactsIcon />
      	</ListItemIcon>
      	<ListItemText primary="Contact" />
      </ListItem>
    </List>
    );
}

export default MainListItem;