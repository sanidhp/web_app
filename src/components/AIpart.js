import React from 'react'
import Image from 'next/image'
import NeoTrucking from '../components/assests/NeoTrucking.png'
import NeoShipping from '../components/assests/NeoShipping.png'
import NeoAero from '../components/assests/NeoAero.png'
import '../components/AIpart.css'
function AIpart() {
    return (
        <>
            <div className='container-ai'>
                <video autoPlay loop muted playsInline className='background-video'>
                    <source src='/aivideo.mp4' type='video/mp4' />
                </video>
                <div className='ai-content'>
                    <h2 className='text-section'>Moving multi-
                        model freight
                        powered by <span>AI & Blockchain</span>
                    </h2>
                    <div className='logo-section'>
                        <Image src={NeoTrucking} alt='NeoTrucking' />
                        <Image src={NeoShipping} alt='NeoShipping' />
                        <Image src={NeoAero} alt='NeoAero' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AIpart