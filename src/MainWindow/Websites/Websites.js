import React from 'react';
import './websites.css';
import goudhurstImg from '../../img/explorersSite.PNG'




const Websites = (props) => {
    return (
        <div className="websiteContainer" id={props.id}>
                <h3 className="websiteTitle"><a href={props.websiteLink}>{props.websiteName}</a></h3>
                <a href={props.websiteLink}><img class="websiteImage" src={props.websiteImg} /></a>
                <p className="websiteDescription">{props.websiteDescription}</p>

        </div>
    )
}


export default Websites;
