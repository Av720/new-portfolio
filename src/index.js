import React from "react";
import reactDom from 'react-dom/client'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';



const root = reactDom.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);