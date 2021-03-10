import React, {useState} from 'react';
import './components.css';
import './projects.css';

import temp_image from './../img/video3.gif';
import title_bar from './../img/osx-bar.png';

function LizardLearning() {
    const [update, setUpdate] = useState(true);

    function expand(e) {
        let isSmall = e.target.style.maxHeight != "64em";

        e.target.style.maxHeight = isSmall ? "64em" : "37em";
        setUpdate(!update);
    }

    return(
        <>
        <br /><br />
        <div className="intro-text">
            <h2>Teaching as Improv</h2>
            <p>
            I approach teaching much like I approach improvisational theater: listen, then build.
            I&#39;ve been so fortunate to work with as many students as I have; 7 year-olds with 
            wonderfully complex dreams of self-driving cars to 13 year-olds crafting a binary 
            classification perceptron, being able to listen to and encourage even the quitest students has
            been my greatest asset.
            <br /><br />
            My goal is to bring my experience and passion for teaching this highly sought-after skillset 
            to communities that really need it. Coding has the incredibly ability to enable students 
            from a wide array of socioecomic backgrounds, and with my experience in introductory block-based
            coding to front-end UI, artificial intelligence, and machine learning, there is so much ground
            I&#39;m so eager to cover.
            </p>
        </div>
        <div className="project-container-main changer" onClick={expand}>
            <div className="desc-container">
                <h2>Minecraft</h2>
                <em>2019-Present</em>
                <p>
                    In my time tutoring students no question came up more often than
                    &#34;when can we learn about Minecraft.&#34;
                    <br /><br />
                    I&#39;ve complied all of my lessons from <b> first steps</b> into typed coding, 
                    <b> object-oriented programming</b> theory and practice, and an intro into the
                    <b> Forge API</b> into one website anyone can access and learn from, just as I did
                    when I was learning these things for myself.
                </p>
            </div>
            <div className="image-container">
                <img id="title-bar" src={title_bar} alt="image header"/>
                <img id="temp-image" src={temp_image} alt="lizard learning project demo"/>
                <div id="gif-bg"/>
            </div>
            <div className="overflow-text">
                I have worked beyond just Minecraft, however, as I&#39;ve also been teaching
                students introductary Machine Learning, the course to be adapted from <a href="#"> this</a> repository.
                <br /><br />
                Currently the full Minecraft course is in the early stages of development and testing; there are 
                many, many, resources for Minecraft modding already out there. Most I find jump right into the 
                Forge API with a &#34;learn from my code&#34; approach and can be already outdated within a number of months,
                or assume a student with little coding experience and understand complex abstract ideas like OOP already.
                <br /><br />
                This project is built to teach the fundamental concepts that enable students to engage in these
                resources, addressing questions like: how do I fix my IDE? What is an API? What is a compiler? 
                Why is it so hard to print to console in Java? The purpose being to get students to <em>eventually</em> engage with 
                and learn from all the other resources out there on their own.
            </div>
        </div>
        <div className="end-padding"/>
        </>);
}

export default LizardLearning;