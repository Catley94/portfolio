import React from 'react';
import Radium from 'radium';
import './MainWindow.css';
import sunset from './Media/topImage.jpg';
import img2 from './Media/aurora.jpg'; 
import logo from './Media/logo.svg';



const MainWindow = (props) => {
    /*
    Create a function to determine the card's colours
    Change the color of the background body
    document.body.style.backgroundColor = "#F1721A";
    */
    // let sunsetThemeTopCard = {
    //     backgroundImage: 'url(' + sunset + ')',
    //     padding: '15px',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: 'cover',
    //     boxShadow: '0px 150px 100px #DB4916'
           
    
    // }
        // let sunsetThemeMidCard = {
        //     padding: '20px',
        //     boxShadow: '0px -100px 100px #DB4916',
        //     
        // }
        // let sunsetThemeBottomCard = {
        //     padding: 20px,
        //     
        // }

    // let purpleTheme = {
    //     backgroundImage: 'url(' + img2 + ')',
    //     padding: '15px',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: 'cover',
    //     boxShadow: '0px 150px 100px #DB4916'
            // backgroundColor: '#F1721A'
    // }
    //Create a theme for Sunset and perhaps another for aurora, using inline styling and state.
    
    return(
    <div className="Main">
        
        
        <div className="midCard">
            <hr className="ShadowTop" />
            <h2 className="whiteText">My Projects <br />
            For every project, create divs for that specific project, pass through with props. <br />
            Look at Person.js within React-Complete-Guide.</h2>
            <div className="bubble">
                <h3>{props.projects[0].ProjectName}</h3>
                <p>{props.projects[0].ProjectDescription}</p>
                <img src={logo} className="Logo "alt='React' />
                </div>
            
            <hr className="Shadow" />
        </div>

        
        <div className="bottomCard">
            
            <p className="whiteText">If you are interested in contacting me, please email <a href="mailto:s.catley@live.co.uk" className="whiteText">s.catley@live.co.uk</a><br />
                <i>This website is subject to change to reflect my skills.</i>
            </p>
            
        </div>
            
    </div>
    )
}

export default MainWindow;