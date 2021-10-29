import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <nav>
            <h2>Navbar</h2>
            <ul>
                <li>
                    <Link to="/">Home</Link>                    
                </li>
                <li>
                    <Link to="/PremierLeague">Premier League</Link>                    
                </li>
                <li>
                    <Link to="/Login">Login</Link>                    
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;