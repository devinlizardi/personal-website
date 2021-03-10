import React, {useEffect, useState} from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
import 'scroll-behavior-polyfill';
import './components/components.css';

import About from './components/About';
import Header from './components/Header';
import Homepage from './components/Homepage';
import LizardLearning from './components/LizardLearning';
import Creative from './components/Creative';

import bg from './img/coffeecup.jpg';

function App() {
	const [active, setActive] = useState('');

	useEffect(() => {
		window.scroll({
			behavior: "smooth",
			top: 0,
		});
	}, [active])

	return(
		<>
		<Router>
			<Link to="/" onClick={()=>{setActive('')}}>
				<Header />
			</Link>
			<img id="background" src={bg}/>
			<div id="background-mask"/>
			<div className="sidenav-main">
				<Link onClick={()=>{setActive('educator')}} className={active==='educator'? "sidenav-active" : "sidenav-inactive"} to="/educator">
					<h2 className="sidenav-title">educator</h2>
				</Link>
				<Link onClick={()=>{setActive('creative')}} className={active==='creative'? "sidenav-active" : "sidenav-inactive"} to="/creative">
					<h2 className="sidenav-title">creative</h2>
				</Link>
				<Link onClick={()=>{setActive('about')}} className={active==='about'? "sidenav-active" : "sidenav-inactive"} to="/about">
					<h2 className="sidenav-title">about</h2>
				</Link>
			</div>
			{/* ROUTES */}
			<div id="main-container">
				<Switch>
					<Route exact path="/">
						<Homepage />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/educator">
						<LizardLearning />
					</Route>
					<Route path="/creative">
						<Creative />
					</Route>
				</Switch>
			</div>
		</Router>
		</>
);
}

export default App;
