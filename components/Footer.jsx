import React from 'react'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className="footer__content">
            <div className="footer__logo">
                <img src='/logoActual.png' className='logo__act' alt="" />
            </div>
            <div className="footer__links">
                <div className="footer__link">About</div>
                <div className="footer__link">Projects</div>
                <div className="footer__link">Stack</div>
                <div className="footer__link">Contact</div>
            </div>
            <div className="footer__copyright">Copyright © 2026 David Saleh</div>
        </div>
    </div>
  )
}

export default Footer