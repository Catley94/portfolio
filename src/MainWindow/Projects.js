import React from 'react';
import logo from './Media/logo.svg';




const Projects = (props) => {
    return (
        <div className="flexContainer" id={props.id}>
            <div>
                <h3>{props.projectN}</h3>
                <p>{props.projectDesc}</p>
            </div>  
            <div>
                <img src={logo} className="Logo "alt='React' />
            </div>
        </div>
    )
}


export default Projects;