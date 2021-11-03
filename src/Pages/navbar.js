import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <nav>
            <div class="topnav">
                <a class="active" href="#home">
                    <Link to="/">Home</Link>
                </a>
                <a href="#PremierLeague">
                    <Link to="/PremierLeague">Premier League</Link>
                </a>
                <a href="#Login">
                    <Link to="/Login">Login</Link>
                </a>
                <a href="#about">
                    <Link to="/About">About</Link>
                </a>
                </div>
        </nav>
    )
}

export default NavBar;