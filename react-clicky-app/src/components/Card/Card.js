import React from "react";
import "./Card.css";

const Card = props => (

    <div className={`card ${props.won ? "  won":""}`} id={props.id} onClick={props.handleImageClick}>
        <img className='card-img' src={props.image} alt="fav-icons"/>
    </div>
);

export default Card;