import 'katex/dist/katex.min.css';
import TeX from "@matejmazur/react-katex";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Demo from './demo';
import * as serviceWorker from './serviceWorker';
import 'typeface-roboto';
import theme from './theme';
import { MuiThemeProvider } from '@material-ui/core/styles';

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
