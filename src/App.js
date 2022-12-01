import "./styles/app.scss";
import Navbar from "./components/Navbar";
import Contents from "./components/Contents";
import Rating from "./components/Rating";
import Thankyou from "./components/Thankyou";
import { useState } from "react";

function App() {
    const [showThankYouPage, setThankYouPage] = useState(true);

    return (
        <div className="App">
            <div className="container">
                {showThankYouPage ? (
                    <div>
                        <Navbar />
                        <Contents />
                        <Rating />
                    </div>
                ) : (
                    <Thankyou />
                )}
            </div>
        </div>
    );
}

export default App;
