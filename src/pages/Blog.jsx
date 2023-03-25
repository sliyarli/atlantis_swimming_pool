import React from 'react'

// LOCAL COMPONENTS
import './Blog.css'
import Header from '../components/Header/Header';
import postData from '../blog_post_info.json'
import Home_Blog_Post from "../components/Home/Home_Blog_Post"

// IMAGES 
import blog_header_bg from '../assets/svgs/Header/Blog/blog_header_bg.png'
import blog_author from '../assets/svgs/Blog/blog_author.png'

// ICONS
import { MdOutlineTopic } from "react-icons/md";

const Blog = () => {
    return (
        <>
            <Header
                header_heading={'BLOQ'}
                header_image={blog_header_bg}
                header_route={'Bloq'}
            >
            </Header>
            <div className="blog-container home-section bg-blue-to-purple">
                <div class="home-introduction-wave">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                    </svg>
                </div>
                <div className="blog-container-left">
                    <div className="home-section-content">
                        <h2 className='home-section-main-heading' data-aos='fade-right'>Bloq</h2>
                    </div>
                    <div className="blog-posts">
                        {
                            postData.map(post => (
                                <Home_Blog_Post blog_basliq={post.blog_basliq} blog_sekil={post.blog_sekil} blog_tarix={post.blog_tarix} />
                            ))
                        }
                    </div>
                </div>
                <div className="blog-container-right">
                    <div className="blog-author">
                        <img src={blog_author} alt="" />
                        <h1>Miriyev Soltan</h1>
                        <p>Salam! Bu postların müəllifi mənəm! :)</p>
                    </div>
                    <div className="blog-post-categories">
                        <div className="home-section-content">
                            <h2 className='home-section-main-paragraph' data-aos='fade-left'>Kateqoriyalar</h2>
                            <div className="blog-categories">
                                <a href="#"><MdOutlineTopic /> HOVUZ TƏMİZLİYİ</a>
                                <a href="#"><MdOutlineTopic /> HOVUZ TƏMİRİ</a>
                                <a href="#"><MdOutlineTopic /> KOMMERSİYA TƏMİZLİYİ</a>
                                <a href="#"><MdOutlineTopic /> KORPORATİV TƏMİZLİK</a>
                                <a href="#"><MdOutlineTopic /> ANALİZ</a>
                                <a href="#"><MdOutlineTopic /> BİZNES</a>
                            </div>
                        </div>
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
        </>
    )
}

export default Blog