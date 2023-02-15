import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import img1 from "../components/assests/SavingImg.png";
import Aos from "aos";
import "aos/dist/aos.css"
const SavingSection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div data-aos="fade-up"
        data-aos-duration="600" className=" flex max-md:flex-col my-40 max-md:my-5 max-md:mb-2 mx-44 max-md:mx-auto justify-around">
        <Image src={img1} alt='Saving Image' width={750} className="h-80 max-md:h-auto max-md:w-auto rounded-3xl"/>
        <h1 className="text-left text-gray-800 font-bold text-7xl max-md:text-2xl max-md:my-10 ml-16 max-md:text-center max-md:mx-auto max-md:justify-center max-md:w-64">More savings
          on freight cost
          for cargo
          owners</h1>
      </div>
    </>
  );
};
export default SavingSection
