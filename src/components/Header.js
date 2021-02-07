import React from 'react';
import './components.css';
import lizard from './../img/lizard.png';

function Header() {
	return(
		<div className="header">
			<div id="header-lizard">
				<h1>Devin Lizardi</h1>
				<img id="lizard-above" src={lizard}/>
			</div>
			<p>creative, performer, covered in cat hair</p>
		</div>
	);
}

export default Header;