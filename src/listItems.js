import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AssessmentIcon from '@material-ui/icons/Assessment';

import AssignmentIcon from '@material-ui/icons/Assignment';

import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import Insert_ChartIcon from '@material-ui/icons/InsertChart';
import FunctionsIcon from '@material-ui/icons/Functions';

import MyAv from './avatar'
import Avatar from '@material-ui/core/Avatar';




export const mainListItems = (
  <div>
    <ListItem button>
      <MyAv />
      <ListItemText primary="About" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FunctionsIcon />
      </ListItemIcon>
      <ListItemText primary="Models" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Insert_ChartIcon />
      </ListItemIcon>
      <ListItemText primary="Visualization" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Publications" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Contact" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Live Data</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Sentiment" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Stocks" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Weather" />
    </ListItem>


  </div>
);