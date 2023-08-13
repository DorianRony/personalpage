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
            <Home></Home>
        </div>
    );
}

export default App;
