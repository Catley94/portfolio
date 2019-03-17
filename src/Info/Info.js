import React from 'react';
import './infocss.css';

const Info = (props) => {
    return (
        <div className="topSection" >
            <h1 className="name">{props.name}</h1>
            <h2 className="jobTitle">{props.job}</h2>
            <p className="description">{props.desc}</p>
            <a href={props.github} className="githubLink">My Github</a> 
           
        </div>
    )
}


export default Info;