import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileData from './visuals/tileData';
import image from './profile_smaller.jpg';
import profile from './about/profile_bw.jpg'
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

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


function AboutPage(props) {
  const { classes } = props;

    return (
    <div className={classes.root}>

              <a
                className="App-link"
                href="http://demo.ryptco.com:5006"
                target="_blank"
                rel="noopener noreferrer"
            >
	                   	My first example
              </a>

              <script src={"http://demo.ryptco.com:5006/testapp"}></script>


	    <GridList cellHeight={400} cols={1} spacing={2} className={classes.gridList}>
          <GridListTile key={profile} >
            <img src={profile} />
          </GridListTile>
      </GridList>
      
	
	   <Typography variant="subtitle1" gutterBottom>
	      <b> Welcome to my app for demos! </b> It serves as a testbed and portfolio for
		  delivering projects and patterns all the way to production.
	      All the demos--including visuals, machine learning models, and 
        live data processing--will be appearing in the coming days.
	    </Typography>

	

      <Typography variant="h4" color="primary" gutterBottom>
        Background 
      </Typography>

	<Typography variant="body1" gutterBottom>
  I am an experimental particle physicist moving into the technology 
  industry. After many years at {<a href='https://home.cern/'>CERN</a>} I have grown an enthusiasm for communicating 
  complex ideas with a distilled elegance and economy. Successfully 
  delivering projects and publishing through the world's largest experiment 
  with thousands of collaborators from hundreds of countries 
  has taught me to "close the loop" in tough environments 
  with multiple competing parties, interests, and ideas.
	</Typography>
	    <Typography variant="h4" color="primary" gutterBottom>
        Motivation 
      </Typography>

<Typography variant="body1" gutterBottom>
  The advertising success of "AI" and "Machine Learning" has created 
  for its practitioners a crisis in 
  the demand for the frequent communication of its ideas, results, and progress  
  in the business environment. There are currently only partial solutions to this problem. 
</Typography>

  <Typography variant="body1" gutterBottom>
  I recently co-founded an investment management company in the crytocurrency space.
  The barriers to success for this company 
  turned out to be unrelated to the problems of mathematical finance. 

  Rather unexpectedly, they seemed more to be associated with all too common data science headaches:
  <ol>
  <li> the unencumbered delivery of production-level visual content,</li>
  <li> the adoption of a philosophy of data-driven decision making,</li>
  <li> the shortage of common vocabulary for communicating quantitative ideas.</li>
  </ol>
  This website is a sandbox for addressing the first 
  point--addressing the other two is a project of different 
  scope, to put it politely.
  But readily wrapping mathematical ideas in
  easily-accessible content will help with with conveying them.
  </Typography>
 
    <Typography variant="h4" color="primary" gutterBottom>
    Solution
  </Typography>     
  
  <Typography variant="body1" gutterBottom>
  There are many projects tackling the problem of quickly delivering
  scalable, server-backed, interactive visualization to the web. 
  I think {<a href='https://bokeh.pydata.org/en/latest/'>Bokeh</a>} is the closest to giving real access to the modern methods 
  of visual communication to 
  quantitative specialists who need to focus their time on solving 
   problems and efficiently communicate with a diverse team and clients. 
  </Typography>
  <Typography variant="body1" gutterBottom>
   {<a href='http://holoviews.org/'>Holoviews</a>} and associated projects provide most of the tools to handle the common time 
  wasters when producing web visualization, like issues related to duplication of work, 
  threading, blocking,
  available memory, and callbacks. Scaling and deployment are the remaining issues 
  with any Python project on the web,
  but the {<a href='https://www.tornadoweb.org/en/stable/'>Tornado</a>} server 
  combined with a load-balancer like {<a href='https://www.nginx.com/'> NGiNX</a>} in a microservices architecture
  seems to theoretically provide 
  the solution. 
  </Typography>

  <Divider variant="middle" color="primary"/>

  <Typography variant="body1" gutterBottom>
  In practice, I suspect it will be touchy work 
  scaling to maintain optimal response times under varying load. 
  This site exists to work out the kinks in deploying these 
  technologies together in a React App.  
  </Typography>

    </div>
  );
}

AboutPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withWidth()(withStyles(styles)(AboutPage));
