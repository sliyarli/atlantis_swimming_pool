import React from 'react'
import CustomBlueBtn from '../CustomBlueBtn'

const Services_Slider_Item = ({ servis_icon, servis_basliq, servis_melumat }) => {
    return (
        <>
            <div className="service-slider-item bg-blue-to-purple">
                <div className="service_icon">
                    {servis_icon}
                </div>
                <h1>{servis_basliq}</h1>
                <h3>{servis_melumat}</h3>
                <CustomBlueBtn button_text={'DAHA ÇOX ↗'} button_link={'/Xidmətlər'} />
            </div>
        </>
    )
}

export default Services_Slider_Item