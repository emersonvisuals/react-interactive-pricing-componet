import React, { useContext, useState } from "react";

const Rating = ({ handleThankYou, setRating }) => {
    const [activeRating, setActiveRating] = useState({
        oneStar: false,
        twoStars: false,
        threeStars: false,
        fourStars: true,
        fiveStars: false,
    });

    return (
        <div className="ratingContainer">
            <div className="items">
                <li
                    id="one"
                    className={activeRating.oneStar ? "active" : ""}
                    onClick={() => {
                        setActiveRating({
                            oneStar: true,
                            twoStars: false,
                            threeStars: false,
                            fourStars: false,
                            fiveStars: false,
                        });
                        setRating(1);
                        console.log("1");
                    }}
                >
                    1
                </li>
                <li
                    id="two"
                    className={activeRating.twoStars ? "active" : ""}
                    onClick={() => {
                        setActiveRating({
                            oneStar: false,
                            twoStars: true,
                            threeStars: false,
                            fourStars: false,
                            fiveStars: false,
                        });

                        setRating(2);
                        console.log("2");
                    }}
                >
                    2
                </li>
                <li
                    id="three"
                    className={activeRating.threeStars ? "active" : ""}
                    onClick={() => {
                        setActiveRating({
                            oneStar: false,
                            twoStars: false,
                            threeStars: true,
                            fourStars: false,
                            fiveStars: false,
                        });

                        setRating(3);
                        console.log("3");
                    }}
                >
                    3
                </li>
                <li
                    id="four"
                    className={activeRating.fourStars ? "active" : ""}
                    onClick={() => {
                        setActiveRating({
                            oneStar: false,
                            twoStars: false,
                            threeStars: false,
                            fourStars: true,
                            fiveStars: false,
                        });

                        setRating(4);
                        console.log("4");
                    }}
                >
                    4
                </li>
                <li
                    id="five"
                    className={activeRating.fiveStars ? "active" : ""}
                    onClick={() => {
                        setActiveRating({
                            oneStar: false,
                            twoStars: false,
                            threeStars: false,
                            fourStars: false,
                            fiveStars: true,
                        });

                        setRating(5);
                        console.log("5");
                    }}
                >
                    5
                </li>
            </div>
            <button
                onClick={() => handleThankYou(false) && console.log("clicked")}
            >
                submit
            </button>
        </div>
    );
};

export default Rating;
