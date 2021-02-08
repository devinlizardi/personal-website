import React from 'react';
import './components.css';
import lizard from './../img/lizard.png';
import portrait from'./../img/IMG_2498.JPG';

function About() {
    return(
        <div className="content-main">
            <img id="portrait" src={portrait}/>
            <div id="about-text">
                <h1>Hello, I&#39;m Devin</h1>
                <img id="lizard-above" src={lizard}/>
                <p>
                    Dui aliquet vestibulum sit augue fringilla. Ultricies ante non tortor 
                    aliquam diam interdum dolor. Mauris lacus, malesuada euismod et arcu. 
                    In consequat turpis semper sed a. Aliquet phasellus eu mauris in augue 
                    tortor in quam in. Vel at id faucibus eget. 
                    <br /><br />
                    Diam elementum risus et pretium 
                    interdum arcu risus. Gravida nisi, lobortis facilisis sed eu vitae. 
                    Praesent enim, in nam pretium, accumsan accumsan.
                </p>
            </div>
        </div>
    );
}

export default About;