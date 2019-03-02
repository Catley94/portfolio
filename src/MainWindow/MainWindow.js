import React from 'react';
import Radium from 'radium';
import './MainWindow.css';
import sunset from './Media/topImage.jpg';
import img2 from './Media/aurora.jpg'; 
import logo from './Media/logo.svg';
import ZeroOne from './Media/01.png';


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
    
    const projects = (
        <div>
          {props.projects.map((project, index) => {
            return (
            <div className="flexContainer" >

                    <div>
                        <h3>{project.ProjectName}</h3>
                        <p>{project.ProjectDescription}</p>
                    </div>
                    
                    <div>
                        <img src={logo} className="Logo "alt='React' />
                    </div>
                
            </div>
            )
            
          })}
        
        </div>

      );
    return(
    <div className="Main">
        
        
        <div className="midCard">
            
           
            <h2 className="whiteText">My Projects</h2>
            <div>
                {projects}
            </div>
            
            
        </div>

        
        <div className="bottomCard">
            
            <p className="whiteText">Please use this email to contact me <a href="mailto:s.catley@live.co.uk" className="whiteText">s.catley@live.co.uk</a><br />
                <i>This website will evolve with my skills.</i>
            </p>
            
        </div>
            
    </div>
    )
}

export default MainWindow;