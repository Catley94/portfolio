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
      description: "I am a self learning Junior JavaScript Developer, I aim to prove worth within the programming industry and I'm currently looking for an opportunity to use my skills and give me a chance to continue improving.",
      projects: [{
          id: 1,
          ProjectName: 'Panels',
          ProjectDescription: 'I started doing a JavaScript30 challenge which included building projects from the course, I find this extremely visually appealing due to the cubic bezier by moving the panel outwards before restoring inwards.',
          ProjectLink: 'https://codepen.io/Catley94/full/ZEEVBzq',
          GithubLink: 'https://github.com/Catley94/Flex-Panels'
        },
        {
          id: 2,
          ProjectName: 'JavaScript DrumKit',
          ProjectDescription: 'This also is part of the JavaScript30 challenge, this project ties in with my love for music, over time I will be using this method to create more of a auditory appealing app.',
          ProjectLink: 'https://catley94.github.io/JavaScript-Drum-Kit/',
          GithubLink: 'https://github.com/Catley94/JavaScript-Drum-Kit'
        },
        {
          id: 3,
          ProjectName: 'Spoken Affirmations',
          ProjectDescription: 'This is my first personal app, the idea of it is to instill more positive affirmations into your thoughts, allowing the user to think more positively and look at situations through a different perspective.',
          ProjectLink: 'https://spokenaffirmations.herokuapp.com',
          GithubLink: 'https://github.com/Catley94/affirmations'
        },
        {
          id: 4,
          ProjectName: 'Naughts and Crosses',
          ProjectDescription: 'Simple Naughts and Crosses game.',
          ProjectLink: 'https://naughtsandcrosses.herokuapp.com',
          GithubLink: 'https://github.com/Catley94/react-tut'
        },
        {
          id: 5,
          ProjectName: 'Dubstep Shuriken',
          ProjectDescription: 'Music Visualiser in the shape of a shuriken, playing to dubstep. Made with P5.js.',
          ProjectLink: 'https://codepen.io/Catley94/full/MWYvOKP',
          GithubLink: 'https://github.com/Catley94/musicVisualizer'
        }
      ],
      websites: [
        {
          id: 1,
          WebsiteName: 'Goudhurst Explorers',
          WebsiteDescription: 'Wesbite for Goudhurst Explorers.',
          WebsiteLink: 'https://goudhurst-explorers.herokuapp.com/'

        }
      ]
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
                websites={this.state.websites}
                />} 
              />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
