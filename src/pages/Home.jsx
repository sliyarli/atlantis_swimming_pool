import React, { useRef } from 'react'
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// PARALLAX COMPONENTS
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

// AOS COMPONENTS

// REACT-MOVING-TEXT COMPONENTS
import MovingComponent from 'react-moving-text'

// SWIPER JS COMPONENTS
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

// SWIPER JS STYLES
import "swiper/css";
import "swiper/css/pagination";

// COUNT-UP COMPONENTS
import CountUp from 'react-countup';

// LOCAL COMPONENTS
import "./Home.css";
import Services_Slider_Item from '../components/Home/Services_Slider_Item';
import CustomWhiteBtn from '../components/CustomWhiteBtn';
import CustomBlueBtn from '../components/CustomBlueBtn';
import postData from '../blog_post_info.json'
import Home_Blog_Post from "../components/Home/Home_Blog_Post"
import Testimonials_Slider_Item from '../components/Home/Testimonials_Slider_Item';

// IMAGES
import slider_1 from '../assets/svgs/Header/Home-Header/Slider-Images/slider-photo-1.png'
import slider_2 from '../assets/svgs/Header/Home-Header/Slider-Images/slider-photo-2.png'
import slider_3 from '../assets/svgs/Header/Home-Header/Slider-Images/slider-photo-3.png'
import counter_parallax from '../assets/svgs/Home/counter-section/counter-parallax1.png'
import introduction_section_image from '../assets/svgs/Home/Introduction-section/introduction-section-image.jpg'
import testimonial_profile_photo from '../assets/svgs/Home/testimonials-section/slider-images/profile1.jpg'
import testimonial_profile_photo_2 from '../assets/svgs/Home/testimonials-section/slider-images/profile2.jpg'
import testimonial_profile_photo_4 from '../assets/svgs/Home/testimonials-section/slider-images/profile4.jpg'
import testimonial_profile_photo_5 from '../assets/svgs/Home/testimonials-section/slider-images/profile5.jpg'
import testimonial_profile_photo_6 from '../assets/svgs/Home/testimonials-section/slider-images/profile6.jpg'
import nicat from '../assets/svgs/Home/testimonials-section/slider-images/nicat.png'

// ICONS
import { GoTools } from "react-icons/go";
import { RiTeamLine } from "react-icons/ri";
import { MdOutlineCleaningServices } from "react-icons/md";
import { FaToolbox, FaGraduationCap, FaSwimmingPool } from "react-icons/fa";
import { AiOutlineFilter, AiOutlineTool } from "react-icons/ai";
import { BsCoin } from "react-icons/bs";
import CustomErrorMessage from '../components/CustomErrorMessage';

