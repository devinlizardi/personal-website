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
                    Dui aliquet vestibulum sit augue fringilla. Ultricies ante non tortor 
                    aliquam diam interdum dolor. Mauris lacus, malesuada euismod et arcu. 
                    In consequat turpis semper sed a. Aliquet phasellus eu mauris in augue 
                    tortor in quam in. Vel at id faucibus eget. 
                    <br /><br />
                    Diam elementum risus et pretium 
                    interdum arcu risus. Gravida nisi, lobortis facilisis sed eu vitae. 
                    Praesent enim, in nam pretium, accumsan accumsan.
                    <br /><br />
                    This website was developed by me! View the source code <a> at this repository</a>
                </p>
            </div>
        </div>
    );
}

export default About;