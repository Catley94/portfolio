import React from 'react';
import { NavLink } from "react-router-dom";
import './Navigation.css';

const Navigation = (props) => {
    
    const style = {
        
        position: 'fixed',
        borderRightStyle: 'solid',
        borderBottomStyle: 'solid',
        borderTopRightRadius: '10px',
        borderColor: 'white',
        borderWidth: '5px',
        width: '200px',
        height: '100%',
        backgroundColor: 'orange',
        borderBottomRightRadius: '100px',
        borderBottomLeftRadius: '10px',
        borderRadius: '10px 100px 1000px',
        boxShadow: '2px 5px 10px #545454',
        display: props.hidden ? 'none' : 'block',
        opacity: '0.8',
        zIndex: '1',
        
        
    
}
    

    return (
        <div >
            
            <div className="container" style={style}>
                <div clasName="containerBG">
                    <div className="sideBar">
                        <div>
                            <NavLink to="/" className="menuText"><h3>Home</h3></NavLink>
                        <br />
                        </div>
                        <div>
                            <h3 className="menuText">Other apps:</h3>
                            <a href="https://spokenaffirmations.herokuapp.com/" className="menuText spokenAffirmations" target="_blank"><h3>Spoken Affirmations</h3></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Navigation;