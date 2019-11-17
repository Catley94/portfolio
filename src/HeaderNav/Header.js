import React from 'react';
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Header.css';
const Navigation = (props) => {

    

    return (
        <div className="navContainer">
            <span className="homeLink">
                <Link to={'/'}>Home</Link>
            </span>
            <span className="aboutLink">
                <Link to={'/About'}>About</Link>
            </span>
            <span className="goudhurstExplorersLink">
                <a href="https://goudhurst-explorers.herokuapp.com/" className="goudhurstExplorers" target="_blank">Goudhurst Explorers</a>
            </span>
            <span className="affirmationsLink">
                <a href="https://spokenaffirmations.herokuapp.com/" className="spokenAffirmations" target="_blank">Spoken Affirmations</a>
            </span>
            <span className="naughtsAndCrossesLink">
                <a href="https://naughtsandcrosses.herokuapp.com" className="naughtsAndCrosses" target="_blank">Naughts and Crosses</a>
            </span>
        </div>
    )
}



export default Navigation;