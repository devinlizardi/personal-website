import React, {useState} from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
import './components.css';

import About from './About';
import Projects from './Projects';
import Contact from './Contact';

import bg from './../img/coffeecup.jpg';
import insta from './../img/insta-icon.svg';
import linkedin from './../img/linkedin-icon.svg';
import vimeo from './../img/vimeo-square-logo.svg';

function Sidenav() {
	const [active, setActive] = useState('about');

    return(
		<>
		<img id="background" src={bg}/>
		<div id="background-mask"/>
		<Router>
			<div className="router-container">
				<div className="sidenav-main">
					<Link onClick={()=>{setActive('about')}} className={active==='about'? "sidenav-active" : "sidenav-inactive"} to="/">
						<h2 className="sidenav-title">about</h2>
					</Link>
					<Link onClick={()=>{setActive('projects')}} className={active==='projects'? "sidenav-active" : "sidenav-inactive"} to="/projects">
						<h2 className="sidenav-title">projects</h2>
					</Link>
					<Link onClick={()=>{setActive('contact')}} className={active==='contact'? "sidenav-active" : "sidenav-inactive"} to="/contact">
						<h2 className="sidenav-title">contact</h2>
					</Link>
				</div>

				<div id="icons">
					<a href="https://www.instagram.com/devin_lizard/">
						<img id="insta-icon" className="icon" src={insta}/>
					</a>
					<a href="https://www.linkedin.com/in/devin-lizardi-65b850132/">
						<img id="linkedin-icon" className="icon" src={linkedin}/>
					</a>
					<a href="https://vimeo.com/devinlizardi">
						<img id="vimeo-icon" className="icon" src={vimeo}/>
					</a>
				</div>

				{/* ROUTES */}

				<Switch>
					<Route exact path="/">
						<About />
					</Route>
					<Route path="/projects">
						<Projects />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
				</Switch>
			</div>
		</Router>
		</>
	);
}

export default Sidenav;