import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <nav>
            <div class="topnav">
                <Link class="homeLink" to="/">Home</Link>
                <Link class="navLink" to="/PremierLeague">Premier League</Link>
                <Link class="navLink" to="/Login">Login</Link>
                <Link class="navLink" to="/About">About</Link>
                <Link class="navLink" to="/Leagues">Leagues</Link>
            </div>
        </nav>
    )
}

export default NavBar;