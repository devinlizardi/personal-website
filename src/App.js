import React, {useEffect, useState, useLayoutEffect} from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
import 'scroll-behavior-polyfill';
import './components/components.css';

import lizard from './img/lizard.png';
import bg from './img/coffeecup.jpg';

import About from './components/About';
import Homepage from './components/Homepage';
import LizardLearning from './components/LizardLearning';
import Creative from './components/Creative';
import circlePaths from './components/circlePaths';

function App() {
	const [active, setActive] = useState('');
	const [spin, setSpin] = useState(0);
	const [width, height] = useWindowSize();

	const circleHeightOffset = 380;
	const boxFactor = 60;
	const boxLineWidth = 12;
	const boxStartingHeight = 300;

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
			<div>
				<img id="background" src={bg}/>
				<svg id="bg-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
					<clipPath id="bg-clip">
						<rect height="25" width={width}/>
						<path transform={`translate(-250, ${height - circleHeightOffset})`} d={circlePaths.pathTwo} className="circle-paths"/>
						<path transform={`translate(-250, ${height - circleHeightOffset})`} d={circlePaths.pathThree} className="circle-paths"/>
						<path transform={`translate(-250, ${height - circleHeightOffset})`} d={circlePaths.pathOuter} className="circle-paths"/>
						<path transform={`translate(-250, ${height - circleHeightOffset})`} d={circlePaths.pathInner} className="circle-paths"/>
						<path transform={`translate(-250, ${height - circleHeightOffset})`} d={circlePaths.pathOne} className="circle-paths"/>
						<path d={`M${width-boxFactor} 25 v${boxStartingHeight} H${width} v${-boxLineWidth} H${width-boxFactor+boxLineWidth} V25`} />
						<path d={`M${width-(boxFactor*2)} 25 v${boxStartingHeight-(boxFactor)} H${width} v${-boxLineWidth} H${width-(boxFactor*2)+boxLineWidth} V25`} />
						<path d={`M${width-(boxFactor * 3)} 25 v${boxStartingHeight-(boxFactor*2)} H${width} v${-boxLineWidth} H${width-(boxFactor * 3)+boxLineWidth} V25`} />
					</clipPath>
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

function useWindowSize() {
	const [size, setSize] = useState([0, 0]);
	useLayoutEffect(() => {
		function updateSize() {
			setSize([window.innerWidth, window.innerHeight]);
		}
		window.addEventListener('resize', updateSize);
		updateSize();
		return () => window.removeEventListener('resize', updateSize);
	}, []);
	return size;
}

export default App;
