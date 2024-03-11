import './App.css';
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <BrowserRouter>

            </BrowserRouter>
            <Footer/>
        </div>
    );
}

export default App;
