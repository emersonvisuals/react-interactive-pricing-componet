import "./styles/app.scss";
import Navbar from "./components/Navbar";
import Contents from "./components/Contents";
import Rating from "./components/Rating";
import Thankyou from "./components/Thankyou";
import { useState } from "react";

function App() {
    const [showThankYouPage, setThankYouPage] = useState(true);

    const handleThankYou = (result) => {
        setThankYouPage(result);
    };

    return (
        <div className="App">
            <div className="container">
                <div>
                    {showThankYouPage ? (
                        <div>
                            <Navbar />
                            <Contents />
                            <Rating handleThankYou={handleThankYou} />
                        </div>
                    ) : (
                        <Thankyou />
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
