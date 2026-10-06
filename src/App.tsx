import React from 'react';
import './App.css';
import {Home} from "./components/Home";
import background from "./images/background.svg";

function App() {
    return (
        <div className="bg-slate-50" style={{
            backgroundPosition: "top",
            backgroundImage: `url(${background})`
        }}>
            <a className="skip-link" href="#contenido">Ir al contenido</a>
            <Home></Home>
        </div>
    );
}

export default App;
