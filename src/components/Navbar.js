import React from "react";
import Star from "../images/icon-star.svg";

const Navbar = () => {
    return (
        <div className="starContainer">
            <img className="starImg" src={Star} alt="" />
        </div>
    );
};

export default Navbar;
