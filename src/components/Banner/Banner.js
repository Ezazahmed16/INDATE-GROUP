import React from 'react'
import bannerImg from '../../assets/Header-Image.jpg'

const Banner = () => {
  return (
    <div>
        <div className="">
            <img className='image-full w-screen sm:h-56 md:h-min' src={bannerImg} alt="" />
        </div>
    </div>
  )
}

export default Banner