import React from 'react'
import Image from 'next/image'
import AutoMobile from '../components/assests/icons/automobile.png'
import HE from '../components/assests/icons/heavy.png'
import Steel from '../components/assests/icons/steel.png'
import Oil from '../components/assests/icons/oil.png'
import Petro from '../components/assests/icons/petro.png'
import Chemical from '../components/assests/icons/chemi.png'
import Construction from '../components/assests/icons/const.png'
import Textile from '../components/assests/icons/textile.png'
import Paper from '../components/assests/icons/paper.png'
import Electrical from '../components/assests/icons//electrical.png'
import Solar from '../components/assests/icons/solar.png'
import FMCG from '../components/assests/icons/fmcg.png'
import Agri from '../components/assests/icons/agri.png'
import Mining from '../components/assests/icons/mining.png'
function Clients() {
    return (
        <>
            <div className='max-md:hidden'>
                <h3 className='text-center justify-center mx-auto my-auto'><span>Industries</span> we serve</h3>
                <div className='justify-center mx-auto my-20'>
                    <div className=' flex flex-row justify-center space-x-6'>
                        <div className=' w-28 h-32'>
                            <Image className=' justify-center mx-auto my-auto' src={AutoMobile} alt="Automobile"></Image>
                            <p className='text-center justify-center mx-auto my-3 text-gray-500 hover:text-gray-800'>Automobile</p>
                        </div>
                        <div className=' w-28 h-32'>
                            <Image className=' justify-center mx-auto my-auto' src={HE} alt="Automobile"></Image>
                            <p className='text-center justify-center mx-auto my-3 text-gray-500 hover:text-gray-800'>Heavy Engineering</p>
                        </div>
                        <div className=' w-28 h-32'>
                            <Image className=' justify-center mx-auto my-auto' src={Steel} alt="Automobile"></Image>
                            <p className='text-center justify-center mx-auto my-3 text-gray-500 hover:text-gray-800'>Iron & Steel</p>
                        </div>
                        <div className=' w-28 h-32'>
                            <Image className=' justify-center mx-auto my-auto' src={Oil} alt="Automobile"></Image>
                            <p className='text-center justify-center mx-auto my-3 text-gray-500 hover:text-gray-800'>Oil & Gas</p>
                        </div>
                        <div className=' w-28 h-32'>
                            <Image className=' justify-center mx-auto my-auto' src={Petro} alt="Automobile"></Image>
                            <p className='text-center justify-center mx-auto my-3 text-gray-500 hover:text-gray-800'>Petrochemical</p>
                        </div>
                        <div className=' w-28 h-32'>
                            <Image className=' justify-center mx-auto my-auto' src={Chemical} alt="Automobile"></Image>
                            <p className='text-center justify-center mx-auto my-3 text-gray-500 hover:text-gray-800'>Chemical</p>
                        </div>
                        <div className=' w-28 h-32'>
                            <Image className=' justify-center mx-auto my-auto' src={Construction} alt="Automobile"></Image>
                            <p className='text-center justify-center mx-auto my-3 text-gray-500 hover:text-gray-800'>Construction</p>
                        </div>
                    </div>
                    <div className=' flex flex-row justify-center space-x-6'>
                        <div className=' w-28 h-32'>
                            <Image className=' justify-center mx-auto my-auto' src={Textile} alt="Automobile"></Image>
                            <p className='text-center justify-center mx-auto my-3 text-gray-500 hover:text-gray-800'>Textile</p>
                        </div>
                        <div className=' w-28 h-32'>
                            <Image className=' justify-center mx-auto my-auto' src={Paper} alt="Automobile"></Image>
                            <p className='text-center justify-center mx-auto my-3 text-gray-500 hover:text-gray-800'>Paper</p>
                        </div>
                        <div className=' w-28 h-32'>
                            <Image className=' justify-center mx-auto my-auto' src={Electrical} alt="Automobile"></Image>
                            <p className='text-center justify-center mx-auto my-3 text-gray-500 hover:text-gray-800'>Consumers Electrical</p>
                        </div>
                        <div className=' w-28 h-32'>
                            <Image className=' justify-center mx-auto my-auto' src={Solar} alt="Automobile"></Image>
                            <p className='text-center justify-center mx-auto my-3 text-gray-500 hover:text-gray-800'>Renewable Energy</p>
                        </div>
                        <div className=' w-28 h-32'>
                            <Image className=' justify-center mx-auto my-auto' src={FMCG} alt="Automobile"></Image>
                            <p className='text-center justify-center mx-auto my-3 text-gray-500 hover:text-gray-800'>FMCG</p>
                        </div>
                        <div className=' w-28 h-32'>
                            <Image className=' justify-center mx-auto my-auto' src={Agri} alt="Automobile"></Image>
                            <p className='text-center justify-center mx-auto my-3 text-gray-500 hover:text-gray-800'>Agri Comodities</p>
                        </div>
                        <div className=' w-28 h-32'>
                            <Image className=' justify-center mx-auto my-auto' src={Mining} alt="Automobile"></Image>
                            <p className='text-center justify-center mx-auto my-3 text-gray-500 hover:text-gray-800'>Mining</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Clients