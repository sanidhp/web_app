import React from 'react'
import '../components/Hero.css'
import Image from 'next/image';
import NeoLogo from '../components/assests/NeoFreightLogo.png';
import Link from 'next/link';
function Hero() {
    return (
        <>
            <div className='hero'>
                <video autoPlay loop muted playsInline className='black-video'>
                    <source src='/HeroBg.mp4' type='video/mp4' />
                </video>
                <nav>
                    <Link href="/"><Image src={NeoLogo} className='logo' alt="NeoFreight" /></Link>
                    <ul id='menulist'>
                        <li><a href='/careers'>Careers</a></li>
                        <li><a href='/contactus'>Contact Us</a></li>
                    </ul>
                </nav>
                <div className='content'>
                    <h1>Digital Multi-Modal<br />
                        Logistics Solutions</h1>
                    <div className='btn-grp'>
                        <button>Sign Up</button>
                        <a href='/login'>LogIn</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero