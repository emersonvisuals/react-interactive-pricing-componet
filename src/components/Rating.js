import React, { useState } from "react";

const Rating = () => {
    const [activeRating, setActiveRating] = useState({
        oneStar: false,
        twoStars: false,
        threeStars: false,
        fourStars: false,
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
                    }}
                >
                    5
                </li>
            </div>
            <button>submit</button>
        </div>
    );
};

export default Rating;
