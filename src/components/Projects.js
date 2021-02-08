import React from 'react';
import './components.css';

import temp_image from './../img/video3.gif';
import title_bar from './../img/osx-bar.png';

function About() {
    return(
        <div className="project-container-main">
            <div id="desc-container">
                <h2>Lizard Learning</h2>
                <em>2019</em>
                <p>
                    Aliquet phasellus eu mauris in augue 
                    tortor in quam in. Vel at id faucibus eget. 
                    <br /><br />
                    Diam elementum risus et pretium 
                    interdum arcu risus. Gravida nisi, lobortis facilisis sed eu vitae. 
                    Praesent enim, in nam pretium, accumsan accumsan.
                </p>
            </div>
            <div id="image-container">
                <img id="title-bar" src={title_bar} />
                <img id="temp-image" src={temp_image} />
                <div id="gif-bg"/>
            </div>
        </div>
    );
}

export default About;