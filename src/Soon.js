import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import columbia from './columbia.jpg'
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    
  },
  gridList: {
    width: 1200,
    height: 400,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
});


function SoonPage(props) {
  const { classes } = props;

    return (
    <div className={classes.root}>

      <GridList cellHeight={400} cols={1} spacing={2} className={classes.gridList}>
          <GridListTile key={columbia} >
            <img src={columbia} alt="this is the alt"/>
          </GridListTile>
      </GridList>
      
	
	   <Typography variant="subtitle1" color="secondary" gutterBottom>
	      <b> This part coming soon! </b> 
	    </Typography>

	


    </div>
  );
}

SoonPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withWidth()(withStyles(styles)(SoonPage));
