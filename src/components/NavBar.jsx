import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import  "../index.css"
const NavBar = () => {
    return (
        <nav>
            <Link to={"/"} className="logo">
                <h1>Nom Nom </h1>
                <FontAwesomeIcon icon={faPizzaSlice} className="logo-icon"/>
            </Link>
        </nav>
    )
}

export default NavBar;