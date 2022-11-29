import React from "react";

const Rating = () => {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) => <li>{number}</li>);

    return (
        <div className="ratingContainer">
            <div key="list" className="items">
                {listItems}
            </div>
            <button>submit</button>
        </div>
    );
};

export default Rating;
