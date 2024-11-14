import Image from "next/image";
import { banner, about, drizzy, profile, folio1 } from "@/public/images";

import { FaArrowDown } from "react-icons/fa";
import DirectorsReel from "./components/DirectorReel";
import BioSection from "./components/BioSection";
import BodyOfWork from "./components/Work";
import PressSection from "./components/PressSection";
import ThankYouSection from "./components/Footer";


export default function Home() {

  return (
    <div className="relative w-full h-screen">
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover "
          src="/videos/reel.webm"
          autoPlay
          loop
          muted
        ></video>

        {/* Overlay Text Content */}
        <div className="absolute lg:top-20 md:right-32 border-b-0 md:border-2 w-[350px] md:w-[600px] h-[659px] border-white p-8 text-black lg:text-white">
          <div className="text-left relative ">
            <p className="uppercase  tracking-widest mb-4 peep absolute top-[20px] lg:top-0 lg:relative md:right-0">
              Commercial + Documentary
            </p>
            <h1 className="text-5xl peep lg:text-7xl absolute top-[220px] md:right-0 lg:top-0 lg:relative font-bold mb-2 leading-none">
              Steven Ogbonna
            </h1>
            <h2 className="text-3xl lg:text-6xl font-light absolute top-[269px] lg:top-0 lg:relative  right-0 text-right lg:text-left mb-4">
              
            </h2>
          </div>
          <div className="flex justify-between peep items-center absolute bottom-16 md:w-[550px] w-[310px]">
            <a
              href="#portfolio"
              className="text-lg lg:text-2xl font-semibold uppercase tracking-wider"
            >
              Portfolio
            </a>

            <FaArrowDown className="text-3xl xl:text-5xl text-white animate-bounce relative right-6 " />
          </div>
        </div>
      </div>
      {/* <DirectorsReel /> */}
      <BioSection />
      <BodyOfWork />
      <PressSection />
      <ThankYouSection />
    </div>
  );
}
