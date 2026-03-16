import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";

const Project = () => {
  return (
        <div className="project__list">
          <div className="project">
            <div className="project__wrapper">
              <img src="/weatherapp.png" className="project__img" alt="" />
              <div className="project__wrapper--bg"></div>
              <div className="project__description">
                <h3 className="project__description--title">
                  InstaWeather Project
                </h3>
                <h4 className="project__description--sub-title">
                  HTML, CSS, JavaScript, React
                </h4>
                <p className="project__description--para">
                  InstaWeather is a modern weather application designed to provide accurate, real-time weather data for any city in the world. The app offers users a comprehensive view of current weather conditions, detailed forecasts, and astronomical data in a clean, intuitive interface.
                </p>
                <div className="project__description--links">
                  <a href="https://github.com/davidsaleh03/weather-project" className="project__description--link click" target="_blank">
                    <FaGithub />
                  </a>
                  <a href="https://weather-project-zeta-smoky.vercel.app/" className="project__description--link click" target="_blank">
                    <FaLink />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project__wrapper">
              <img src="/instagram.png" className="project__img" alt="" />
              <div className="project__wrapper--bg"></div>
              <div className="project__description">
                <h3 className="project__description--title">
                  Instagram Clone Project
                </h3>
                <h4 className="project__description--sub-title">
                  HTML, CSS, JavaScript, React, Firebase
                </h4>
                <p className="project__description--para">
                  This project is a fully functional Instagram-inspired social media platform that replicates many of the core features of the original application. The goal of the project was to design and build a scalable, user-focused platform that allows users to create accounts, interact with content, and explore posts from other users in a familiar social media experience.
                </p>
                <div className="project__description--links">
                  <a href="https://github.com/davidsaleh03/new-instagram-clone" className="project__description--link click" target="_blank">
                    <FaGithub />
                  </a>
                  <a href="https://new-instagram-clone-lnne.vercel.app/" className="project__description--link click" target="_blank">
                    <FaLink />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project__wrapper">
              <img src="/amazon.png" className="project__img" alt="" />
              <div className="project__wrapper--bg"></div>
              <div className="project__description">
                <h3 className="project__description--title">
                  Amazon Clone Project
                </h3>
                <h4 className="project__description--sub-title">
                  HTML, CSS, JavaScript, React
                </h4>
                <p className="project__description--para">
                  This project is a fully functional Amazon-inspired e-commerce web application that replicates several of the core features of a modern online shopping platform. The goal of the project was to build a scalable, user-friendly marketplace where users can browse products, manage their shopping cart, and simulate the online purchasing experience.
                </p>
                <div className="project__description--links">
                  <a href="https://github.com/davidsaleh03/amazon-clone" className="project__description--link click" target="_blank">
                    <FaGithub />
                  </a>
                  <a href="https://amazon-clone-k22e.vercel.app/" className="project__description--link click" target="_blank">
                    <FaLink />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project__wrapper">
              <img src="/netflix.png" className="project__img" alt="" />
              <div className="project__wrapper--bg"></div>
              <div className="project__description">
                <h3 className="project__description--title">
                  Netflix Clone Project
                </h3>
                <h4 className="project__description--sub-title">
                  HTML, CSS, JavaScript, React, Firebase
                </h4>
                <p className="project__description--para">
                  This project is a Netflix-inspired streaming platform clone designed to replicate the core user experience of a modern video streaming service. The application allows users to browse movies and shows, explore categorized content, and view detailed media information within a sleek, entertainment-focused interface.
                </p>
                <div className="project__description--links">
                  <a href="https://github.com/davidsaleh03/netflix-clone-2" className="project__description--link click" target="_blank">
                    <FaGithub />
                  </a>
                  <a href="https://netflix-clone-2-gamma.vercel.app/" className="project__description--link click" target="_blank">
                    <FaLink />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
};

export default Project;
