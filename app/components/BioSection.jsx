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
                On the list of things Temitope Dada (known popularly as
                Oluwadabest) is passionate about, the art and act of
                storytelling comes tops. This is why my works as a commercial
                and documentary filmmaker always have a peculiar feel to them;
                one that can only be birthed by Dabest.
              </p>
              <p className="text-lg mb-6">
                Based in Lagos yet having worked with multinational brands, I
                lead the creative team at FilmbyDT Production Company and I am
                passionate about teaching; expressing this as a tutor/convenor
                at Shoot Edit Repeat — a training for cinematography enthusiasts
                nationwide.
              </p>
              <p className="text-lg mb-6">
                If I were to mention all the film projects I have directed,
                those with top brands across all spheres like Guinness plc, Octa
                FX, Abeg, PiggyVest, GTBank, Bamboo, Andrea Iyamah, Sterling
                Bank, Nigerian Bottling Company, Total and Origin Nigeria might
                probably interest you the most; even though they would only be
                me listing a few of the numerous commendable projects I have
                been a part of.
              </p>
              <p className="text-lg">
                Shoot an email at{" "}
                <a
                  href="mailto:oluwadabest@gmail.com"
                  className="text-gray-400 underline"
                >
                  oluwadabest@gmail.com
                </a>{" "}
                to get me involved in yours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
