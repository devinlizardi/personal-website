import React from 'react';
import './components.css';
import lizard from './../img/lizard.png';

function Header() {
	return(
		<div className="header">
			<img id="lizard-above" 
						src={lizard} alt="my last name
						is just lizard-with-an-i, something i've been saying
						for years..."/>
			<h1 id="header-lizard">Devin Lizardi</h1>
			<p>creative, performer, covered in cat hair</p>
		</div>
	);
}

export default Header;