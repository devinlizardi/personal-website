import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
import './components.css';
import coffecup from './../img/coffeecup.jpg';

function Sidenav() {
    return(
		<>
		<Router>
		<div className="content-container">
			<div className="sidenav-main">
				<Link to="/"><h2 className="sidenav-title">About</h2></Link>
				<Link to="/projects"><h2 className="sidenav-title">Projects</h2></Link>
				<Link to="/contact"><h2 className="sidenav-title">Contact</h2></Link>
			</div>

			{/* ROUTES */}

			<Switch className="content-main">
				<Route path="/">
					<h1>about</h1>
				</Route>
				<Route path="/projects">
					<h1>projects</h1>
				</Route>
				<Route path="/contact">
					<h1>contact</h1>
				</Route>
			</Switch>
		</div>
		</Router>
		<img className="coffee-img" src={coffecup} alt="bg image sorry"/>
		</>
	);
}

export default Sidenav;