import React from 'react'
import { Link } from 'react-router-dom'

const CustomGrayBtn = ({ button_link, button_text }) => {
    return (
        <button className='custom-btn custom-gray-btn'>
            <Link to={button_link}>{button_text}</Link>
        </button>
    )
}

export default CustomGrayBtn