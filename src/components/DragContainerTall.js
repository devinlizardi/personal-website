/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Draggable from 'react-draggable';
import './draggable.css';

function DragContainerTall(props) {
    const {piece, width, idd, z} = props;

    const [heightObj, setHeightObj] = useState({height: 0, bottom: 0, bottomCurve: 0, botCurveControl: 0});
    const [widthObj, setWidthObj] = useState({width: 0, rightCurve: 0, rightCurveControl: 0});

    const onImgLoad = (e) => {
        let h = e.target.height + 50;
        let b = h-10;
        let bC = b + (449.761 - 447);
        let bCC = bC + (452 - 449.761);

        let w = width + 40; //323
        let rC = w - 2.239 //320.761
        let rCC = rC - 2.761 //318

        setWidthObj({width: w, rightCurve: rC, rightCurveControl: rCC});
        setHeightObj({height: h, bottom: b, bottomCurve: bC, botCurveControl: bCC});
    }

    return( 
        <Draggable>
        <div className="drag-container-main" id={idd} style={{'zIndex': z}}>
            <img className="piece-content" src={piece} width={width} alt="i draw this" onLoad={onImgLoad}/>
            <svg className="piece-bg" width={width+30} height={heightObj.height} viewBox={`0 0 ${width+40} ${heightObj.height}`} 
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={`M0 15 
                        H${widthObj.width} 
                        V${heightObj.bottom} 
                        C${widthObj.width} ${heightObj.bottomCurve} 
                            ${widthObj.rightCurve} ${heightObj.botCurveControl} 
                            ${widthObj.rightCurveControl} ${heightObj.botCurveControl} 
                        H5 
                        C2.23857 ${heightObj.botCurveControl} 
                            0 ${heightObj.bottomCurve} 
                            0 ${heightObj.bottom} 
                        V15 Z`} fill="#C4C4C4"/>
                <path d={`M0 5 
                        C0 2.23858 
                            2.23858 0 
                            5 0 
                        H${widthObj.rightCurveControl}
                        C${widthObj.rightCurve} 0 
                            ${widthObj.width} 2.23858 
                            ${widthObj.width} 5 
                        V15 
                        H0 
                        V5 Z`} fill="#777777"/>
                <ellipse cx="8.21294" cy="7.16252" rx="2.41557" ry="2.3875" fill="#C4C4C4"/>
                <ellipse cx="17.8753" cy="7.16252" rx="2.41557" ry="2.3875" fill="#C4C4C4"/>
                <ellipse cx="26.5713" cy="7.16252" rx="2.41557" ry="2.3875" fill="#C4C4C4"/>
            </svg>

        </div>
        </Draggable>
        );
}

export default DragContainerTall;