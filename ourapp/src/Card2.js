import React from 'react';
import './Card2.css'

function Card2 ({title, image, body}) {
    return (
        <div className="cards">
            <div className="card-container">
                <div className="image-container">
                    <img src={image} />
                </div>
                <div className="card-title">
                    <h3>{title}</h3>
                </div>
                <div className="card-body">
                    <p>{body}</p>
                </div>
            </div>
        </div>
        )   
    }

export default Card2;