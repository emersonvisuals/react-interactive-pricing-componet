import React from "react";

const Rating = () => {
    // items
    let listOne = document.querySelector("li.one");
    let listTwo = document.querySelector("li.two");
    let listThree = document.querySelector("li.three");
    let listFour = document.querySelector("li.four");
    let listFive = document.querySelector("li.five");

    const itemOne = () => {
        listOne.classList.toggle("active");
        listTwo.classList.remove("active");
        listThree.classList.remove("active");
        listFour.classList.remove("active");
        listFive.classList.remove("active");
    };

    const itemTwo = () => {
        listOne.classList.remove("active");
        listTwo.classList.toggle("active");
        listThree.classList.remove("active");
        listFour.classList.remove("active");
        listFive.classList.remove("active");
    };

    const itemThree = () => {
        listOne.classList.remove("active");
        listTwo.classList.remove("active");
        listThree.classList.toggle("active");
        listFour.classList.remove("active");
        listFive.classList.remove("active");
    };

    const itemFour = () => {
        listOne.classList.remove("active");
        listTwo.classList.remove("active");
        listThree.classList.remove("active");
        listFour.classList.toggle("active");
        listFive.classList.remove("active");
    };

    const itemFive = () => {
        listOne.classList.remove("active");
        listTwo.classList.remove("active");
        listThree.classList.remove("active");
        listFour.classList.remove("active");
        listFive.classList.toggle("active");
    };

    return (
        <div className="ratingContainer">
            <div className="items">
                <li className="one" onClick={itemOne}>
                    1
                </li>
                <li className="two" onClick={itemTwo}>
                    2
                </li>
                <li className="three" onClick={itemThree}>
                    3
                </li>
                <li className="four" onClick={itemFour}>
                    4
                </li>
                <li className="five" onClick={itemFive}>
                    5
                </li>
            </div>
            <button>submit</button>
        </div>
    );
};

export default Rating;
