import React from 'react';
import './Info.css';




const Info = (props) => {
    const style = {
        
    }
    return (
        <div className="topSection" >
            <h1 className="testText1">{props.name}</h1>
            <h2 className="testText4">{props.job}</h2>
            <p className="testText8">{props.desc}</p>
            <a href={props.github} className="testText12">My Github</a> 
           
        </div>
    )
}




export default Info;