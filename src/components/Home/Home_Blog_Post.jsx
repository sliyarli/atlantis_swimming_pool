import React from 'react'
import { Link } from "react-router-dom";
import CustomBlueBtn from '../CustomBlueBtn';
import { BiTimeFive, BiCommentDetail } from "react-icons/bi";

const Home_Blog_Post = ({ blog_sekil, blog_basliq, blog_tarix }) => {
    return (
        <>
            <div className="home-blog-post">
                <Link to={'/Bloq'}>
                    <img src={blog_sekil} alt="post_image" className='home-blog-post-image' />
                    <div className="home-blog-post-content">
                        <div className="home-blog-post-meta">
                            <p className='home-blog-post-date'><BiTimeFive /> <span>{blog_tarix}</span></p>
                            <p className='home-blog-post-comments'><BiCommentDetail /> <span>5</span> </p>
                        </div>
                        <h2>{blog_basliq}</h2>
                        <CustomBlueBtn button_text={'ƏTRAFLI'} button_link={'/Bloq'}></CustomBlueBtn>
                    </div>
                </Link>

            </div>
        </>
    )
}

export default Home_Blog_Post