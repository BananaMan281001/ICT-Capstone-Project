//This is the header function that includes the title and navbar

import React from 'react';
import './App.css';
import Navbar from './components/navbar.js';
import Home from './pages/home.js';
import Request from './pages/request.js';
import Assignments from './pages/assignments.js'
import ViewMore from './pages/viewMore.js'
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom'
import Header from './components/header.js'

function App() {
    return (
        <div className="App">
            <Header />
            <Navbar />
            <div className="containter">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/request' element={<Request />} />
                    <Route path='/assignments' element={<Assignments />} />
                    <Route path='/view-more' element={<ViewMore />} style={{ visibility: "invisible" }}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
