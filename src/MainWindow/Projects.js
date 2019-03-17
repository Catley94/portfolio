import React from 'react';
import logo from './Media/logo.svg';




const Projects = (props) => {
    return (
        <div className="flexContainer" id={props.id}>
            <div>
                <h3 className="projectTitle"><a href={props.projectLink}>{props.projectN}</a></h3>
                <p className="content">{props.projectDesc}</p>
                <p className="projectGithub"><a href={props.githubLink}>Github Repo</a></p>
            </div>  
            <div>
                <img src={logo} className="pLogo "alt='React' />
            </div>
        </div>
    )
}


export default Projects;