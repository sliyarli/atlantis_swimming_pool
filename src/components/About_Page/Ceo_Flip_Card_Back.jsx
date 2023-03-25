import React from 'react'
import './Ceo_Flip_Card.css'

const Ceo_Flip_Card_Back = ({ fullName, nameInfo, cardId }) => {
    return (
        <>
            <div className="flip-card-back" id={cardId}>
                <h1>{fullName}</h1>
                <p>{nameInfo}</p>
            </div>
        </>
    )
}

export default Ceo_Flip_Card_Back