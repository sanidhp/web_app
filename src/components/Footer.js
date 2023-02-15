import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Andriod from '../components/assests/andriod.png'
import IOS from '../components/assests/apple.png'
import Aos from 'aos';
import { useEffect } from 'react';
import "aos/dist/aos.css"
import NeoLogo from '../components/assests/NeoFreightLogo.png';
function Footer() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className=" bg-gray-800 mt-10">
        <div className="max-w-6xl mx-auto text-white py-10">
          <div className="text-center">
            <Image className="align-middle content-center mx-auto my-auto h-10 w-80 max-md:w-40 max-md:h-auto" src={NeoLogo} alt='NeoFreight.tech' />
            <p className="w-96 max-md:w-32 text-center mx-auto my-auto mt-4 ">West Zone : Nhava Sheva - Mumbai | Mundra
              <br />East Zone : Kolkata | Haldia | Visakhapatnam
              <br />North Zone : ICD TKD  Delhi
              <br />South Zone : Chennai | Ennore | Bangalore
            </p>
            <h3 className="text-2xl font-medium text-white mx-auto text-center mt-2">hello@neofreight.tech</h3>
            <div>
              <div className="flex justify-center items-center flex-wrap space-x-1 my-5">
                <button className="inline-block mr-0 px-2 py-2 mb-2 text-white bg-slate-500 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 26 26"
                  >
                    <g clipPath="url(#clip0_211_1335)">
                      <path
                        fill="#fff"
                        d="M25.363 13.317c0-6.903-5.598-12.5-12.501-12.5C5.958.817.36 6.414.36 13.317c0 6.24 4.572 11.41 10.548 12.348V16.93H7.734v-3.614h3.174v-2.752c0-3.133 1.867-4.864 4.723-4.864 1.366 0 2.798.245 2.798.245v3.076h-1.577c-1.554 0-2.038.964-2.038 1.952v2.344h3.467l-.554 3.614h-2.913v8.735c5.978-.939 10.549-6.11 10.549-12.35z"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_211_1335">
                        <path
                          fill="#fff"
                          d="M0 0H25.003V25H0z"
                          transform="translate(.36 .741)"
                        ></path>
                      </clipPath>
                    </defs>
                  </svg>
                </button>

                <button className="inline-block px-2 py-2 mb-2 text-white bg-slate-500 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">
                  <Link href="https://www.linkedin.com/company/neofreight/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      viewBox="0 0 22 25"
                    >
                      <g clipPath="url(#clip0_337_429)">
                        <path
                          fill="#fff"
                          d="M4.896 21.875H.361V7.271h4.535v14.604zM2.626 5.278C1.176 5.278 0 4.078 0 2.627a2.626 2.626 0 015.253 0c0 1.45-1.177 2.651-2.627 2.651zM21.87 21.875h-4.525v-7.11c0-1.694-.034-3.867-2.358-3.867-2.358 0-2.72 1.841-2.72 3.746v7.231h-4.53V7.271h4.35v1.992h.063c.606-1.148 2.085-2.359 4.291-2.359 4.59 0 5.434 3.023 5.434 6.948v8.023h-.005z"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_337_429">
                          <path fill="#fff" d="M0 0H21.875V25H0z"></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </button>
                <button className="inline-block px-2 py-2 mb-2 text-white bg-slate-500 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 26 27"
                  >
                    <g clipPath="url(#clip0_211_1343)">
                      <path
                        fill="#fff"
                        d="M25.876 5.634c-.962.424-1.981.704-3.025.83a5.309 5.309 0 002.316-2.915 10.883 10.883 0 01-3.348 1.267 5.268 5.268 0 00-8.978 4.8c-4.38-.207-8.26-2.311-10.858-5.49a5.163 5.163 0 00-.713 2.65c0 1.832.931 3.441 2.343 4.386a5.251 5.251 0 01-2.386-.66v.065a5.271 5.271 0 004.225 5.168 5.349 5.349 0 01-2.368.091 5.285 5.285 0 004.93 3.66 10.567 10.567 0 01-6.535 2.253c-.417 0-.834-.025-1.252-.072a14.987 14.987 0 008.092 2.365c9.694 0 14.99-8.026 14.99-14.974 0-.224 0-.45-.017-.674a10.64 10.64 0 002.635-2.728l-.05-.022z"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_211_1343">
                        <path
                          fill="#fff"
                          d="M0 0H25.7V25.697H0z"
                          transform="translate(.227 .741)"
                        ></path>
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <button className="inline-block px-2 py-2 mb-2 text-white bg-slate-500 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 34 27"
                  >
                    <path
                      fill="#fff"
                      d="M31.549 6.97c-.35-1.188-1.38-2.123-2.686-2.44-2.37-.576-11.869-.576-11.869-.576s-9.5 0-11.869.576C3.818 4.847 2.79 5.782 2.44 6.97c-.634 2.15-.634 6.64-.634 6.64s0 4.489.634 6.64c.35 1.187 1.38 2.083 2.686 2.4 2.37.577 11.869.577 11.869.577s9.5 0 11.869-.577c1.307-.317 2.336-1.213 2.686-2.4.634-2.151.634-6.64.634-6.64s0-4.49-.634-6.64zM13.887 17.684V9.534l7.94 4.076-7.94 4.075z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex justify-center my-10">
              <div className="flex items-center border w-auto rounded-lg px-4 py-2 mx-2">
                <Image
                  width={100}
                  height={100}
                  src={Andriod}
                  alt='Andriod'
                  className="w-7 md:w-8"
                />
                <div className="text-left ml-3">
                  <p className="text-xs text-gray-200">Download on </p>
                  <p className="text-sm md:text-base"> Google Play Store </p>
                </div>
              </div>
              <div className="flex items-center border w-auto rounded-lg px-4 py-2 mx-2">
                <Image
                  width={100}
                  height={100}
                  src={IOS}
                  alt='Ios'
                  className="w-7 md:w-8"
                />
                <div className="text-left ml-3">
                  <p className="text-xs text-gray-200">Download on </p>
                  <p className="text-sm md:text-base"> Apple Store </p>
                </div>
              </div>
            </div>
          </div>
          <hr className='mb-4'></hr>
          <div className="flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p className="order-2 md:order-1 mt-8 md:mt-0">
              {" "}
              © Copyright 2023- by NeoFreight{" "}
            </p>
            <div className="order-1 md:order-2">
              <span className="px-2 text-white">Terms of use</span>
              <span className="px-2 border-l text-white">Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Footer