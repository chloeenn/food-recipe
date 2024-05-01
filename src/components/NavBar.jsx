import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import  "../index.css"
const NavBar = () => {
    return (
        <nav>
            <Link to={"/"} className="logo">
                <h1>Nom Nom</h1>
            </Link>
        </nav>
    )
}

export default NavBar;