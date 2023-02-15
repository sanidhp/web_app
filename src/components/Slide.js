import React from 'react'
import { useState, useEffect } from 'react'
import ImageSlide from './data'
function Slide() {
    const [currentState, setCurrentState] = useState(0)
    useEffect(() => {
        const timer = setTimeout(() => {
            do {
                setCurrentState(currentState + 1)
                if (currentState === 2) {
                    setCurrentState(currentState - 2)
                }
            }
            while (currentState >= ImageSlide.length)
        }, 3000)
        return () => clearTimeout(timer)
    }, [currentState])

    const bgImageStyle = {
        backgroundImage: `url(${ImageSlide[currentState].url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100vh',
        with: '100%'
    }
    const textStyle = {
        marginLeft: '10%',
        paddingTop: '10%'
    }
    const btnSpacing = {
        marginTop: '5%',
        marginBottom: '10%'
        
    }
    return (
        <div className='container-style'>
            <div style={bgImageStyle}>
                <div className='transparent-bg'></div>
                <div data-aos="fade-down"
                    data-aos-duration="1500"
                    className='description'
                    style={textStyle}>
                    <h2>{ImageSlide[currentState].tittle}</h2>
                    <button style={btnSpacing}>Explore Now</button>
                </div>
            </div>
        </div>
    )
}

export default Slide