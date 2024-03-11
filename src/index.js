import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import normalize from "normalize.css"
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);


