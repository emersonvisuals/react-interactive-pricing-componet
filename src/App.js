import "./styles/app.scss";
import Navbar from "./components/Navbar";
import Contents from "./components/Contents";
import Rating from "./components/Rating";

function App() {
    return (
        <div className="App">
            <div className="container">
                <Navbar />
                <Contents />
                <Rating />
            </div>
        </div>
    );
}

export default App;
