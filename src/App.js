import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Radium, {StyleRoot} from 'radium';
//import SideMenu from './SideMenu/SideMenu';
import MainWindow from './MainWindow/MainWindow';
//import About from './About/About';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Samuel Catley",
      jobTitle: "Junior Web Developer"
    }
  }
  render() {
    //
    return (
      <StyleRoot>
        <div className="App">
          <MainWindow name={this.state.name} job={this.state.jobTitle}/>
          
        </div>
        
        
       
    
  
      </StyleRoot>
    );
  }
  /*
  Original Learn ReactJS Content
  
  <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
  */
}

export default Radium(App);
