"use client";

import { FaInstagram, FaTwitter, FaVimeoV, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";


export default function ThankYouSection() {
  return (
    <section className="bg-[#1c1c1c] text-white relative px-8 md:px-16 lg:px-28 xl:px-32 2xl:px-[156px] py-16 lg:py-24">
      {/* Video Section */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[428px] w-full overflow-hidden">
        <motion.video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/pexels.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>

        {/* Black/White overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Thank You and Contact Section */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-12 border-2 border-white mt-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Thank You Text */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-5xl sm:text-6xl font-bold text-left">
              Thank you
            </h1>
          </div>

          {/* Contact Information */}
          <div className="text-left lg:mr-[210px]">
            <h3 className="text-lg sm:text-xl font-semibold">CONTACT</h3>
            <p className="mt-2">Dada Temitope</p>
            <p>oluwadabest@gmail.com</p>

            {/* Social Icons */}
            <div className="flex justify-start  mt-4 space-x-4 ">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl " />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-2xl " />
              </a>
              <a
                href="https://vimeo.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaVimeoV className="text-2xl " />
              </a>
              <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-2xl " />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
