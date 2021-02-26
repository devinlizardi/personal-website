/* eslint-disable react/prop-types */
import React from 'react';
import Draggable from 'react-draggable';
import './draggable.css';

function DragContainer(props) {
    const {piece, width, bgW, height, rate, idd} = props;

    return( 
        <Draggable>
        <div className="drag-container-main" id={idd} tabIndex={0}>
            <img className="piece-content" src={piece} width={width} alt="i draw this"/>
            <svg className="piece-bg" width={bgW+rate} height={height+rate*3} viewBox={`0 0 ${533} ${407}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 22.8418H533V402C533 404.761 530.761 407 528 407H5.00001C2.23858 407 0 404.761 0 402V22.8418Z" fill="#C4C4C4"/>
                <path d="M0 5C0 2.23857 2.23858 0 5 0H528C530.761 0 533 2.23858 533 5V22.8418H0V5Z" fill="#777777"/>
                <ellipse cx="10.9311" cy="11.6365" rx="3.06071" ry="3.01685" fill="#C4C4C4"/>
                <ellipse cx="21.8622" cy="11.6365" rx="3.06071" ry="3.01685" fill="#C4C4C4"/>
                <ellipse cx="32.3564" cy="11.6365" rx="3.06071" ry="3.01685" fill="#C4C4C4"/>
            </svg>

        </div>
        </Draggable>
        );
}

export default DragContainer;