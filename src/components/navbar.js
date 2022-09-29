import React from 'react';
import "./navbar.css"
import { Link } from "react-router-dom" //, useMatch, useResolvedPath

function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">UC Marking and Review System</Link>
            <ul>
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