import React, {useState} from 'react';
import './components.css';
import './projects.css';

import temp_image from './../img/video3.gif';
import title_bar from './../img/osx-bar.png';

function LizardLearning() {
    const [update, setUpdate] = useState(true);

    function expand(e) {
        let isSmall = e.target.style.maxHeight != "63em";

        e.target.style.maxHeight = isSmall ? "63em" : "38em";
        setUpdate(!update);
    }

    return(
        <>
        <br /><br />
        <div className="intro-text">
            <h2>Teaching as Improv</h2>
            <p>
            Nunc sollicitudin commodo lorem finibus scelerisque. Proin vitae massa aliquet, 
            iaculis ex eu, vulputate nibh. Cras quis lacus suscipit, sodales lectus a, viverra velit.
            Quisque auctor in ante non faucibus. Ut pharetra enim purus, a pellentesque tellus feugiat non. 
            <br /><br />
            Morbi vitae nisl sed quam dictum auctor sit amet ut elit.
            Nullam vitae massa suscipit, congue risus ac, dapibus lectus. 
            Ut at metus lobortis, rutrum est eget, pretium odio. Vestibulum ante ipsum primis in 
            faucibus orci luctus et ultrices posuere cubilia curae; Sed nec odio ut nibh sodales mollis.
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
        <div className="end-padding"/>
        </>);
}

export default LizardLearning;