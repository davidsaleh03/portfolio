import React from 'react';
import Typewriter from 'typewriter-effect';
import { useEffect } from 'react'
import { FaFileAlt, FaLinkedinIn, FaGithub } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Introduction = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true      
        })
      }, [])
  return (
    <div className='left'>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString('<h1 class="intro__title">Hello, I am David!</h1>')
            .start();
        }}
        options={{
          cursor: "|",
          delay: 50,
        }}
      />
      <div className='picture__frame frame-2'>
        <figure className="picture__wrapper">
        <img src="/facebook.jpg" alt="" />
        </figure>
    </div>
      <p className='intro__para' data-aos="flip-left">I am a passionate Frontend Software Engineer dedicated to crafting engaging, high-performance web applications. I focus on creating seamless user experiences by combining clean code, thoughtful design, and modern web technologies.</p>
      <div className="links__top">
        <a href='https://www.linkedin.com/in/david-saleh-0bb1b23b6/' target="_blank" className="link__top click" data-aos="fade-down">
            <FaLinkedinIn className='link__icon'/>
        </a>
        <a href='https://github.com/davidsaleh03' target="_blank" className="link__top click" data-aos="fade-down"> 
            <FaGithub className='link__icon'/>
        </a>
        <a href='/DavidSalehResume.pdf' className="link__top click" target="_blank" data-aos="fade-down">
            <FaFileAlt className='link__icon'/>
        </a>
      </div>
    </div>
  );
};

export default Introduction;