import React from 'react'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import China from '../components/assests/flags/china.png'
import bd from '../components/assests/flags/bangladesh.png'
import Germany from '../components/assests/flags/germany.png'
import France from '../components/assests/flags/france.png'
import HongKong from '../components/assests/flags/hongkong.png'
import Indonesia from '../components/assests/flags/indonesia.png'
import Korea from '../components/assests/flags/korea.png'
import Malyasia from '../components/assests/flags/malyasia.png'
import Singapore from '../components/assests/flags/singapore.png'
import Taiwan from '../components/assests/flags/taiwan.png'
import Thailand from '../components/assests/flags/thailand.png'
import Vietnam from '../components/assests/flags/vietnam.png'
import Argentina from '../components/assests/flags/argentina.png'
import Austria from '../components/assests/flags/austria.png'
import Brazil from '../components/assests/flags/brazil.png'
import Canada from '../components/assests/flags/canada.png'
import England from '../components/assests/flags/england.png'
import Italy from '../components/assests/flags/italy.png'
import Netherland from '../components/assests/flags/netherland.png'
import Qatar from '../components/assests/flags/qatar.png'
import SouthAfrica from '../components/assests/flags/southAfrica.png'
import Turkey from '../components/assests/flags/turkey.png'
import UAE from '../components/assests/flags/uae.png'
import USA from '../components/assests/flags/usa.png'
import Guatemala from '../components/assests/flags/guatemala.png'
import Venejuela from '../components/assests/flags/venejuela.png'
import Uruguye from '../components/assests/flags/uruguye.png'
import Belgium from '../components/assests/flags/belgium.png'
import Russia from '../components/assests/flags/russia.png'
import Djibouti from '../components/assests/flags/djibouti.png'
import Tanzania from '../components/assests/flags/tanzania.png'
import Peru from '../components/assests/flags/peru.png'
import Sweden from '../components/assests/flags/sweden.png'

function FlagSection() {
    return (
        <div className='my-10'>
            <h3 className='my-10 text-center w-auto max-md:text-base'><span>Overseas network</span> across 42 countries & 5 
            continents for Door to Door freight</h3>
            <Marquee>
                <Image className='mx-5' src={China} alt='China' />
                <Image className='mx-5' src={bd} alt='Bangladesh' />
                <Image className='mx-5' src={France} alt='France' />
                <Image className='mx-5' src={Germany} alt='Germany' />
                <Image className='mx-5' src={HongKong} alt='HongKong' />
                <Image className='mx-5' src={Indonesia} alt='Indonesia' />
                <Image className='mx-5' src={Korea} alt='Korea' />
                <Image className='mx-5' src={Malyasia} alt='Malyasia' />
                <Image className='mx-5' src={Singapore} alt='Singapore' />
                <Image className='mx-5' src={Taiwan} alt='Taiwan' />
                <Image className='mx-5' src={Thailand} alt='Thailand' />
                <Image className='mx-5' src={Argentina} alt='Argentina' />
                <Image className='mx-5' src={Austria} alt='Austria' />
                <Image className='mx-5' src={Brazil} alt='Brazil' />
                <Image className='mx-5' src={Canada} alt='Canada' />
                <Image className='mx-5' src={England} alt='England' />
                <Image className='mx-5' src={Italy} alt='Italy' />
                <Image className='mx-5' src={Netherland} alt='Netherland' />
                <Image className='mx-5' src={Qatar} alt='Qatar' />
                <Image className='mx-5' src={SouthAfrica} alt='South Africa' />
                <Image className='mx-5' src={Turkey} alt='Turkey' />
                <Image className='mx-5' src={UAE} alt='UAE' />
                <Image className='mx-5' src={USA} alt='USA' />
                <Image className='mx-5' src={Vietnam} alt='Vietnam' />
                <Image className='mx-5' src={Guatemala} alt='Guatemala' />
                <Image className='mx-5' src={Venejuela} alt='Venejuela' />
                <Image className='mx-5' src={Uruguye} alt='Uruguye' />
                <Image className='mx-5' src={Belgium} alt='Belgium' />
                <Image className='mx-5' src={Russia} alt='Russia' />
                <Image className='mx-5' src={Djibouti} alt='Djibouti' />
                <Image className='mx-5' src={Tanzania} alt='Tanzania' />
                <Image className='mx-5' src={Peru} alt='Peru' />
                <Image className='mx-5' src={Sweden} alt='Sweden' />
            </Marquee>
        </div>
    )
}

export default FlagSection