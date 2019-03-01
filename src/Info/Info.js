import React from 'react';
import './Info.css';



const Info = (props) => {
    const style = {
        
    }
    return (
        <div className="topSection" >
            <h1 className="whiteText">{props.name}</h1>
            <h2 className="whiteText">{props.job}</h2>
            <a href={props.github} className="whiteText">My Github</a> 
            <p className="whiteText">{props.desc}</p>
            
        </div>
    )
}




export default Info;