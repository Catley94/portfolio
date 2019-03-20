import React from 'react';
import logo from '../Media/logo.svg';
import './projects.css';




const Projects = (props) => {
    return (
        <div className="flexContainer" id={props.id}>
            
                <h3 className="projectTitle"><a href={props.projectLink}>{props.projectN}</a></h3>
                <p className="content">{props.projectDesc}</p>
                <p className="projectGithub"><a href={props.githubLink}>Github Repo</a></p>
                <img src={logo} className="pLogo "alt='React' />
        </div>
    )
}


export default Projects;