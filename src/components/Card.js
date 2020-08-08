import React from 'react';
import './Card.css';

const Card = ({name, id, email}) => {
    return (
        <div className="bg-light-green dib pa3 ma2 grow bw2 shadow-5 tc">
            <img src={`https://robohash.org/${id}?150x150`} alt="robos" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;