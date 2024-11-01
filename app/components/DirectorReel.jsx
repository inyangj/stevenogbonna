
import React from "react";

export default function DirectorsReel() {
  return (
    <section className="w-full relative px-4 sm:px-8 md:px-16 lg:px-28 xl:px-32 py-16 lg:py-24 bg-gray-100 lg:min-h-screen">
      <div className="flex flex-col lg:flex-row  justify-between gap-8 h-full lg:min-h-screen">
        {/* Text Section */}
        <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12 self-end ">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Director&apos;s Reel
          </h1>
          <p className=" mb-6">
            I&apos;m not sure when exactly it started, but I woke up one morning
            to hear most people call me Oluwadabest (or Dabest when they are in
            a hurry); other than my real name, which is Dada Temitope. And I
            love it, so yeah, you can call me either of those. I hate being
            boxed, so I&apos;m open to learning new things from any sphere, but
            I currently earn a living from directing TV Commercials and
            documentaries.
          </p>
          <p className=" mb-6">
            Oh, well, aside from how obsessed I am with Nike Air shoes and any
            Apple product, you&apos;ll find everything else about me in my
            About tab below.
          </p>
          <p className="">
            Wanna talk? I have a comfy couch waiting for you in my email, hehe!
          </p>
        </div>

        {/* Video Section */}
        <div className="lg:w-2/3">
          <div className="relative w-full h-64 lg:h-96">
            <video
              controls
              className="w-full h-full object-cover rounded-lg shadow-lg"
            >
              <source src="/videos/pexels.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="mt-2 text-sm text-center lg:text-left text-gray-500">
              SHOWREEL (2022)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
