import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';


import { secondaryListItems } from './listItems';
import MainListItems from './mainListItems'
// import SimpleLineChart from './SimpleLineChart';

import './App.css';
import About from './About';
import Soon from './Soon';
import Visuals from './Visuals';
import Models from './Models';

const drawerWidth = 200;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  githubButton: {
    margin: '0 auto',
    marginRight: '10',
    
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
  },
});

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 1,
      hits: null,
    };

  }
  

  state = {
    open: true,

  };


  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };



  render() {
    const { classes } = this.props;

    

    return (

      <div className={
        this.state.selectedIndex >= 0
        ? classes.root
        : "App-header"}
      >
        {this.state.selectedIndex >= 0 
          && <CssBaseline />
        }

        

        <AppBar
          position="absolute"
          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
        >
          <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(
                classes.menuButton,
                this.state.open && classes.menuButtonHidden,
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Steve Alkire, PhD
            </Typography>

     

              <IconButton
              color="inherit"
              href="https://github.com/lkire"
              >
                <SvgIcon style={{ fontSize: 30 }} className={classes.githubButton}>
                  <path d="M8 0a8 8 0 0 0-8 8 8 8 0 0 0 5.47 7.59c.4.076.547-.171.547-.384 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82A7.68 7.68 0 0 1 8 3.869c.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385A8 8 0 0 0 8 0" />
                </SvgIcon>
              </IconButton>

              <IconButton
              color="inherit" 
              href="https://www.linkedin.com/in/alkire/"
              >
                <SvgIcon>
                  <path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51v1.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955a1.376 1.376 0 1 1-.001-2.751 1.376 1.376 0 0 1 .001 2.751zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z" />
                </SvgIcon>
              </IconButton>
       
              <IconButton
              color="inherit" 
              href="https://twitter.com/StevenAlkire">
                <SvgIcon>
                  <path d="M15.999 1.542a6.62 6.62 0 0 1-1.885.517A3.299 3.299 0 0 0 15.557.243a6.59 6.59 0 0 1-2.085.795A3.273 3.273 0 0 0 11.076.002a3.281 3.281 0 0 0-3.197 4.03A9.329 9.329 0 0 1 1.113.604a3.243 3.243 0 0 0-.444 1.65c0 1.14.58 2.143 1.46 2.732a3.278 3.278 0 0 1-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22a3.336 3.336 0 0 1-1.482.056 3.287 3.287 0 0 0 3.067 2.28 6.592 6.592 0 0 1-4.077 1.404c-.265 0-.526-.015-.783-.045a9.303 9.303 0 0 0 5.032 1.474c6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425A6.67 6.67 0 0 0 16 1.542z" />
                </SvgIcon>
              </IconButton>

          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <MainListItems selectedIndex={this.state.selectedIndex} setSelectedIndex={(index) => this.setState({ selectedIndex: index})} />
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />



          {{
          0: <About />,
          1: <Models />,
          2: <Visuals />,
          3: <Soon />,
          4: <Soon />,
        }[this.state.selectedIndex]}
          <Typography align='center' variant="caption" gutterBottom  color="secondary">
            Page {this.state.selectedIndex}
            
          </Typography>
        <div src={this.state.hits} />

          {/*<div className={classes.tableContainer}>
            <SimpleTable />
          </div>
        */}
        </main>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
