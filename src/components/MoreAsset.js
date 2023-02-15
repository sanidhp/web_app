import React, { useEffect } from "react";
import Image from "next/image";
import img1 from "../components/assests/MoreAsset.png";
import Aos from "aos";
import "aos/dist/aos.css"
const MoreAsset = () => {
  useEffect(()=>{
    Aos.init({ duration: 2000 });
  },[]);
  return (
    <>
      <div data-aos="fade-up"
        data-aos-duration="600"
        className="flex max-md:flex-col my-40 max-md:my-5 mx-44 max-md:mx-auto justify-around">
        <h1 className="text-left text-gray-800 font-bold text-7xl max-md:text-center max-md:content-center max-md:text-2xl max-md:my-10 mr-16 max-md:mx-auto max-md:justify-center max-md:w-64">More asset
          turnover for
          asset owners</h1>
        <Image src={img1} alt="More Asset" className="h-80 max-md:h-auto max-md:w-auto rounded-3xl"/>
      </div>
    </>
  );
};

export default MoreAsset;