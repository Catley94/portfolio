import React from 'react';
import Radium from 'radium';
import './About.css';


const About = (props) => {
    return(
    <div className="Main">
            <h1 className="nameContainer">Test Name</h1>
            <h2 className="jobContainer">Test Job</h2>
            <div className="imgPlacement">Test Picture</div>
            <p className="desc">Description about me</p>
    </div>
    )
}

export default Radium(About);