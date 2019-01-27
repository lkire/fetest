import React from 'react';
import Typography from '@material-ui/core/Typography';

const cardData = [
  	{
    	source: 'http://demo.ryptco.com:5006/testapp',
 		title: 'Memory Destroyer',
 		text: () => (
 		  <div>
		    <Typography paragraph>Method:</Typography>
	        <Typography paragraph>
	          Leave this on for a few minutes and crash your browser and my server!
	        </Typography>
          </div>
 		),
	},

];

export default cardData;