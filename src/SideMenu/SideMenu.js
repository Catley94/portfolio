import React from 'react';
import Radium from 'radium';
import './SideMenu.css';
import { Link } from 'react-router-dom';

const SideMenu = (props) => {
    const style = {
            backgroundColor: 'grey',
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '200px',
            height: '100%',
            color: 'white'
        }
        
        
        
    
    return(
        <div className="sideMenu" style={style}>
        <h2 className="sideMenuHeader">Side Menu</h2>
        <ul>
            <li>
                <Link to="/MainWindow">MainWindow</Link>
            </li>
            <li>
                <Link to="/About">About</Link>
            </li>
        
      </ul>
        </div>
    )
}

export default Radium(SideMenu);