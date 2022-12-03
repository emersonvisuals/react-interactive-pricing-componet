import "./styles/app.scss";
import Navbar from "./components/Navbar";
import Contents from "./components/Contents";
import Rating from "./components/Rating";
import Thankyou from "./components/Thankyou";
import { useState } from "react";

function App() {
    // setting state of thankyou page
    const [showThankYouPage, setThankYouPage] = useState(true);

    // setting state of rating
    const [rating, setRating] = useState(4);

    const handleThankYou = (result) => {
        setThankYouPage();
    };

    return (
        <div className="App">
            <div className="container">
                <div>
                    {showThankYouPage ? (
                        <div>
                            <Navbar />
                            <Contents />
                            <Rating
                                handleThankYou={handleThankYou}
                                setRating={setRating}
                            />
                        </div>
                    ) : (
                        <Thankyou rating={rating} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
