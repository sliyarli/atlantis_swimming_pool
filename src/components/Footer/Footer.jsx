import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

// LOCAL COMPONENTS
import "./Footer.css";
import CustomBlueBtn from '../CustomBlueBtn';
import Brand_logo from '../Brand_Logo';

// ICONS
import { AiOutlineMail } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsPinterest } from "react-icons/bs";


const Footer = () => {

    const form = useRef();
    const abuneOl = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_fposlvv', 'template_q0pntbr', form.current, '7VaSY_4c4BL9rmhnR')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        Swal.fire({
            title: 'Abunə oldunuz!',
            text: 'Yeniliklərdən xəbərdar olacaqsınız!',
            icon: 'success',
            confirmButtonText: 'ƏLA'
        })
        form.current.reset();
    };

    return (
        <>
            <footer>
                <div className="upper-footer">
                    <h1>yeniliklərdən xəbərdar olun!</h1>
                    <div className="email-subscription">
                        <form ref={form} onSubmit={abuneOl} autocomplete="off">
                            <input type="mail" name='poct' placeholder='E-poçtunuz' />
                            <CustomBlueBtn button_text={'Abunə Ol'} />
                        </form>
                    </div>
                </div>
                <div className="medium-footer">
                    <div className="medium-footer-left">
                        <Brand_logo />
                        <div className="footer-contact" >
                            <a id='adress-link' href="https://goo.gl/maps/B9FSR4MqaVU3ajpX9">
                                Bakı, 203 Nizami Küçəsi, Baku 1010
                            </a>
                            <a href='mailto:atlantis@info.com'>
                                <AiOutlineMail /> atlantis@info.com
                            </a>
                        </div>
                    </div>
                    <div className="medium-footer-center">
                        <div className="footer-social-media-links">
                            <a href="https://www.facebook.com/"><BsFacebook /></a>
                            <a href="https://www.pinterest.com/"><BsPinterest /></a>
                            <a href="https://www.instagram.com/"><BsInstagram /></a>
                        </div>
                    </div>
                </div>
                <div className="lower-footer">
                    <p>© Müəllif hüquqları qorunur <br /> <span> | Əliyarlı Şahin | </span> <br /> 2023</p>
                </div>
            </footer >
        </>
    )
}

export default Footer