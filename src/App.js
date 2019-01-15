import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import TimelineLite from "gsap/TimelineLite";
//import TweenLite from "gsap/TweenLite";


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
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="http://demo.ryptco.com:5006"
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

	    <MyComponent name="test" />
        </header>
	    
      </div>
    );
  }
}

export default App;
