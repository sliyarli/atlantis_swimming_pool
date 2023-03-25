import React from 'react'
import Lottie from "lottie-react";

// LOCAL COMPONENTS
import './NotFoundPage.css'
import not_found_animation from '../assets/animated-icons/not-found-animation.json'
import { useLocation } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <>
            <div className="not-found-page" data-aos='zoom-in' data-aos-duration='450'>
                <Lottie className='not-found-animasiya' animationData={not_found_animation}></Lottie>
                <h1>404 - AXTARDIĞINIZ SƏHİFƏ TAPILMADI</h1>
            </div>
        </>
    )
}

export default NotFoundPage