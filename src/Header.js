import React from "react";
import globeIcon from "./images/globe-icon.png"

export default function Header() {
    return (

        <header>
           <img src={globeIcon} alt=""></img>
           <h1> my travel journal</h1>
        </header>

    )
}