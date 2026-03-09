import React from 'react'

const Header = ({setModal}) => {
  return (
    <>
    <div className='header'>
        <div className="logo glass">
          <img src='/logoActual.png' className='logo__act' alt="" />
        </div>
        <div className="right__section">
            <h1 className='click' onClick={() => setModal(true)}>About</h1>
            <h1 className='click' onClick={() => setModal(true)}>Stack</h1>
            <h1 className='click'>Projects</h1>
            <h1 className='click' onClick={() => setModal(true)}>Contact</h1>
        </div>
    </div>
    </>
  )
}

export default Header