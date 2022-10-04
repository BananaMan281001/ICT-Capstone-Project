import React from 'react';
import "./navbar.css"
import { Link } from "react-router-dom" //, useMatch, useResolvedPath
//<Link to="/" className="site-title">UC Marking and Review System</Link>

function Navbar() {
    return (
        <nav className="nav">
            <ul>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/request">Request</CustomLink>
                <CustomLink to="/assignments">Assignments</CustomLink>
            </ul>
        </nav>
    );
}

function CustomLink({ to, children, ...props }) {
    //const resolvedPath = useResolvedPath(to)
    //const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        /*<li className={isActive ? "active" : ""}>*/
        <li>
            <Link to={to} {...props}>{children}</Link>
        </li>
    );
}

export default Navbar;