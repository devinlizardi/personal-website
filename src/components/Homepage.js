import React from 'react';
import './homepage.css';

import artistText from './../img/artist.svg';
import educatorText from './../img/educator.svg';
import ampersand from './../img/ampersand.svg';
import flower from './../img/flower.svg';

function About() {
    return(<>
        <div className="homepage-main">
            <img src={artistText} id="artist-text"/>
            <img src={educatorText} id="educator-text"/>
        </div>
        <img src={ampersand} id="ampersand"/>
        <img src={flower} id="flower"/>
        </>
    );
}

export default About;