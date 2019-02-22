import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';

import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import IconButton from '@material-ui/core/IconButton';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';

import Fullscreen from "react-full-screen";

const styles = theme => ({
  media: {
    // height: 0,
    // paddingTop: '56.25%', // 16:9
    margin: 'auto',
    height: '20vw',
    width: '80vw',
  },


  header: {
    textAlign: 'center',
    overflow: 'hidden',
  },

  card: {

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
      image: 'http://demo.ryptco.com:5006/brownian',
      // txt: () => { <Typography paragraph> Coming soon. </Typography> },

    };

  }

  setExpanded = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  setFull = () => {
    this.setState({ full: true });
  };

  handleClick = (textfile) => {

    fetch(textfile)
    .then((r) => r.text())
    .then(text  => {
      console.log(text);
    })  
  }


  

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>

      	<Card className={classes.card}>
      	
	    
	      

	    

	
        <CardActionArea
        className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.setExpanded}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
        >
	      <CardMedia
        
	        className={classes.media}
          frameBorder="0"
	        image={this.props.image}
          title="Convolutional Neural Network"
	       />
        

        <CardHeader className={classes.header}

        action={
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
        }
          title={this.props.title}

        />
        </CardActionArea>
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
    	  
