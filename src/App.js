/* eslint-disable no-unused-vars */
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
import lizard from './img/lizard.png';
import Homepage from './components/Homepage';
import LizardLearning from './components/LizardLearning';
import Creative from './components/Creative';

import bg from './img/coffeecup.jpg';

function App() {
	const [active, setActive] = useState('');
	const [spin, setSpin] = useState(0);

	useEffect(() => {
		console.log(spin)
		setSpin(spin+400);
		window.scroll({
			behavior: "smooth",
			top: 0,
		});
	}, [active])

	return(
		<>
		<Router>
			<div className="header">
				<Link to="/" onClick={()=>{setActive('')}}>
					<img id="lizard-above" style={{'transform' : `rotate(${spin}deg)`}}
								src={lizard} alt="my last name
								is just lizard-with-an-i, something i've been saying
								for years..."/>
					<h1 id="header-lizard">Devin Lizardi</h1>
					<p>educator and creative covered in cat hair</p>
				</Link>
			</div>
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
