import React from 'react';
import './components.css';

function About() {
    return(
        <div className="content-main" id="contact">
            <div id="about-text">
                <h1>Contact Me</h1>
                <br />
                <p>
                    Dui aliquet vestibulum sit augue fringilla. Ultricies ante non tortor 
                    aliquam diam interdum dolor. Mauris lacus, malesuada euismod et arcu. 
                    In consequat turpis semper sed a. Aliquet phasellus eu mauris in augue 
                    tortor in quam in. Vel at id faucibus eget. 
                    <br /><br />
                    Email: <a>itsdevin@gmail.com</a> <br />
                    <a>Download my resume</a>
                </p>
            </div>
        </div>
    );
}

export default About;