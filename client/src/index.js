import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename="/ishbor">
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
reportWebVitals();
