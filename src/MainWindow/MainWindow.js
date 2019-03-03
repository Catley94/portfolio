import React from 'react';
import './MainWindow.css';
import Projects from './Projects';


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
    return(
        <div className="Main">
            <div className="midCard">
                <h2 className="testText">My Projects</h2>
                <div>
                    {projects}
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