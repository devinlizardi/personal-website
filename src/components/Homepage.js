import React from "react";
import "./homepage.css";

import artistText from "./../img/artist.svg";
import educatorText from "./../img/educator.svg";
import ampersand from "./../img/ampersand.svg";
import ampersandGreen from "./../img/ampersand-green.svg";
import ampersandYellow from "./../img/ampersand-yellow.svg";
import flower from "./../img/flower.svg";

function About() {
  return (
    <>
      <div className="homepage-main">
        <img src={artistText} id="artist-text" />
        <img src={educatorText} id="educator-text" />
      </div>
      <img src={ampersandGreen} className="ampersand" />
      <img src={ampersandYellow} className="ampersand" id="amp-yellow" />
      <img src={ampersand} className="ampersand" id="amp-red" />
      <img src={flower} id="flower" />
      <div className="bg-texture" />
    </>
  );
}

export default About;
