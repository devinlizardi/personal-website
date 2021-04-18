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
import lizard from './img/lizard.png';

import About from './components/About';
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
				<Link to="/" onClick={()=>{setActive('')}} id="click-to-main" />
				<img id="lizard-above" style={{'transform' : `rotate(${spin}deg)`}}
							src={lizard} alt="my last name
							is just lizard-with-an-i, something i've been saying
							for years..."/>
				<h1 id="header-lizard">Devin Lizardi</h1>
				<p>educator and creative covered in cat hair</p>
				
			</div>
			<img id="background" src={bg}/>

			<div id="background-mask">
				<svg width="123" height="121" viewBox="0 0 123 121" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" d="M44.24 120.528C31.328 116.753 20.0101 108.848 12.0206 98.0245C4.03112 87.2012 -0.189146 74.0568 0.00650446 60.6056C0.202155 47.1543 4.80293 34.1382 13.1038 23.5519C21.4047 12.9656 32.9477 5.39302 45.9641 1.99465C58.9805 -1.40371 72.7521 -0.440413 85.1686 4.73693C97.5852 9.91428 107.962 19.0201 114.708 30.6589C121.454 42.2977 124.198 55.8276 122.519 69.1751C120.84 82.5226 114.831 94.9515 105.413 104.557L97.9466 97.2363C105.764 89.2639 110.751 78.9482 112.144 67.8701C113.538 56.792 111.26 45.5626 105.661 35.9026C100.062 26.2427 91.4498 18.6851 81.1444 14.388C70.839 10.091 59.4089 9.29146 48.6056 12.112C37.8023 14.9326 28.2219 21.2176 21.3323 30.004C14.4428 38.7904 10.6243 49.5934 10.4619 60.7576C10.2995 71.9219 13.8022 82.8314 20.4333 91.8144C27.0644 100.797 36.458 107.358 47.1746 110.492L44.24 120.528Z"/>
				</svg>
			</div>

			<div className="sidenav-main">
				<h2 className="sidenav-title">
					<Link onClick={()=>{setActive('educator')}} className={active==='educator'? "sidenav-active" : "sidenav-inactive"} to="/educator">educator</Link>
				</h2>
				<h2 className="sidenav-title">
					<Link onClick={()=>{setActive('creative')}} className={active==='creative'? "sidenav-active" : "sidenav-inactive"} to="/creative">creative</Link>
				</h2>
				<h2 className="sidenav-title">
					<Link onClick={()=>{setActive('about')}} className={active==='about'? "sidenav-active" : "sidenav-inactive"} to="/about">about</Link>
				</h2>
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
