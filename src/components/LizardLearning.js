import React, { useRef, useState } from "react";
import "./components.css";
import "./projects.css";

import temp_image from "./../img/video3.gif";
import title_bar from "./../img/osx-bar.png";
import copy_code from "./../img/copy-my-code.jpg";

function LizardLearning() {
  const [update, setUpdate] = useState(true);
  const overflowCont = useRef(null);
  const expandHeight = "calc(120em - 28vw)";

  function expand() {
    let isSmall = overflowCont.current.style.maxHeight != expandHeight;
    overflowCont.current.style.maxHeight = isSmall ? expandHeight : "31em";
    setUpdate(!update);
  }

  return (
    <div className="educator-container">
      <div className="artist-desc">
        <h2>Teaching as Improv</h2>
        <p>
          The golden rule of improv theater is &quot;yes and,&quot; which means to accept the idea that your scene
          partner is giving you, then add something new to it. This defines how I approach my teaching; listen to a
          student first, then design a lesson on the relevant concepts. Each project we then work on is a manifestation
          of <em>their </em>ideas, and this not only teaches the technical programming skills but also builds confidence
          in their abilities.
          <br />
          <br />
          I&#39;ve been so fortunate to work with as many students as I have, from 7 year-olds with wonderfully
          grandiose dreams of self-driving cars to 13 year-olds crafting a binary classification perceptron. Being able
          to listen to and encourage even the quietest students has been my greatest asset, and my experience with
          neuro-atypical students has refined the way I educate.
          <br />
          <br />I aspire to bring my experience and passion for teaching to communities that can really benefit from it.
          Learning to code has both the ability to give students from any socioeconomic background an industry skillset,
          and give individuals the power to make things; to see that their ideas have value and they can create them.
          Even if a student has no interest in becoming a developer they can learn the process of building something,
          and that&apos;s invaluable.
        </p>
      </div>
      <br />
      <br />
      <div className="project-container-main" ref={overflowCont}>
        <div className="leading-desc-img">
          <div className="desc-container">
            <h2>Minecraft</h2>
            <em>2019-Present</em>
            <p>
              In my time tutoring students no question came up more often than &#34;when can we learn about
              Minecraft.&#34;
              <br />
              <br />
              I&#39;ve complied all of my lessons from <b> first steps</b> into typed coding,
              <b> object-oriented programming</b> theory and practice, and an intro into the
              <b> Forge API</b> into one website anyone can access and learn from, just as I did when I was learning
              these things for myself.
              <br />
              <br />
              Currently the full Minecraft course is in the early stages of development and testing; there are many,
              many, resources for Minecraft modding already out there. Most I find jump right into the Forge API with a
              &#34;learn from my code&#34; approach and can be already outdated within a number of months, or assume a
              student with little coding experience can understand complex abstract ideas like OOP already.
            </p>
          </div>
          <div className="image-container">
            <img id="title-bar" src={title_bar} alt="image header" />
            <img id="temp-image" src={temp_image} alt="lizard learning project demo" />
            <div id="gif-bg" />
            <a
              id="lizard-learning-link"
              href="https://lizard-learning.herokuapp.com/tutorial"
              target="_blank"
              rel="noreferrer"
            >
              <em>View Live Demo</em>
            </a>
          </div>
        </div>
        <div id="click-expand" onClick={expand}>
          <svg
            id="expand-svg"
            width="30"
            height="14"
            viewBox="0 0 30 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              transform={`scale (1, ${update ? "1" : "-1"})`}
              transform-origin="center"
              d="M3 3L15 11L27 3"
              stroke="#BFBFBF"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="overflow-text">
          <h3>Philosophy and Approach</h3>
          <p>
            Minecraft has been a part of my life for years; I first learned programming at a Minecraft-modding summer
            camp when I was in middle school, and when my undergraduate commencement was cancelled due to COVID I got
            involved with <a href="https://blockeley.com/">UC Blockeley</a> and virutally &quot;walked&quot; the stage.
            <br />
            <br />
            Structuring a curriculum for Minecraft modding is a difficult task - one that has been attempted for years
            already - for a few keys reasons:
          </p>
          <p className="overflow-inset">
            <b>Java is verbose </b> and relys on vocabulary that would otherwise be unfamiliar to students new to
            coding. Students don&apos;t think of the word &quot;integer&quot; to describe numbers, nor do they ever use
            the word &quot;variable&quot; in daily language, so introducing these words needs to be done carefully, or
            it can be overwhelming quickly. This also affects the experience of typing code in Java; for younger
            students this can be painfully frustrating, learning from a book or YouTube video is simply not enough.
          </p>
          <p className="overflow-inset">
            <b>Object-Oriented Programming </b> introduces a conceptual model for coding that will serve students their
            lives as programmers; however, really needs time and practice to sink in.
          </p>
          <br />
          <h3>Interactivity in Design</h3>
          <img src={copy_code} id="copy-code-img" />
          <p id="copy-code-desc">
            This picture illustrates the next phase of the project: <b>interactive text-editing.</b>
            <br />
            <br />
            There are many lessons about the attention to detail coding requires that can&#39;t be taught as easily over
            a YouTube video, and even more so in as verbose a language like Java. Having a training ground to practice
            typing coding, built into the current concepts we&#39;re working on in that moment, allows students to not
            only learn coding, but <em>experience </em> it.
            <br /> <br />
            Each topic that is introduced is followed by a series of increasingly complex questions; however, being
            multiple choice it allows students to make guesses on concepts, then test their ideas and recieve immediate
            feedback pointed towards why that answer was correct or incorrect. This is modeled after my own experience
            as a tutor, and the structure of Google&#39;s Tensorflow bootcamp.
            <br />
            <br />
            The next phase of development in this area is a bit behind, but building in a simple text-editor to
            encourage students to copy code line-by-line affords kinesthetic learning for students new to typing code,
            as well as builds the attention to detail needed to learn a verbose language like Java. This concept is very
            much so inspired by the <a href="https://p5js.org/">p5.js</a> website, which does a fantastic job allowing
            students to jump right into the library and try things out for themselves.
          </p>
        </div>
      </div>
      <div style={{ height: "5em" }} />
    </div>
  );
}

export default LizardLearning;
