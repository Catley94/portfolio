import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Radium, {StyleRoot} from 'radium';
//import SideMenu from './SideMenu/SideMenu';
import MainWindow from './MainWindow/MainWindow';
//import About from './About/About';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Info from './Info/Info';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Samuel Catley",
      jobTitle: "Junior Web Developer / Junior Software Engineer",
      github: "https://github.com/Catley94",
      description: "I am a self learning Junior JavaScript Developer, I wish to prove myself to be valuable and I'm currently looking for an opportunity to use my new skills and give me a chance to continue improving. ",
      projects: [
        {id: 1, ProjectName: 'Udemy Project',
         ProjectDescription: 'This project has been made as alongside following a Udemy Course: React - The Complete Guide (incl Hooks, React Router, Redux). It starts by creating a SPA that displays 3 people wihtin an array, then dynamically outputs it to the webpage.'}
        
      ]

    }
  }
  render() {

    
    
    return (

        <div className="App">
          <Info 
          name={this.state.name} 
          job={this.state.jobTitle}
          github={this.state.github}
          desc={this.state.description}
          />
          <MainWindow 
            projects={this.state.projects}
          />
          
        </div>
        
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

export default App;
