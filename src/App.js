import React, { Component } from 'react';
import './App/app.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainWindow from './MainWindow/MainWindow';
import Header from './HeaderNav/Header';
import About from './About/About';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Samuel Catley",
      jobTitle: "Developing for a hobby",
      github: "https://github.com/Catley94",
      description: "I am a self learning Junior JavaScript Developer, I aim to prove worth within the programming industry and I'm currently looking for an opportunity to use my skills and give me a chance to continue improving. ",
      projects: [{
          id: 1,
          ProjectName: 'Udemy Project',
          ProjectDescription: 'This project has been made as alongside following a Udemy Course: React - The Complete Guide (incl Hooks, React Router, Redux). It starts by creating a SPA that displays 3 people wihtin an array, then dynamically outputs it to the webpage.',
          ProjectLink: 'https://www.udemy.com/learn-react-redux-from-beginner-to-paid-professional/',
          GithubLink: 'https://github.com/Catley94/react-complete-guide'
        },
        {
          id: 2,
          ProjectName: 'React TicTacToe',
          ProjectDescription: 'This project is from the official ReactJS website, a TicTacToe game which is a tutorial for users first learning how to use React, it covers stateful/stateless components, using State and Props plus incorporating onClick features for clicking on each square and updating the values.',
          ProjectLink: 'https://reactjs.org/tutorial/tutorial.html',
          GithubLink: 'https://github.com/Catley94/react-tut'
        }
      ],
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className="HeaderNavigation">
            <Header />
          </div>
          <div className="AppContainer">
            <div className="MainWindow">
              <Route exact path="/About" component={About} />
              <Route path="/" exact render={(props) => <MainWindow {...props}
                name={this.state.name}
                jobTitle={this.state.jobTitle}
                github={this.state.github}
                desc={this.state.description}
                projects={this.state.projects}
                sideProjects={this.state.sideProjects} />} 
              />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
