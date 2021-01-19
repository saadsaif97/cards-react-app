import React from 'react';
import './card.styles.css'

export const Card = (props)=>{
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${props.monster.id}?set=set5&size=150x150`} alt="user profile"/>
            <h3>{props.monster.name}</h3>
            <h4>{props.monster.email}</h4>
        </div>
    );
}