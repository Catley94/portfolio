import React, { Component } from 'react';
import './App.css';
import Info from './Info/Info';
import MainWindow from './MainWindow/MainWindow';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Samuel Catley",
      jobTitle: "Junior Web Developer / Junior Software Engineer",
      github: "https://github.com/Catley94",
      description: "I am a self learning Junior JavaScript Developer, I aim to prove worth within the programming industry and I'm currently looking for an opportunity to use my skills and give me a chance to continue improving. ",
      projects: [
        {id: 1, ProjectName: 'Udemy Project',
         ProjectDescription: 'This project has been made as alongside following a Udemy Course: React - The Complete Guide (incl Hooks, React Router, Redux). It starts by creating a SPA that displays 3 people wihtin an array, then dynamically outputs it to the webpage.',
         ProjectLink: 'https://www.udemy.com/learn-react-redux-from-beginner-to-paid-professional/',
         GithubLink: 'https://github.com/Catley94/react-complete-guide'
        },
        {id: 2, ProjectName: 'React TicTacToe',
          ProjectDescription: 'This project is from the official ReactJS website, a TicTacToe game which is a tutorial for users first learning how to use React, it covers stateful/stateless components, using State and Props plus incorporating onClick features for clicking on each square and updating the values.',
          ProjectLink: 'https://reactjs.org/tutorial/tutorial.html',
          GithubLink: ''
        }
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
}

export default App;
