import React from 'react';
import Typewriter from 'typewriter-effect';
import { FaFileAlt, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Introduction = () => {
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
      <p className='intro__para'>I am a passionate Frontend Software Engineer dedicated to crafting engaging, high-performance web applications. I focus on creating seamless user experiences by combining clean code, thoughtful design, and modern web technologies.</p>
      <div className="links__top">
        <div className="link__top click">
            <FaLinkedinIn className='link__icon'/>
        </div>
        <div className="link__top click">
            <FaGithub className='link__icon'/>
        </div>
        <div className="link__top click">
            <FaFileAlt className='link__icon'/>
        </div>
      </div>
    </div>
  );
};

export default Introduction;