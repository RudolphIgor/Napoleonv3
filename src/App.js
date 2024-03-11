import './App.css';
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            {/*<BrowserRouter>*/}
                <main className="main">
                    MAIN sdfsadfsad
                </main>
            {/*</BrowserRouter>*/}
            <Footer/>
        </div>
    );
}

export default App;
