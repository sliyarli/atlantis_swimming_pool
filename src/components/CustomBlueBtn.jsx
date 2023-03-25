import React from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik';

const CustomBlueBtn = ({ button_link, button_text }) => {
    return (
        <button className='custom-btn custom-blue-btn' type='submit' >
            <Link to={button_link}>{button_text}</Link>
        </button>
    )
}

export default CustomBlueBtn