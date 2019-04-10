import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import cardData from './models/cardData';
import withWidth from '@material-ui/core/withWidth';
import ModelCard from './ModelCard'


const styles = theme => ({
  card: {
    maxWidth: 400,
    borderRadius: 2,
    overflow: 'hidden',

  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',

  },
  divmargin: {
    margin: 10,
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


function AdvancedList(props) {
  const { classes } = props;

  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }


//GridList cellHeight={400} cols={{xs:2, sm:2, md:3, lg:3, xl:3}[props.width]} spacing={1} className={classes.gridList}>

  return (
    <div className={classes.root}>
      
        {cardData.map(tile => (

          <div className={classes.divmargin}>
            <ModelCard title={tile.title} image={tile.image} txt={tile.txt}/>
          </div>
    
    ))}
    </div>
  );
}

AdvancedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withWidth()(withStyles(styles)(AdvancedList));