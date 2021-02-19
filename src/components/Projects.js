import React, {useState} from 'react';
import './components.css';
import './projects.css';

import temp_image from './../img/video3.gif';
import title_bar from './../img/osx-bar.png';

function About() {
    const [update, setUpdate] = useState(true);

    function expand(e) {
        let isSmall = e.target.style.maxHeight != "63em";
        console.log(isSmall);

        e.target.style.maxHeight = isSmall ? "63em" : "38em";
        setUpdate(!update);
    }

    return( <>
            <div className="project-container-main changer" onClick={expand}>
                <div className="desc-container">
                    <h2>Lizard Learning</h2>
                    <em>2019-Present</em>
                    <p>
                        In my time tutoring students no question came up more often than
                        &#34;when can we learn about Minecraft.&#34;
                        <br /><br />
                        I&#39;ve complied all of my lessons from <b> first steps</b> into typed coding, 
                        <b> object-oriented programming</b> theory and practice, and an intro into the
                        <b> Forge API</b> into one website anyone can access and learn from, just as I did
                        when I was learning these things for myself, and it&#39;s called Lizard Learning.
                    </p>
                </div>
                <div className="image-container">
                    <img id="title-bar" src={title_bar} alt="image header"/>
                    <img id="temp-image" src={temp_image} alt="lizard learning project demo"/>
                    <div id="gif-bg"/>
                </div>
                <div className="overflow-text">
                    Lizard learning extends beyond just Minecraft, however, as I&#39;ve also been teaching
                    students introductary Machine Learning, the course to be adapted from <a href="#"> this</a> repository.
                    <br /><br />
                    Currently the full Minecraft course is in the early stages of development and testing; there are 
                    many, many, resources for Minecraft modding already out there that I find either jump right into the 
                    Forge API with an &#34;learn from my code&#34; approach or are already outdated within a number of months.
                    <br /><br />
                    Lizard learning is built to teach the fundamental concepts that enable students to engage in these
                    resources, addressing questions like: how do I fix my IDE? What is an API? What is a compiler? 
                    Why is it so hard to print to console? The purpose being to get students to properly engage with 
                    and learn from all the other resources out there on their own.
                </div>
            </div>
            <div className="project-container-secondary changer">
                <div id="illustration-desc">
                    <h2>Illustration Progress</h2>
                    <em>2019-Present</em>
                    <p>
                        Aliquet phasellus eu mauris in augue 
                        tortor in quam in. Vel at id faucibus eget. 
                        Gravida nisi, lobortis facilisis sed eu vitae. 
                        Praesent enim, in nam pretium, accumsan accumsan.
                    </p>
                </div>
                <div id="work-container">
                    <img id="work-title-bar" src={title_bar} alt="more fun images!"/>
                    <div id="work-bg"/>
                </div>
            </div>
            <div className="project-container-tertiary changer">
                <div className="desc-container">
                    <h2>Video Reel</h2>
                    <em>2016-2020</em>
                    <p id="reel-text">
                        I&#39;m also a passionate video editor and actor, and have been involved in a number
                        of student films through my <a href="https://www.facebook.com/jericho.comedy">improv team</a>,
                         <a href="https://www.giantfilmmakersucb.org/"> GiANT Filmmakers</a>, 
                         and <a href="http://caldka.org/">Cal DKA</a>.
                    </p>
                </div>
                <div className="image-container" id="vimeo-iframe">
                    <iframe src="https://player.vimeo.com/video/346242259" width="640" height="360" 
                        frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" 
                        allowFullScreen></iframe>
                </div>
            </div>
            </> );
}

export default About;