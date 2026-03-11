import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";

const Project = () => {
  return (
        <div className="project__list">
          <div className="project">
            <div className="project__wrapper">
              <img src="/skin.png" className="project__img" alt="" />
              <div className="project__wrapper--bg"></div>
              <div className="project__description">
                <h3 className="project__description--title">
                  Skinstric AI
                </h3>
                <h4 className="project__description--sub-title">
                  Next.js, TypeScript, Tailwind CSS, Redux
                </h4>
                <p className="project__description--para">
                  Skintristic AI is an AI-powered platform that analyzes facial images to deliver personalized skincare insights. Built with Next.js, TypeScript, Tailwind CSS, and Redux, it features a responsive interface where users can upload photos and receive AI-generated skin analysis through API integration.
                </p>
                <div className="project__description--links">
                  <a href="https://github.com/davidsaleh03/skintristicai-david" className="project__description--link click" target="_blank">
                    <FaGithub />
                  </a>
                  <a href="https://skintristicai-david.vercel.app/" className="project__description--link click" target="_blank">
                    <FaLink />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project__wrapper">
              <img src="/summarist.png" className="project__img" alt="" />
              <div className="project__wrapper--bg"></div>
              <div className="project__description">
                <h3 className="project__description--title">
                  Summarist
                </h3>
                <h4 className="project__description--sub-title">
                  Next.js, TypeScript, CSS, Redux, Firebase/Firestore, Stripe
                </h4>
                <p className="project__description--para">
                  Summarist is a modern web platform for discovering and tracking reading and audiobook progress. Built with Next.js, TypeScript, Redux, Firebase/Firestore, and Stripe, it offers secure authentication, a personalized library, subscription-based content access, and a responsive interface with smooth animations.
                </p>
                <div className="project__description--links">
                  <a href="https://github.com/davidsaleh03/advanced-internship" className="project__description--link click" target="_blank">
                    <FaGithub />
                  </a>
                  <a href="https://advanced-internship-rose.vercel.app/" className="project__description--link click" target="_blank">
                    <FaLink />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project__wrapper">
              <img src="/nft.png" className="project__img" alt="" />
              <div className="project__wrapper--bg"></div>
              <div className="project__description">
                <h3 className="project__description--title">
                  NFT Marketplace
                </h3>
                <h4 className="project__description--sub-title">
                  HTML, CSS, JavaScript, React
                </h4>
                <p className="project__description--para">
                 NFT Market is a modern web-based NFT marketplace built with React that showcases digital collectibles through a dynamic interface. It uses API integration to display live marketplace data with reusable components, responsive design, smooth animations, and real-time countdown timers for NFT listings.
                </p>
                <div className="project__description--links">
                  <a href="https://github.com/davidsaleh03/david-internship" className="project__description--link click" target="_blank">
                    <FaGithub />
                  </a>
                  <a href="https://david-internship-m553.vercel.app/" className="project__description--link click" target="_blank">
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
