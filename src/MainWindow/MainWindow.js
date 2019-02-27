import React from 'react';
import Radium from 'radium';
import './MainWindow.css';


const MainWindow = (props) => {
    //Create a theme for Sunset and perhaps another for aurora, using inline styling and state.
    return(
    <div className="Main">
        <div className="bottomCard">
            <h1 className="whiteText">{props.name}</h1>
            <h2 className="whiteText">{props.job}</h2>
            <div className="imgPlacement">Picture</div>
            <p className="whiteText">Github link</p>
            <p className="whiteText">Description about me</p>
            
        </div>
        
        <div className="midCard">
            <hr className="ShadowTop" />
            <h2 className="whiteText">My Projects <br />
            For every project, create divs for that specific project, pass through with props. <br />
            Look at Person.js within React-Complete-Guide.</h2>
            <div className="bubble">
                <h3>Name of Project 1</h3>
                <p>Describe my project</p>
            </div>
            <div className="bubble">
                <h3>Name of Project 2</h3>
                <p>Describe my project</p>
            </div>
            <div className="bubble">
                <h3>Name of Project 3</h3>
                <p>Describe my project</p>
            </div>
            <hr className="Shadow" />
        </div>

        
        <div className="topCard">
            
            <p className="whiteText">Form for contacting me <br />
                Insert here
            </p>
        </div>
            
    </div>
    )
}

export default Radium(MainWindow);