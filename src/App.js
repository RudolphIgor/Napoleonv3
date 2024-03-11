import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="wrapper">
            <Header/>
                <main className="main">
                   MAIN
                </main>
            <Footer/>
        </div>
    );
}

export default App;
