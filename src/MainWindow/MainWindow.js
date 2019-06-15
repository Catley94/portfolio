import React from 'react';
import './main.css';
import Projects from './Projects/Projects';
import Footer from '../Footer/Footer';
import Info from '../Info/Info';



const MainWindow = (props) => {
    
    return(
        
        <div className="Main">
          <div className="Info">
            <Info 
            name={props.name}
            jobTitle={props.jobTitle}
            github={props.github}
            desc={props.desc}
            />
          </div>
            <div className="midCard">
              <div className="information">
                <h2 classNames="titles">Technologies I have used</h2>
                <div className="technologies">
                  <h3>HTML CSS JAVASCRIPT SASS REACT SOLIDITY</h3>
                </div>
                <h2 className="titles">React Projects</h2>
              </div>
              <div className="Project0">
                <Projects 
                  projectN={props.projects[0].ProjectName}
                  projectDesc={props.projects[0].ProjectDescription}
                  projectLink={props.projects[0].ProjectLink}
                  githubLink={props.projects[0].GithubLink}
                />
              </div>
              <div className="Project1">
                <Projects 
                  projectN={props.projects[1].ProjectName}
                  projectDesc={props.projects[1].ProjectDescription}
                  projectLink={props.projects[1].ProjectLink}
                  githubLink={props.projects[1].GithubLink}
                />
              </div>
              
            </div>
            <div className="Footer">
              <Footer />
            </div>
            
        </div>
    )
}

export default MainWindow;