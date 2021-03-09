import React, {useState} from 'react';

import fishPA from './../img/fishpa.jpg';
import handIll from './../img/handillustration.jpg';
import sleep from './../img/needsleep.jpg';
import aliens from './../img/aliens.jpg';
import couch from './../img/couch.jpg';
import places from './../img/ohtheplaces.jpg';
import DragContainer from './DragContainer';

function Creative() {
    return(<>
        <br /><br />
        <div className="intro-text">
            <h2>An Artist</h2>
            <p>
            Nunc sollicitudin commodo lorem finibus scelerisque. Proin vitae massa aliquet, 
            iaculis ex eu, vulputate nibh. Cras quis lacus suscipit, sodales lectus a, viverra velit.
            Quisque auctor in ante non faucibus. Ut pharetra enim purus, a pellentesque tellus feugiat non. 
            </p>
        </div>
        <div className="project-container-secondary">
            <div id="illustration-desc">
                <h2>Illustration Progress</h2>
                <em>2019-Present</em>
                <p>
                    Aliquet phasellus eu mauris in augue 
                    tortor in quam in. Vel at id faucibus eget. 
                    Gravida nisi, lobortis facilisis sed eu vitae. 
                    Praesent enim, in nam pretium, accumsan accumsan.
                </p>
            </div>
            <Pieces />
        </div>
        <div className="project-container-tertiary">
                <div className="desc-container">
                    <h2>Video Reel</h2>
                    <em>2016-2020</em>
                    <p id="reel-text">
                        I&#39;m also a passionate video editor and actor, and have been involved in a number
                        of student films through my <a href="https://www.facebook.com/jericho.comedy">improv team</a>,
                         <a href="https://www.giantfilmmakersucb.org/"> GiANT Filmmakers</a>, 
                         and <a href="http://caldka.org/">Cal DKA</a>.
                    </p>
                </div>
                <div className="image-container" id="vimeo-iframe">
                    <iframe src="https://player.vimeo.com/video/346242259" width="640" height="360" 
                        frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" 
                        allowFullScreen></iframe>
                </div>
            </div>
    </>);
}

function Pieces() {
    const [maxHeight, setMaxHeight] = useState(7);
    const [orderObj, setOrderObj] = useState({fish: 5, sleep: 4, hand: 3, aliens: 5, couch: 6, places: 4});

    const buildOrder = (n) => {
        var temp = {fish: orderObj.fish, sleep: orderObj.sleep, hand: orderObj.hand, aliens: orderObj.aliens, couch: orderObj.couch, places: orderObj.places};
        temp[n] = maxHeight;
        return temp;
    }

    const focus = (n) => {
        setOrderObj(buildOrder(n))
        setMaxHeight(maxHeight + 1);
    }

    return ( <>
                <div onMouseDown={() => {focus('fish')}}>
                <DragContainer piece={fishPA} width={450} idd="fishPA" z={orderObj.fish}/>
                </div>
                <div onMouseDown={() => {focus('sleep')}}>
                <DragContainer piece={sleep} width={300} idd="sleep" z={orderObj.sleep}/>
                </div>
                <div onMouseDown={() => {focus('hand')}}>
                <DragContainer piece={handIll} width={350} idd="hand" z={orderObj.hand}/>
                </div>
                <div onMouseDown={() => {focus('aliens')}}>
                <DragContainer piece={aliens} width={330} idd="aliens" z={orderObj.aliens}/>
                </div>
                <div onMouseDown={() => {focus('couch')}}>
                <DragContainer piece={couch} width={300} idd="couch" z={orderObj.couch}/>
                </div>
                <div onMouseDown={() => {focus('places')}}>
                <DragContainer piece={places} width={320} idd="places" z={orderObj.places}/>
                </div>
            </>);
}

export default Creative;