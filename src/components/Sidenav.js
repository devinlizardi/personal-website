import React, {useState} from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
import './components.css';
import coffecup from './../img/coffeecup.jpg';

import About from './About';

function Sidenav() {
	const [active, setActive] = useState('about');

    return(
		<>
		<Router>
		<div className="router-container">
			<div className="sidenav-main">
				<Link onClick={()=>{setActive('about')}} className={active==='about'? "sidenav-active" : "sidenav-inactive"} to="/">
					<h2 className="sidenav-title">About</h2>
				</Link>
				<Link onClick={()=>{setActive('projects')}} className={active==='projects'? "sidenav-active" : "sidenav-inactive"} to="/projects">
					<h2 className="sidenav-title">Projects</h2>
				</Link>
				<Link onClick={()=>{setActive('projects')}} className={active==='contact'? "sidenav-active" : "sidenav-inactive"} to="/contact">
					<h2 className="sidenav-title">Contact</h2>
				</Link>
			</div>

			{/* ROUTES */}

			<div className="content-container">
			<Switch>
				<Route exact path="/">
					<About />
				</Route>
				<Route path="/projects">
					<h1>projects</h1>
				</Route>
				<Route path="/contact">
					<h1>contact</h1>
				</Route>
			</Switch>
			</div>
		</div>
		</Router>
		<img className="coffee-img" src={coffecup} alt="bg image sorry"/>
		</>
	);
}

export default Sidenav;