import React from 'react';
import './main.css';
import Projects from './Projects';
import SideProjects from './SideProjects';
import Info from '../Info/Info';


const MainWindow = (props) => {
    const projects = (
        <div>
          {props.projects.map(project => {
            return (
            <Projects 
                id={project.id}
                projectN={project.ProjectName}
                projectDesc={project.ProjectDescription}
                projectLink={project.ProjectLink}
                githubLink={project.GithubLink}
            />      )
                }
            )
          }
        </div>
      );
      const sideProjects = (
        <div>
          {props.sideProjects.map(project => {
            return (
            <SideProjects 
                id={project.id}
                projectN={project.ProjectName}
                projectDesc={project.ProjectDescription}
                
            />      )
                }
            )
          }
        </div>
      );
    return(
        
        <div className="Main">
          <div className="InfoComponent">
            <Info 
              name={props.name} 
              job={props.job}
              github={props.github}
              desc={props.desc}
            />
          </div>
            <div className="midCard">
                <h2 classNames="titles">Technologies I have used</h2>
                <div className="technologies">
                  <h3>HTML CSS JAVASCRIPT SASS REACT SOLIDITY</h3>
                  
                </div>
                <h2 className="titles">React Projects</h2>
                <div>
                    {projects}
                </div>
                <h2 className="titles">React and Solidity Projects</h2>
                <div>
                    {sideProjects}
                </div>
            </div>
            <div className="bottomCard">
            <p className="whiteText">Please use this email to contact me <span />
                <a href="mailto:s.catley@live.co.uk" className="whiteText">s.catley@live.co.uk</a>
                    <br />
                <em>This website will evolve with my skills.</em>
            </p>
            </div>
        </div>
    )
}

export default MainWindow;