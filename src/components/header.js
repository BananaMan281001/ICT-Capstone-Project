import React from 'react';
import logo from './logo.png'
import "./header.css"


function Header() {
    return (
        <div>
            <h1 className="headerStyle"><img src={logo} alt="University of Canberra" />UC Marking and Moderation System</h1>
        </div>
    );
}

export default Header;