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

function Sidenav() {
	const [active, setActive] = useState('about');

    return(
		<>
		<img id="background" src={bg}/>
		<div id="background-mask"/>
		<Router>
			<div className="sidenav-main">
				<Link onClick={()=>{setActive('about')}} className={active==='about'? "sidenav-active" : "sidenav-inactive"} to="/">
					<h2 className="sidenav-title">about</h2>
				</Link>
				<Link onClick={()=>{setActive('projects')}} className={active==='projects'? "sidenav-active" : "sidenav-inactive"} to="/projects">
					<h2 className="sidenav-title">projects</h2>
				</Link>
				{/* <Link onClick={()=>{setActive('contact')}} className={active==='contact'? "sidenav-active" : "sidenav-inactive"} to="/contact">
					<h2 className="sidenav-title">contact</h2>
				</Link> */}
			</div>
			{/* ROUTES */}
			<div id="main-container">
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