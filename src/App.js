import React, {useState} from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
import './components/components.css';

import About from './components/About';
import Projects from './components/Projects';
import Header from './components/Header';

import bg from './img/coffeecup.jpg';

function App() {
	const [active, setActive] = useState('about');

	return(
		<>
		<Router>
			<Header />
			<img id="background" src={bg}/>
			<div id="background-mask"/>
			<div className="sidenav-main">
				<Link onClick={()=>{setActive('about')}} className={active==='about'? "sidenav-active" : "sidenav-inactive"} to="/">
					<h2 className="sidenav-title">about</h2>
				</Link>
				<Link onClick={()=>{setActive('projects')}} className={active==='projects'? "sidenav-active" : "sidenav-inactive"} to="/projects">
					<h2 className="sidenav-title">projects</h2>
				</Link>
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
				</Switch>
			</div>
		</Router>
		</>
);
}

export default App;
