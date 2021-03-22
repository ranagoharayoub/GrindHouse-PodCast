import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='head-cont'>
            <div className='upper-cont'>
                <img src='/logo-1.png' alt='logo' height='70px' ></img>
                <p>Episode</p>
            </div>
            <div className='mid-cont'>
                <div>
                    <h1 className='title' >
                        Grindhouse 
                    </h1 >
                    <h1 className='sec-title'>
                        Courthouse
                    </h1>
                    <h3 className='subtitle'>Another movie discussion podcast…</h3>
                </div>
                <div>
                    <img className='logo' src='/logo-1.png' alt='logo' height='400px'></img>
                </div>
            </div>
            <svg className='first-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#C1272D" fillOpacity="1" d="M0,160L48,160C96,160,192,160,288,170.7C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,154.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                  
            <svg className='second-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity="1" d="M0,160L48,160C96,160,192,160,288,170.7C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,154.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                  
        </div>
    )
}

export default Header
