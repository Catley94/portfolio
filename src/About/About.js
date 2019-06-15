import React from 'react';
import Radium from 'radium';
import './About.css';
import Footer from '../Footer/Footer';


const About = (props) => {
    return(
    <div className="aboutContainer">
        <div className="AboutMe">
            <h3 className="aboutTitle">Me?</h3>
            <p className="aboutDesc">
                I've always been interested in coding, whether it be web, mobile, backend development, all of it catches and holds my interest!
                I'm currently in the IT industry as an IT Professional, which gives me a certain mindframe of thinking/troubleshooting which I believe is invaluable, in the past I have slightly merged my interest in coding by scripting in both batch files and powershell scripts.
                In late 2018, I decided that scripting just wasn't enough to fill it anymore.
            </p>
            <h3 className="myJourney">My Journey</h3>
            <p>
                I started off learning the basics, HTML, CSS and a bit of JavaScript by using tutorials such as SoloLearn, CodeAcademy, Udemy and YouTube. <br />
                I also had a great friend who was already a Web Developer who offered to help whenever I needed it plus ask any questions!<br />
                After grasping the basics, I used one of my skills I gained within the IT Industry, my extensive researching, I set off into the Internet wondering where I can go from here, knowing the basics of HTML, CSS and JavaScript, where would this take me?
                My first obstacle? Knowing which framework or library to use, my word... the amount of add ons, libraries, frameworks, you have for JavaScript is mind blowing... it got me quite anxious as to carry on, what if I put all this time and effort into a framework/library and not like it? What if it's not popular anymore? 
                So after a few days of researching the main framworks and libraries out there that I had found, I was either going to choose React or Vue...
                Why? 
            </p>
        </div>
        <div className="Footer">
            <Footer />
        </div>
    </div>
    )
}

export default Radium(About);