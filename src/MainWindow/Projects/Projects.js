import React from 'react';
import './projects.css';




const Projects = (props) => {
    return (
        <div className="flexContainer" id={props.id}>
            
                <h3 className={`projectTitle projectTitle[${props.id}]`}><a href={props.projectLink}>{props.projectN}</a></h3>
                <p className="content">{props.projectDesc}</p>
                <p className="projectGithub"><a href={props.githubLink}>See me on Github!</a></p>
                {/* <img src={logo} className="pLogo "alt='React' /> */}
        </div>
    )
}


export default Projects;