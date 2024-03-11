import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <div className={"wrapper" + " " + "container"}>
            <Header/>
            <main className="main">
                <Routes>
                    <Route path="" element={<Header/>}/>
                    <Route path="footer" element={<Footer/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
