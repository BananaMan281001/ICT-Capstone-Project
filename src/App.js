//This is the header function that includes the title and navbar

import React from 'react';
import './App.css';
import Navbar from './components/navbar.js';
import Home from './pages/home.js';
import Request from './pages/request.js';
import Assignments from './pages/assignments.js'
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="containter">
                <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route path='/request' element={<Request />} />
                    <Route path='/assignments' element={<Assignments />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
