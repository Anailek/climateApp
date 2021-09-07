import React from "react";
import { Link } from "react-router-dom";
import button from "../button.png";
import "./Card.css";

function Card({ min, max, name, img, onClose, id }) {
  return (
    <div className="card">
      <div className="button_container">
        <button onClick={onClose}>
          <img className="button" src={button} alt="button" />
        </button>
      </div>

      <div>
        <Link to={`/ciudad/${id}`}>
          <h5 className="card-title">{name}</h5>
        </Link>
      </div>

      <div className="card-body">
        <div className="temp">
          <div>
            <p>Min</p>
            <p>{min}°</p>
          </div>

          <div>
            <p>Max</p>
            <p>{max}°</p>
          </div>
        </div>

        <div>
          <img
            src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
            alt="Img"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
