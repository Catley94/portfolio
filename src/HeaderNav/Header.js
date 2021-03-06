import React from 'react';
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Header.css';
const Navigation = (props) => {

    
    return (
        <div className="navContainer">
            <span className="">
                <Link class="homeLink navLinks" to={'/'}>Home</Link>
            </span>
            <span className="">
                <Link class="aboutLink navLinks" to={'/About'}>About</Link>
            </span>
            {/* <span className="goudhurstExplorersLink navLinks">
                <a href="https://goudhurst-explorers.herokuapp.com/" className="goudhurstExplorers" target="_blank">Goudhurst Explorers</a>
            </span>
            <span className="affirmationsLink navLinks">
                <a href="https://spokenaffirmations.herokuapp.com/" className="spokenAffirmations" target="_blank">Spoken Affirmations</a>
            </span>
            <span className="naughtsAndCrossesLink navLinks">
                <a href="https://naughtsandcrosses.herokuapp.com" className="naughtsAndCrosses" target="_blank">Naughts and Crosses</a>
            </span> */}
        </div>
    )
}



export default Navigation;