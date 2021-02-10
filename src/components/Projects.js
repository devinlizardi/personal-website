import React, {useState} from 'react';
import './components.css';
import './projects.css';

import temp_image from './../img/video3.gif';
import title_bar from './../img/osx-bar.png';

function About() {
    const [update, setUpdate] = useState(true);

    function expand(e) {
        console.log(e.target.style.maxHeight)
        setUpdate(!update);
        e.target.style.maxHeight = "70em";
        console.log(e.target.style.maxHeight)
    }

    return(
        <div className="main-container">
            <div className="project-container-main changer" onClick={expand}>
                <div className="desc-container">
                    <h2>Lizard Learning</h2>
                    <em>2019-Present</em>
                    <p>
                        Aliquet phasellus eu mauris in augue 
                        tortor in quam in. Vel at id faucibus eget. 
                        <br /><br />
                        Diam elementum risus et pretium 
                        interdum arcu risus. Gravida nisi, lobortis facilisis sed eu vitae. 
                        Praesent enim, in nam pretium, accumsan accumsan.
                    </p>
                </div>
                <div className="image-container">
                    <img id="title-bar" src={title_bar} alt="image header"/>
                    <img id="temp-image" src={temp_image} alt="lizard learning project demo"/>
                    <div id="gif-bg"/>
                </div>
            </div>
            <div className="project-container-secondary changer">
                <div className="desc-container">
                        <h2>Illustration Progress</h2>
                        <em>2019-Present</em>
                        <p>
                            Aliquet phasellus eu mauris in augue 
                            tortor in quam in. Vel at id faucibus eget. 
                            <br /><br />
                            Diam elementum risus et pretium 
                            interdum arcu risus. Gravida nisi, lobortis facilisis sed eu vitae. 
                            Praesent enim, in nam pretium, accumsan accumsan.
                        </p>
                    </div>
                    <div className="image-container">
                        
                    </div>
            </div>
            <div className="project-container-tertiary changer">
                <div className="desc-container">
                    <h2>Video Reel</h2>
                    <em>2018-2019</em>
                    <p id="reel-text">
                        Aliquet phasellus eu mauris in augue 
                        tortor in quam in. Vel at id faucibus eget. 
                        <br /><br />
                        Diam elementum risus et pretium 
                        interdum arcu risus. Gravida nisi, lobortis facilisis sed eu vitae. 
                        Praesent enim, in nam pretium, accumsan accumsan.
                    </p>
                </div>
                <div className="image-container" id="vimeo-iframe">
                    <iframe src="https://player.vimeo.com/video/346242259" width="640" height="360" 
                        frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" 
                        allowFullScreen></iframe>
                </div>
            </div>
        </div>
    );
}

export default About;