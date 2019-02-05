import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';

import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';

import withWidth from '@material-ui/core/withWidth';
import Fullscreen from "react-full-screen";
import AspectRatio from 'react-aspect-ratio';

const styles = theme => ({
  card: {

  },


  iframe: {
  margin: 'auto',
  height: '45vw',
  width: '80vw',

  },


  fullscreen: {
  	backgroundt: '#ffffff',
  	
  },

  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    
  },
  gridList: {
    width: 800,
    
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



class LiveCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      full: false,
      title: 'Coming Soon',
      src: 'http://demo.ryptco.com:5006/testapp',
      // txt: () => { <Typography paragraph> Coming soon. </Typography> },

    };

  }

  setExpanded = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  setFull = () => {
    this.setState({ full: true });
  };


  

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>

      	<Card className={classes.card}>
      	
	    <CardHeader

	      action={
	        <IconButton aria-label="Share">
	          <ShareIcon />
	        </IconButton>
	      }
	        title={this.props.title}

	      />
	      

	    
        <Fullscreen
      	  
          enabled={this.state.full}
          onChange={full => this.setState({full})}
        >
	
   
	      <CardMedia
	        
	        component="iframe"
	        className={classes.iframe}
          frameborder="0"

	        src={this.props.src || 'http://demo.ryptco.com:5006'}
	        title={this.props.title}
	       />
         
        
        
	   

	      </Fullscreen>
	      	    
	      <CardActions className={classes.actions} disableActionSpacing>

	        

	        <IconButton
	          className={classnames(classes.expand, {
	            [classes.expandOpen]: this.state.expanded,
	          })}
	          onClick={this.setExpanded}
	          aria-expanded={this.state.expanded}
	          aria-label="Show more"
	        >
	        <ExpandMoreIcon />
	        </IconButton>
	        <IconButton aria-label="Fullscreen" onClick={this.setFull}>
	          <ZoomOutMapIcon />
	        </IconButton>
	      </CardActions>
	      <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
	        <CardContent>
	          <Typography paragraph>Method:</Typography>
	        </CardContent>
	      </Collapse>
	      
	    </Card>
	    
    </div>
	);
  }
}

export default withStyles(styles)(LiveCard);
    	  
