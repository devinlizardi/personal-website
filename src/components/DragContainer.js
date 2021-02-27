/* eslint-disable react/prop-types */
import React from 'react';
import Draggable from 'react-draggable';
import './draggable.css';

function DragContainer(props) {
    const {piece, width, idd} = props;

    return( 
        <Draggable>
        <div className="drag-container-main" id={idd} tabIndex={0}>
            <img className="piece-content" src={piece} width={width} alt="i draw this"/>
        </div>
        </Draggable>
        );
}

export default DragContainer;