import React from 'react';
import './components.css';

import portrait from'./../img/IMG_2498.JPG';
import insta from './../img/insta-icon.svg';
import linkedin from './../img/linkedin-icon.svg';
import vimeo from './../img/vimeo-square-logo.svg';

function About() {
    return(
        <div className="content-main">
            <img id="portrait" src={portrait} alt="Me and my cat! Finn is a 
                3 year old very very soft brown cat who likes to
                play hide-and-seek-cuddles"/>
            <div id="icons">
                <a href="https://www.instagram.com/devin_lizard/">
                    <img id="insta-icon" className="icon" src={insta}/>
                </a>
                <a href="https://www.linkedin.com/in/devin-lizardi-65b850132/">
                    <img id="linkedin-icon" className="icon" src={linkedin}/>
                </a>
                <a href="https://vimeo.com/devinlizardi">
                    <img id="vimeo-icon" className="icon" src={vimeo}/>
					</a>
			</div>
            <div id="about-text">
                <h1>Hello, I&#39;m Devin</h1>
                <p>
                    Recently graduated from UC Berkeley with a BA in Cognitive Science, I&#39;m trained
                    as an artist and work as an educator. Improv theater defines my approach to teaching coding,
                    and I have found no greater inspiration than in the truly post-modernm art of a cohort of 12 year olds 
                    who really just want to play Minecraft. Good thing I can speak Minecraft as well.
                    <br /><br />
                    I am also pursuing work in theater and television production and performance, refining my
                    ability to operate in fast-paced environments and remain creative, balancing 
                    perfecting my craft and working a task to completion.
                    <br /><br />
                    <div id="about-footer">
                    This website was proudly designed and developed by me, 
                    <br />View the source code <a href="https://github.com/devinlizardi/devinlizardi.github.io"> at this repository</a>
                    </div>
                </p>
            </div>
        </div>
    );
}

export default About;