const HOME = () => {


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
      <header className='home-header'>

        <Swiper
          modules={[Autoplay]}
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slider_1} alt="" />
            <div className='header-slider-content'>
              <MovingComponent className='header-slider-heading'
                type="fadeInFromTop"
                duration="3000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                SİZƏ KÖMƏK ETMƏYƏ HAZIRIQ
              </MovingComponent>
              <MovingComponent className='header-slider-paragraph'
                type="fadeInFromTop"
                duration="3000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                ATLANTİS ŞİRKƏTİ OLARAQ, DÜNYANIN 20-DƏN ÇOX ÖLKƏSİNDƏ XİDMƏT GÖSTƏRİRİK!
              </MovingComponent>
              <MovingComponent className='home-header-slider-button'
                type="fadeInFromBottom"
                duration="3000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                <CustomBlueBtn button_link='/Haqqımızda' button_text='ƏTRAFLI' />
              </MovingComponent>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider_2} alt="" />
            <div className='header-slider-content'>
              <MovingComponent className='header-slider-heading'
                type="fadeInFromTop"
                duration="3000ms"
                delay="6s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                KEYFİYYƏTİMİZ FƏRQİMİZDİR
              </MovingComponent>
              <MovingComponent className='header-slider-paragraph'
                type="fadeInFromTop"
                duration="3000ms"
                delay="6s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                SEÇİLƏN KEYFİYYƏTİMİZİ UZUN İLLƏRİN TƏCRÜBƏSİNƏ BORCLUYUQ!
              </MovingComponent>
              <MovingComponent className='home-header-slider-button'
                type="fadeInFromBottom"
                duration="3000ms"
                delay="6s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                <CustomBlueBtn button_link='/Haqqımızda' button_text='ƏTRAFLI' />
              </MovingComponent>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider_3} alt="" />
            <div className='header-slider-content'>
              <MovingComponent className='header-slider-heading'
                type="fadeInFromTop"
                duration="3000ms"
                delay="12s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                TƏMİZ HOVUZLAR, SƏRFƏLİ QİYMƏTLƏR
              </MovingComponent>
              <MovingComponent className='header-slider-paragraph'
                type="fadeInFromTop"
                duration="3000ms"
                delay="12s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                BİZ SİZƏ KEYFİYYƏTİ ƏLÇATAN QİYMƏTLƏRLƏ TƏKLİF EDİRİK!
              </MovingComponent>
              <MovingComponent className='home-header-slider-button'
                type="fadeInFromBottom"
                duration="3000ms"
                delay="12s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                <CustomBlueBtn button_link='/Haqqımızda' button_text='ƏTRAFLI' />
              </MovingComponent>
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="section-wave-bottom">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
        </div>
      </header>
      <section className="home-introduction home-section" id='home-section' data-aos='fade-up' data-aos-offset='50' data-aos-delay='500'>
        <div class="home-introduction-wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
          </svg>
        </div>
        <div className="home-introduction-left" data-aos="fade-right">
          <div className="home-section-content">
            <h2 className='home-section-main-heading'>ATLANTİS NƏDİR?</h2>
            <h3 className='home-section-secondary-heading'>CİBİNİZİ DÜŞÜNƏN <br /> HOVUZ TƏMİZLƏMƏ XİDMƏTİ</h3>
            <p className='home-section-paragraph'>HOVUZUNUZUN ETİBARLI ƏLLƏRDƏ OLMASI ÜÇÜN <br />  ELƏ İNDİ PULSUZ KONSULTASİYA ALIN!</p>
            <CustomBlueBtn button_link={'/Əlaqə'} button_text='BİZİMLƏ ƏLAQƏ'></CustomBlueBtn>
          </div>
        </div>
        <div className="home-introduction-right" data-aos="fade-left">
          <img src={introduction_section_image} alt="introduction_section_image" className='introduction-section-image' />
        </div>
        <div class="home-introduction-wave-bottom">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
          </svg>
        </div>
      </section>
      <section className="home-contact home-section bg-blue-to-purple">
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
                    <Form autocomplete="off">
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
      <section className="parallax-section">
        <div class="section-wave-top">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
        </div>
        <ParallaxBanner className='parallax-bg-image' style={{ aspectRatio: '2 / 1' }}>
          <ParallaxBannerLayer className='parallax-content-container' image={counter_parallax} speed={-30} >
            <div className="project-counters" >
              <div className="project-info" data-aos="fade-right" data-aos-duration="1000">
                <CountUp className='project-counter'
                  enableScrollSpy={true}
                  end={250}
                  duration={5}
                />
                <h1>UĞURLU İŞ</h1>
              </div>
              <div className="project-info" data-aos="zoom-in" data-aos-duration="1000">
                <CountUp className='project-counter'
                  enableScrollSpy={true}
                  end={153}
                  duration={5}
                />
                <h1>MÜŞTƏRİ</h1>
              </div>
              <div className="project-info" data-aos="fade-left" data-aos-duration="1000">
                <CountUp className='project-counter team-counter'
                  enableScrollSpy={true}
                  end={600}
                  duration={5}
                />
                <h1>İŞÇİ SAYI</h1>
              </div>
            </div>
          </ParallaxBannerLayer>
        </ParallaxBanner>
        <div class="section-wave-bottom">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
        </div>
      </section>
      <section className="services-section home-section">
        <div className="service-section-content home-section-content">
          <h2 className='home-section-main-heading services-section-main-heading' data-aos='fade-right'>XİDMƏTLƏRİMİZ</h2>
          <h3 className='home-section-secondary-heading services-section-secondary-heading' data-aos='fade-left'>ŞİRKƏTİMİZİN XİDMƏTLƏRİLƏ <br /> YAXINDAN TANIŞ OLUN </h3>
        </div>
        <div className="services-section-slider">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            className="mySwiper"
            data-aos='flip-up'
            breakpoints=
            {{
              500: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            <SwiperSlide>
              <Services_Slider_Item
                servis_icon={<MdOutlineCleaningServices />}
                servis_basliq={'Əsas təmizlik xidmətləri'}
                servis_melumat={'Bura hovuzdan zibillərin çıxarılması, divarların və döşəmənin fırçalanması aiddir'} />
            </SwiperSlide>
            <SwiperSlide>
              <Services_Slider_Item
                servis_icon={<FaToolbox />}
                servis_basliq={'Avadanlıqlara qulluq'}
                servis_melumat={'hovuz avadanlıqlarının yoxlanışı və onlara texniki qulluğun göstərilməsi aiddir'} />
            </SwiperSlide>
            <SwiperSlide>
              <Services_Slider_Item
                servis_icon={<AiOutlineFilter />}
                servis_basliq={'Filtr təmizliyi'}
                servis_melumat={'Bura filtrin düzgün işləməsi üçün onun təmizlənməsi və ya dəyişilməsi aiddir'} />
            </SwiperSlide>
            <SwiperSlide>
              <Services_Slider_Item
                servis_icon={<AiOutlineTool />}
                servis_basliq={'Təmir xidmətləri'}
                servis_melumat={'Bura hovuzun kafelinin dəyişdirilməsi, səthinin yenilənməsi və digər təmir xidmətləri aiddir.'} />
            </SwiperSlide>
            <SwiperSlide>
              <Services_Slider_Item
                servis_icon={<FaGraduationCap />}
                servis_basliq={'Hovuz təhsili və təlimi'}
                servis_melumat={'Bura hovuz sahiblərinə hovuzlarına düzgün qulluq etməyi öyrədən təlim xidmətləri aiddir'} />
            </SwiperSlide>
            <SwiperSlide>
              <Services_Slider_Item
                servis_icon={<FaSwimmingPool />}
                servis_basliq={'Hovuz suyunun testi'}
                servis_melumat={'Bura hovuz suyunun keyfiyyətinə təsir edə biləcək amillərin yoxlanılması aiddir'} />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="home-section blog-section">
        <div className="home-section-content">
          <h2 className='home-section-main-heading blog-section-main-heading' data-aos='fade-right'>Bloq</h2>
          <h3 className='home-section-secondary-heading blog-section-secondary-heading' data-aos='fade-left'>Ən yeni postlar</h3>
        </div>
        <div className="home-blog-posts-container" data-aos='zoom-in'>
          {
            postData.map(post => (
              <Home_Blog_Post blog_basliq={post.blog_basliq} blog_tarix={post.blog_tarix} blog_sekil={post.blog_sekil} blog_unvan={post.blog_unvan} />
            ))
          }
        </div>
        <div class="home-introduction-wave-bottom">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
          </svg>
        </div>
      </section>
      <section className="home-section testimonials-section">
        <div class="testimonials-section-wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
          </svg>
        </div>
        <div className="home-section-content testimonials-section-content">
          <h2 className='home-section-main-heading blog-section-main-heading' data-aos='fade-right'>Müştərilər</h2>
          <h3 className='home-section-secondary-heading blog-section-secondary-heading' data-aos='fade-left'>Dəyərli müştərilərimizin rəyləri</h3>
        </div>
        <div className="services-section-slider">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            className="mySwiper"
            data-aos='fade'
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints=
            {{
              500: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <Testimonials_Slider_Item
                testimonial_image={testimonial_profile_photo}
                testimonial_name={"Əkbər Novruzov"}
                testimonial_comment={"Mən bu xidməti sevirəm! Hovuzuma qulluq etmək üçün heyrətamiz bir iş görürlər və həmişə məni mehriban təbəssümlə qarşılayırlar."}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonials_Slider_Item
                testimonial_image={testimonial_profile_photo_2}
                testimonial_name={"Əliyeva Samirə"}
                testimonial_comment={"Bu hovuz xidmətini tapdığım üçün çox şadam! Onların komandası inanılmaz dərəcədə peşəkardır və müstəsna xidmət göstərir."}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonials_Slider_Item
                testimonial_image={nicat}
                testimonial_name={"Hüseynzadə Nicat"}
                testimonial_comment={"Mənim hovuzum heç vaxt daha yaxşı görünməmişdi və onun etibarlı əllərdə olduğunu bildiyim üçün rahatlığı yüksək qiymətləndirirəm."}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonials_Slider_Item
                testimonial_image={testimonial_profile_photo_4}
                testimonial_name={"Səfiyev Şəmistan"}
                testimonial_comment={"Mən artıq bir müddətdir ki, bu hovuz xidmətindən istifadə edirəm və deməliyəm ki, onlar biznesin ən yaxşısıdır!"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonials_Slider_Item
                testimonial_image={testimonial_profile_photo_5}
                testimonial_name={"Əsgərova Leyla"}
                testimonial_comment={"Tamamilə fantastik hovuz xidməti! Peşəkarlığı və detallara diqqəti ilə gözləntilərimi üstələyiblər."}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonials_Slider_Item
                testimonial_image={testimonial_profile_photo_6}
                testimonial_name={"Ağasoltanov Daşdəmir"}
                testimonial_comment={"Mən bu xidməti sevirəm! Hovuzuma qulluq etmək üçün heyrətamiz bir iş görürlər və həmişə məni mehriban təbəssümlə qarşılayırlar."}
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div class="footer-section-wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
          </svg>
        </div>
      </section>

    </>
  )
}

export default HOME