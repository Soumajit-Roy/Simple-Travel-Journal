import React from "react";

export default function Cards(props){
    return(
        <div className="card-container">
            <img src={props.item.imageUrl} alt={`Photo from Unsplash ${props.item.title}`}></img>
            <h3>{props.item.location}</h3>
            <p href={props.item.googleMapsUrl} target="_blank"></p>
            <h2>{props.item.title}</h2>
            <p>{props.item.startDate} - {props.item.endDate}</p>
            <p>{props.item.description}</p>
        </div>
    )
}