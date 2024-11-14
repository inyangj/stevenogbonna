import Image from "next/image";
import { banner, about, drizzy, profile, folio1 } from "@/public/images";

export default function BioSection() {
  return (
    <section className="w-full px-8 md:px-16 lg:px-28 xl:px-32 pt-16 lg:pt-24 bg-gray-900 text-white ">
      <div className="container mx-auto flex flex-col lg:flex-row xl:gap-[70px] items-start  lg:items-center justify-between">
        {/* Image Section */}
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <Image
            src={profile}
            alt="Profile Image"
            width={600}
            height={800}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Bio Section */}
        <div className="lg:w-1/2 lg:pl-12 self-start">
          <div className="border-b-2 border-white mb-4"></div>
          <div className="lg:flex gap-20 xl:gap-44">
            <h2 className="text-sm font-bold uppercase mb-4">Bio</h2>
            <div>
              <p className="text-lg mb-6">
                Hi, I&apos;m Steven Ogbonna, Filmmaker and Creative Lead at Swit
                Visuals I believe stories have the power to shape perceptions,
                drive narratives, and spark meaningful engagement. That&apos;s
                why I believe every brand and individual deserves to tell their
                authentic story.
              </p>
              <p className="text-lg mb-6">
                For the past five years, I&apos;ve been telling the best stories
                of many African brands and people. From documenting how happy
                and beautiful people look on their wedding day to short films
                and commercials, I&apos;ve been privileged to create authentic
                and engaging visuals that describe the narrative of these
                brands. So, do you have a story to tell? Let&apos;s chat
              </p>
              {/*              
              <p className="text-lg">
                Shoot an email at{" "}
                <a
                  href="mailto:stevenogbonna56@gmail.com"
                  className="text-gray-400 underline"
                >
                  stevenogbonna56@gmail.com
                </a>{" "}
                to get me involved in yours.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
