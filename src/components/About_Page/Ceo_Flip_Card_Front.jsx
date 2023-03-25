import React from 'react'
import './Ceo_Flip_Card.css'
const Ceo_Flip_Card_Front = ({flip_card_image}) => {
  return (
    <>
    <div className="flip-card-front">
        <img src={flip_card_image} alt="" />
    </div>
    </>
  )
}

export default Ceo_Flip_Card_Front