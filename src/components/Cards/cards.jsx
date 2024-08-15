import React from "react";
import "./cards.css";
export default function Cards(props) {
  return (
    <div className="card-container">
      <img
        src={props.item.imageUrl}
        alt={`Photo from Unsplash ${props.item.title}`}
      ></img>
      <div className="card-details">
        <div className="card-location-map">
        <h3>📌 {props.item.location}</h3>
        <a className="map-link" href={props.item.googleMapsUrl} target="_blank">
          View in Google Maps
        </a>
        </div>
        <h2>{props.item.title}</h2>
        <p id="dates">
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p>{props.item.description}</p>
      </div>
    </div>
  );
}
