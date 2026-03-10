import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const Picture = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true      
        })
      }, [])
  return (
    <div className='picture__frame frame-1' data-aos="flip-right">
        <figure className="picture__wrapper">
        <img src="/profile.png" alt="" />
        </figure>
    </div>
  )
}

export default Picture