import React from 'react';
import './websites.css';




const Websites = (props) => {
    return (
        <div className="websiteContainer" id={props.id}>
                <h3 className="websiteTitle"><a href={props.websiteLink}>{props.websiteName}</a></h3>
                <p className="websiteDescription">{props.websiteDescription}</p>
                {/* <img src={logo} className="pLogo "alt='React' /> */}
        </div>
    )
}


export default Websites;