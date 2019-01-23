import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import prof from './profile_smaller.jpg';

const styles = {
  avatar: {
    margin: 0,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
};

function MyAvatar(props) {
  const { classes } = props;
  return (
    <Avatar alt="Steve Alkire" src={prof} className={classes.avatar} />
      
  );
}

MyAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyAvatar);