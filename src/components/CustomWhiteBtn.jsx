import React from 'react'
import { Link } from 'react-router-dom'

const CustomWhiteBtn = ({ button_link, button_text }) => {
    return (
        <button className='custom-btn custom-white-btn'>
            <Link to={button_link}>{button_text}</Link>
        </button>
    )
}

export default CustomWhiteBtn