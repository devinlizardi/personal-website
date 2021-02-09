import React from 'react';
import './components.css';
import './projects.css';

import temp_image from './../img/video3.gif';
import title_bar from './../img/osx-bar.png';

function About() {
    return(
        <div className="main-container">
            <div className="project-container-main">
                <div className="desc-container">
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
                    <img id="title-bar" src={title_bar} alt="image header"/>
                    <img id="temp-image" src={temp_image} alt="lizard learning project demo"/>
                    <div id="gif-bg"/>
                </div>
            </div>
            <div className="project-container-secondary">
                <div className="desc-container">
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
            </div>
            <div id="end-padding"/>
        </div>
    );
}

export default About;