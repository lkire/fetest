import React, { Component } from 'react';

import './App.css';
//import TimelineLite from "gsap/TimelineLite";
//import TweenLite from "gsap/TweenLite";
import Button from '@material-ui/core/Button';
//import MuiThemeProvider from '@material-ui/styles/MuiThemeProvider';


import ButtonAppBar from './bar.js'

// const theme = createMuiTheme({
//   palette: {
//     primary: green,
//   },
//   typography: {
//     useNextVariants: true,
//   },
// });


//class MyComponent extends Component {
//  constructor(props){
//    super(props);
//    // reference to the DOM node
//    this.myElement = null;
//    // reference to the animation
//    this.myTween = null;
//  }
//
//  componentDidMount(){
//    // use the node ref to create the animation
//    this.myTween = TweenLite.to(this.myElement, 1, {x: 100, y: 100});
//  }
//
//  render(){
//    return <div ref={div => this.myElement = div} />;
//  }
//}

//componentDidMount () {
//        const script = document.createElement("script");
//
//        script.src = "https://use.typekit.net/foobar.js";
//        script.async = true;
//
//        document.body.appendChild(script);
//    }

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
	message: "derp",
    };
  }

  componentDidMount() {
      //fetch('http://demo.ryptco.com:5007').then(response => response.json())
      //	  .then(data => this.setState({ message: data.message}));
      // console.log(this.state.message);
      // .then(function(object) { console.log(object)
      // })

      //To do a post:
      // fetch('https://mywebsite.com/endpoint/', {
      // method: 'POST',
      // headers: {
      // 'Accept': 'application/json',
      // 'Content-Type': 'application/json',
      // },
      // body: JSON.stringify({
      // firstParam: 'yourValue',
      // secondParam: 'yourOtherValue',
      // })
      // })
      fetch('http://demo.ryptco.com:5006/testapp')
      
      //const script = document.createElement("script");
      //script.src = "http://demo.ryptco.com:5006/testapp";
      //script.async = true;
      // script.id = "1000";

      //document.body.appendChild(script);
      
  }
    
    render() {
	//const st = this.state.message // fetch('http://demo.ryptco.com:5007').then(response => response.json())
	
      return (
        <div className="App">
          <ButtonAppBar />
          <header className="App-header">
             
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="http://demo.ryptco.com:5007"
                target="_blank"
                rel="noopener noreferrer"
              >
                My first example
              </a>
    

              <a
                className="App-link"
                href="http://demo.ryptco.com:5006"
                target="_blank"
                rel="noopener noreferrer"
              >
                My second example
              </a>

	<p>
	      {this.state.message}
	</p>      
	  
	<Button variant="contained">
	   Hello World
	</Button>

        <Button variant="contained" color="primary" >
          MuiThemeProvider
        </Button>
	  
        </header>
	    
	  </div>

	  

      );
  }
}

export default App;

	// <ul>
        //      {hits.map(hit =>
	//	<li key={hit.objectID}>
	//	<a href={hit.url}>{hit.title}</a>
	//	</li>
	// )}
	// </ul>
