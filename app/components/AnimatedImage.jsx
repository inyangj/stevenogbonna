"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function AnimatedImage({ src, alt, width, height, videoLink }) {
  const controls = useAnimation(); // Controls the animation for the overlay
  const { ref, inView } = useInView({
    threshold: 0.5, // 50% of the image needs to be visible
    triggerOnce: true, // Animation triggers only once
  });

  useEffect(() => {
    if (inView) {
      controls.start({ width: 0 });
    }
  }, [controls, inView]);

  return (
    <div className="relative w-fit h-fit" ref={ref}>
      <a href={videoLink} target="_blank" rel="noopener noreferrer">
        {/* Image remains static */}
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="static-image"
        />
      </a>
      {/* Black overlay slides off */}
      <motion.div
        className="absolute top-0 left-0 h-full bg-black"
        initial={{ width: "100%" }}
        animate={controls}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </div>
  );
}
