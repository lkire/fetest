import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Demo from './demo';
import * as serviceWorker from './serviceWorker';
import 'typeface-roboto';
import theme from './theme';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';


ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<Demo />
	</MuiThemeProvider>
	, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
