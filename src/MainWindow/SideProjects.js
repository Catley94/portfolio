import React from 'react';
import logo from './Media/logo.svg';
import solidity from './Media/Solidity.png';




const SideProjects = (props) => {
    const saDesc = () => {
        return (
            <p>Spirit Animals is a game, 
                it starts off with the player being allocated a random animal of the selection 
                which will have unique values, from there they have to look after the animal 
                through its stages of life (example: Pup, Adolescent, Prime, Senior, Final ), 
                however, the mechanics of the game will teach the user valuable lessons in life, 
                such as (but not limited to): How perception of the situation is important, 
                How to deal with stress and How emotions can affect your perception. 
                This game will run on the Blockchain with a backend of Solidity which is 
                Ethereums own language to build smart contracts. 
                This will ensure that every item/object in the game is a permenant assett and 
                cannot be lost or deleted, making the game extremely secure and have redundant systems.
                
                </p>
        )
    }
    return (
        <div className="flexContainer" id={props.id}>
            <div>
                <h3 className="projectTitle"><a href={props.projectLink}>{props.projectN}</a></h3>
                <p className="SPDesc">{saDesc()}</p>
                
            </div>  
            <div>
                <img src={logo} className="Logo "alt='React' />
                <img src={solidity} className="Solidity"alt='React' />

            </div>
        </div>
    )
}


export default SideProjects;