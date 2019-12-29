import React from 'react';
import Radium from 'radium';
import './About.css';
import Footer from '../Footer/Footer';


const About = (props) => {
    return(
    <div className="aboutContainer">
        <div className="AboutMe">
            <h2 class="aboutHeader">More about me...</h2>
            <h2 className="aboutTitle">Short and Sweet Summary</h2>
            <p className="aboutDesc">
                Currently I consider myself a code hobbyist, as I use a lot of my free time mainly to learn as much as I can but also to create, what I consider, pieces of art.
                <h3>So, why are you interested front end development?</h3>
                I've always been interested in coding from a young age however I've never known where to start, it wasn't until the Cryptocurrency hype that it rekindled the embers of my enthusiasm. I started to learn Solidity (Ethereum's smart contract language), but in order to use it effectively I needed to learn the basics, HTML, JS and CSS so I could display, collect and collate information for the smart contract and it was then that my journey started.
                During this time, I rediscovered my passion for art and music, it was when I started to incorporate this passion into coding and development which exponentially fanned the flames on my enthusiasm which is burning brightly. 
                <h3>What are you aiming for?</h3>
                I'm aiming towards getting a full time job within front end development, using my artistic skills alongside my development skills to fully enhance the front end experience for the user.
                In the mean time, I will continue to take on projects and display them on my Portfolio in order to demonstrate my skills.
                
            </p>
            <h3 className="myJourney">My Journey</h3>
            <p>
                I started off learning the basics, HTML, CSS and a bit of JavaScript by using tutorials such as SoloLearn, CodeAcademy, Udemy and YouTube. <br />
                I also had a great friend who was already a Web Developer who offered to help whenever I needed it plus ask any questions!<br />
                After grasping the basics, I used one of my skills I gained within the IT Industry, my extensive researching, I set off into the Internet wondering where I can go from here, knowing the basics of HTML, CSS and JavaScript, where would this take me?
                <br />
                My first obstacle... Knowing which framework or library to use, my word... the amount of add ons, libraries, frameworks, you have for JavaScript is mind blowing... it got me quite anxious as to carry on, what if I put all this time and effort into a framework/library and not like it? What if it's not popular anymore? 
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