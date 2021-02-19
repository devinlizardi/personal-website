/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import './draggable.css';

function Draggable(props) {
    const {mousePos} = props;

    const [dragging, setDragging] = useState(false);

    const [innerX, setInnerX] = useState(0);
    const [innerY, setInnerY] = useState(0);
    const [left, setLeft] = useState(100);
    const [top, setTop] = useState(300);

    var leftStyle = {'left': (left).toString() + 'px', 'top': (top).toString() + 'px'};

    useEffect(() => {
        // console.log({"outerX": mousePos[0],
        //             "innerX": innerX,
        //             "outerY": mousePos[1],
        //             "innerY": innerY});
        if (dragging) {
            setLeft(mousePos[0]-innerX);
            setTop(mousePos[1]-innerY-50);
        }
    });

    const innerMouseHandler = (e) => {
        var rect = e.target.getBoundingClientRect();
        var x = e.clientX - rect.left; //x position within the element.
        var y = e.clientY - rect.top;  //y position within the element.

        setInnerX(x);
        setInnerY(y);
    }

    const mouseDownHandler = () => {
        setDragging(true);
    }

    const mouseUpHandler = () => {
        setDragging(false);
    }

    return( <div className="drag-container-main" onMouseMove={innerMouseHandler} onMouseDown={mouseDownHandler} onMouseUp={mouseUpHandler} style={leftStyle}>
                <svg width="533" height="407" viewBox="0 0 533 407" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 22.8418H533V402C533 404.761 530.761 407 528 407H5.00001C2.23858 407 0 404.761 0 402V22.8418Z" fill="#C4C4C4"/>
                    <path d="M0 5C0 2.23857 2.23858 0 5 0H528C530.761 0 533 2.23858 533 5V22.8418H0V5Z" fill="#777777"/>
                    <ellipse cx="10.9311" cy="11.6365" rx="3.06071" ry="3.01685" fill="#C4C4C4"/>
                    <ellipse cx="21.8622" cy="11.6365" rx="3.06071" ry="3.01685" fill="#C4C4C4"/>
                    <ellipse cx="32.3564" cy="11.6365" rx="3.06071" ry="3.01685" fill="#C4C4C4"/>
                </svg>

            </div>);
}

export default Draggable;