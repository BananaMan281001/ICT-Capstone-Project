import React from 'react';
import uniLogo from './uniLogo.jpg'
import "./header.css"


function Header() {
    return (
        <div>
            <h1 className="headerStyle"><img src={uniLogo} alt="University of Canberra" />UC Marking and Moderation System</h1>
        </div>
    );
}

export default Header;