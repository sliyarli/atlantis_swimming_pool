import React from 'react'

const Testimonials_Slider_Item = ({ testimonial_image, testimonial_name, testimonial_comment }) => {
    return (
        <>
            <div className="service-slider-item testimonial-slider-item">
                <div className="testimonial_info">
                    <img src={testimonial_image} alt="testimonials_image" />
                    <h1>{testimonial_name}</h1>
                </div>
                <h3>{testimonial_comment}</h3>
            </div>
        </>
    )
}

export default Testimonials_Slider_Item