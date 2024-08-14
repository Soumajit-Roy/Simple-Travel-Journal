import React from "react";
import "./header.css"
import iconimg from "../../assets/travel.png"

export default function Header(){
    return(
        <div className="head-el">
            <img src={iconimg} ></img>
            <h1>Chai and Chronicles</h1>
        </div>
    )
}