/* eslint-disable react/prop-types */
import React from 'react';
import Draggable from 'react-draggable';
import './draggable.css';

function DragContainerTall(props) {
    const {piece, imageWidth, contWidth, contHeight, idd} = props;
    var bottom = contHeight-10;
    var bottomCurve = bottom + (449.761 - 447);
    var botCurveControl = bottomCurve + (452 - 449.761);

    return( 
        <Draggable>
        <div className="drag-container-main" id={idd} tabIndex={0}>
            <img className="piece-content" src={piece} width={imageWidth} alt="i draw this"/>
            <svg className="piece-bg" width={contWidth} height={contHeight} viewBox={`0 0 ${contWidth} ${contHeight}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={`M0 15 H323 V${bottom} C323 ${bottomCurve} 320.761 ${botCurveControl} 318 ${botCurveControl} H5 C2.23857 ${botCurveControl} 0 ${bottomCurve} 0 ${bottom} V15 Z`} fill="#C4C4C4"/>
                <path d="M0 5 C0 2.23858 2.23858 0 5 0H318C320.761 0 323 2.23858 323 5 V15 H0 V5 Z" fill="#777777"/>
                <ellipse cx="8.21294" cy="7.16252" rx="2.41557" ry="2.3875" fill="#C4C4C4"/>
                <ellipse cx="17.8753" cy="7.16252" rx="2.41557" ry="2.3875" fill="#C4C4C4"/>
                <ellipse cx="26.5713" cy="7.16252" rx="2.41557" ry="2.3875" fill="#C4C4C4"/>
            </svg>

        </div>
        </Draggable>
        );
}

export default DragContainerTall;