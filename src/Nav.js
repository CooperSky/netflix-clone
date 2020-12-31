import React, { useState, useEffect } from 'react'
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState()

    useEffect(() => {
        window.addEventListener('scroll', ()=> {
            if(window.scrollY> 100 ){
                handleShow(true)
            } 
            else handleShow(false)
        })
        return () => {
            window.removeEventListener('scroll')
        }
    }, [])
    return (
        <div className={`nav ${show && 'nav-black'}`}>
            <img  
                className='nav-logo'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/340px-Netflix_2015_logo.svg.png'
                alt='netflix logo'
            />
            <img  
                className='nav-avatar'
                src='https://www.pngkit.com/png/detail/281-2812821_user-account-management-logo-user-icon-png.png'
                alt='netflix logo'
            />
            
        </div>
    )
}

export default Nav