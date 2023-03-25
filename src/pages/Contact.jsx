import React, { useRef } from 'react'
import Faq from "react-faq-component";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import CustomErrorMessage from '../components/CustomErrorMessage';

// LOCAL COMPONENTS
import './Contact.css'
import Header from '../components/Header/Header';
import CustomBlueBtn from '../components/CustomBlueBtn';

// IMAGES
import contact_header_bg from '../assets/svgs/Header/Contact/contact_header_bg.png'
import faq_img from '../assets/svgs/Contact/faq-img.jpg'

// ICONS
import { BsMap } from "react-icons/bs";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BsCoin } from "react-icons/bs";
import { GoTools } from "react-icons/go";
import { RiTeamLine } from "react-icons/ri";

const Contact = () => {

    const data = {
        title: "TEZ-TEZ VERİLƏN SUALLAR",
        rows: [
            {
                title: "Niyə sizi seçim?",
                content: `Hovuz təmizləmə xidmətinin seçilməsi hovuz sahibləri üçün bir sıra üstünlüklər verə bilər. Birincisi, hovuzun müntəzəm təmizlənməsi və saxlanması yosunların və bakteriyaların yığılmasının qarşısını almağa kömək edə bilər ki, bu da sağlamlıq problemlərinə və bahalı təmirə səbəb ola bilər. `,
            },
            {
                title: "Xidmətlərinizdən bir neçəsini seçə bilərəmmi?",
                content: "İkincisi, peşəkar təmizlik xidməti hovuz avadanlığının düzgün işləməsini təmin edərək, zədələnmə və ya nasazlıq riskini azalda bilər. Üçüncüsü, müntəzəm təmizlik hovuzun estetik cazibəsini qoruyub saxlamağa kömək edə bilər, onun üzgüçülər üçün cəlbedici görünməsini və hiss etdirməsini təmin edir.",
            },
            {
                title: "Məhsullarınız insan sağlamlığına ziyanları varmı?",
                content: `Nəhayət, hovuzun təmizlənməsi və baxım işlərini peşəkar xidmət təminatçısına həvalə etməklə, hovuz sahibləri vaxta və səyə qənaət edə, onlara baxım stressi olmadan hovuzlarından həzz almağa imkan verə bilər. `,
            },
            {
                title: "İşinizə nə qədər qarantiya verirsiniz?",
                content: 'Ümumiyyətlə, üzgüçülük hovuzunun təmizlənməsi xidmətinin seçilməsi hovuzunuzun gələcək illər ərzində təmiz, təhlükəsiz və xoş qalmasını təmin etməyə kömək edə bilər.',
            },
        ],
    };

    // MAIL GONDERME
    const form = useRef();
    const sendEmail = (values) => {
        emailjs.send('service_fposlvv', 'template_j06vyvw', values, '7VaSY_4c4BL9rmhnR')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        Swal.fire({
            title: 'Mesajınız göndərildi!',
            text: 'Sizinlə tezliklə əlaqə saxlayacağıq!',
            icon: 'success',
            confirmButtonText: 'ƏLA'
        })
        form.current.reset(); // Reset form after successful submission
    };

    // VALIDASIYA
    const validationSchema = Yup.object().shape({
        ad: Yup.string()
            .min(3, 'Adınız ən az 3 hərfli olmalıdır')
            .max(50, 'Adınız 50 hərfdən çox ola bilməz')
            .required('Adınızı daxil edin'),
        poct: Yup.string().email('Düzgün email ünvanı daxil edin').required('E-poçt ünvanınızı daxil edin'),
        telefon: Yup.string()
            .matches(/^(?:\+994|0)[1-9][0-9]{7,8}$/, 'Telefon nömrəsini düzgün formatda daxil edin')
            .required('Telefon nömrəsini daxil edin'),
        mesaj: Yup.string()
            .min(10, 'Mesajınız ən az 10 simvol olmalıdır')
            .max(500, 'Mesajınız 500 simvoldan çox ola bilməz.')
            .required('Mesajınızı daxil edin'),
    });


    return (
        <>
            {/* <Header
                header_heading={'ƏLAQƏ'}
                header_image={contact_header_bg}
                header_route={'Əlaqə'}
            >
            </Header> */}
            <div className="contact-page-info home-section">
                <div className="home-section-content">
                    <h2 className='home-section-main-heading' data-aos='fade-right'>Bizimlə əlaqə saxlayın!</h2>
                </div>
                <div className="contact-info-container">
                    <div className="contact-info">
                        <a href="https://goo.gl/maps/B9FSR4MqaVU3ajpX9">
                            <BsMap /> Bakı, 203 Nizami Küçəsi
                        </a>
                    </div>
                    <div className="contact-info">
                        <a href='mailto:atlantis@info.com'>
                            <AiOutlineMail /> atlantis@info.com
                        </a>
                    </div>
                    <div className="contact-info">
                        <a href='tel:+994-77-550-01-14'>
                            <AiOutlinePhone /> +994-99-999-99-99
                        </a>
                    </div>
                </div>
                <div class="home-introduction-wave-bottom">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                    </svg>
                </div>
            </div>
            <section className="home-contact contact-page home-section bg-blue-to-purple" id='contact-form-section'>
                <div class="home-introduction-wave">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                    </svg>
                </div>
                <div className="home-contact-left">
                    <div className="home-contact-cards-container">
                        <h2 className='contact-section-main-heading' data-aos='fade-top' data-aos-delay='900'>NİYƏ BİZ?</h2>
                        <div className="home-contact-card" data-aos='fade-left' data-aos-delay='1300'>
                            <BsCoin className='contact-card-icon' />
                            <h4 className='contact-card-heading'>Sərfəli qiymətlər</h4>
                        </div>
                        <div className="home-contact-card" data-aos='fade-left' data-aos-delay='2000'>
                            <GoTools className='contact-card-icon' />
                            <h4 className='contact-card-heading'>Müasir avadanlıqlar</h4>
                        </div>
                        <div className="home-contact-card" data-aos='fade-left' data-aos-delay='2700'>
                            <RiTeamLine className='contact-card-icon' />
                            <h4 className='contact-card-heading'>Peşəkar işçi heyəti</h4>
                        </div>
                    </div>
                </div>
                <div className="home-contact-right" data-aos='fade-right' data-aos-offset='250'>
                    <div class="contact-form-container">
                        <div class="contact-box">
                            <div class="contact-form-left" data-aos="zoom-in" data-aos-delay="400">
                            </div>
                            <div class="contact-form-right">
                                <h2>Bizimlə Əlaqə Saxlayın</h2>
                                <Formik
                                    initialValues={{
                                        ad: '',
                                        poct: '',
                                        telefon: '',
                                        mesaj: '',
                                    }}
                                    validationSchema={validationSchema}
                                    onSubmit={(values, { setSubmitting }) => {
                                        setSubmitting(true);
                                        sendEmail(values);
                                        setSubmitting(false);
                                    }}
                                >
                                    {({ isSubmitting, isValid, dirty }) => (
                                        <Form autocomplete="off" >
                                            <div>
                                                <Field type="text" name="ad" placeholder="Adınız" className="contact-form-input" />
                                                <CustomErrorMessage name="ad" />
                                            </div>
                                            <div>
                                                <Field type="email" name="poct" placeholder="E-poçt ünvanınız" className="contact-form-input" />
                                                <CustomErrorMessage name="poct" />
                                            </div>
                                            <div>
                                                <Field type="tel" name="telefon" placeholder="Əlaqə nömrəniz" className="contact-form-input" />
                                                <CustomErrorMessage name="telefon" />
                                            </div>
                                            <div>
                                                <Field as="textarea" name="mesaj" placeholder="Mesaj" className="contact-form-input" />
                                                <CustomErrorMessage name="mesaj" />
                                            </div>
                                            <CustomBlueBtn button_text="GÖNDƏR" className="contact-form-send-button" type="submit" disabled={!isValid || !dirty} />
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="faq-section home-section">
                <div class="custom-shape-divider-top-1679254135">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                    </svg>
                </div>
                <div className="faq-section-left"><img src={faq_img} alt="" /></div>
                <div className="faq-section-right">
                    <Faq
                        data={data}
                    />
                </div>
                <div class="home-introduction-wave-bottom">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                    </svg>
                </div>
            </div>
        </>
    )
}

export default Contact