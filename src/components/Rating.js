import React from "react";
import { useRef } from "react";

const Rating = () => {
    const isActive = useRef(true);

    const activeMode = () => {
        console.log((isActive.current.className = "active"));
    };

    return (
        <div className="ratingContainer">
            <div className="items">
                <li id="one" className="" ref={isActive} onClick={activeMode}>
                    1
                </li>
                <li id="two" className="">
                    2
                </li>
                <li id="three" className="">
                    3
                </li>
                <li id="four" className="">
                    4
                </li>
                <li id="five" className="">
                    5
                </li>
            </div>
            <button>submit</button>
        </div>
    );
};

export default Rating;
