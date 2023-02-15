import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import img1 from "../components/assests/SavePlanet.png";
import Aos from "aos";
import "aos/dist/aos.css"
const SavePlanet = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000"
        className="relative">
        <Image alt="bgImage" src={img1} className="absolute -z-10 h-full w-screen" />
        <div className="z-10 text-center items-center">
          <h1 className="text-white text-9xl max-md:text-5xl font-black py-40 max-md:py-20 max-md:ml-4" width={600}>Sustainable Freight<br />
            to save our Planet</h1>
          <div className="flex justify-around py-10">
            <p className="text-white text-3xl max-md:text-base font-bold w-64 max-md:w-24">Reducing emissions</p>
            <p className="text-white text-3xl max-md:text-base font-bold w-36 max-md:w-24">Paperless freight</p>
            <p className="text-white text-3xl max-md:text-base font-bold w-64 max-md:w-24">Carbon footprint offsetting</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SavePlanet;