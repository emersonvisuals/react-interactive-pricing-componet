import { useState } from "react";
import ThankyouImg from "../images/illustration-thank-you.svg";

const Thankyou = ({ rating }) => {
    return (
        <div className="thankYouContainer">
            <div className="imageContainerNew">
                <img
                    className="imageThankyou"
                    src={ThankyouImg}
                    alt="thankyou image"
                />
            </div>
            <div className="selectionContainer">
                <p>You selected {rating} out of 5</p>
            </div>
            <div className="thankYouContainer">
                <h1>Thank you!</h1>
                <p>
                    We appreciate you taking the time to give a rating. If you
                    ever need more support, don't hesitate to get in touch!
                </p>
            </div>
        </div>
    );
};

export default Thankyou;
