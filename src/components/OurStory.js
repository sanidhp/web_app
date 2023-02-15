import React from 'react'
import Image from 'next/image'
import '../components/OurStory.css'
import iift from '../components/assests/iift.png'
import xlri from '../components/assests/xlri.png'
import iimu from '../components/assests/iimu.png'
function OurStory() {
    return (
        <div className='container'>
            <div className='contents'>
                <h3><span>Our</span> Story</h3>
                <p className='bio-section'>Neofreight.tech is an <span>IIFT </span>International business 
                (silver medalist) ,<span> XLRI, IIM MBA </span>alumni venture.</p>
                <p className='bio-section'>Founding team has diversified 25+ years of combined 
                work experience in multi-modal logistics & supply chain 
                industry in hardcore operations on both supply and demand
                side , management consulting, supply chain analytics , 
                with fortune 30 , fortune 50 companies, one of the 
                world’s best management consulting firms , top supply chain
                analytics firms. </p>
                <div className='flex flex-row md:mx-4 space-x-8 max-md:my-5'>
                    <Image className='h-16 w-28 max-md:h-6 max-md:w-12 my-5' src={iift} alt="iiftBrands"/>
                    <Image className='h-16 w-28 max-md:h-6 max-md:w-12 my-5' src={xlri} alt="iiftBrands"/>
                    <Image className='h-16 w-28 max-md:h-6 max-md:w-12 my-5' src={iimu} alt="iiftBrands"/>
                </div>
            </div>
        </div>
    )
}

export default OurStory