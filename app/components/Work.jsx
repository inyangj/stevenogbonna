import Image from "next/image";
import AnimatedImage from "./AnimatedImage";
import { banner, about, drizzy, profile, folio1, test } from "@/public/images";

export default function BodyOfWork() {
  const works = [
    {
      year: "2022",
      title: "Like This (Ayra Starr)",
      description:
        "A narrative commercial where I explored various scenarios where the Pocket app proves to be superior and more dependable than its competitors.",
      image: test,
      link: "http://like.this.ayra.starr.com",
    },
    {
      year: "2021",
      title: "Mastery looks like you (Octa Fx)",
      description:
        "A narrative commercial demonstrating that mastering forex trading can be as simple as acquiring a skill you have already perfected.",
      image: test,
      link: "https://masterylookslikeyou.octa.fx",
    },
    {
      year: "2023",
      title: "9mobile X BNXN",
      description:
        "Highlighting 9mobile as a central element in music production, from creating music to strategizing and executing projects.",
      image: folio1,
      link: "https://9mobilexbnxn.com",
    },
  ];

    const showcaseItems = [
      {
        year: "2023",
        title: "Beauty X 9mobile",
        description:
          "A TV show-inspired commercial that delves into our guest answering a crucial question on the show.",
        image: test,
        link: "https://drive.google.com/file/d/your-link-1/view?usp=sharing",
      },
      {
        year: "2022",
        title: "YOU'VE GOT IT (Burna Boy)",
        description:
          "A motivational thriller that delves into Burna Boy sharing his journey while inspiring the audience.",
        image: test,
        link: "https://drive.google.com/file/d/your-link-2/view?usp=sharing",
      },
      {
        year: "2020",
        title: "Andrea Iyamah SS20 Fashion film",
        description:
          "An enchanting thriller unfolds in a serene green environment, combining fashion and dance.",
        image: test,
        link: "https://drive.google.com/file/d/your-link-3/view?usp=sharing",
      },
      {
        year: "2021",
        title: "Invest Bamboo",
        description: "Bamboo is finally in Ghana!",
        image: "/path/to/invest-bamboo.jpg",
        link: "https://drive.google.com/file/d/your-link-4/view?usp=sharing",
      },
      {
        year: "2021",
        title: "Epic Save (PiggyVest)",
        description:
          "A suspenseful ad that leaves everyone on the edge of their seat.",
        image: "/path/to/piggyvest.jpg",
        link: "https://drive.google.com/file/d/your-link-5/view?usp=sharing",
      },
      {
        year: "2022",
        title: "We Want More (Stanbic)",
        description:
          "A celebration of growth and aspirations shared among friends and family.",
        image: "/path/to/stanbic.jpg",
        link: "https://drive.google.com/file/d/your-link-6/view?usp=sharing",
      },
    ];

  return (
    <section id="portfolio">
      <section className="w-full px-8 md:px-16 lg:px-28 xl:px-32 2xl:px-[156px] py-16 lg:py-24 bg-white text-gray-900">
        <div className="container mx-auto text-end mb-12 md:mb-16 lg:mb-24">
          <h2 className=" text-3xl md:text-6xl xl:text-9xl font-bold">
            Body of work
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div key={index} className="flex flex-col items-start">
              <p className="text-lg font-semibold ">{work.year}</p>
              <h3 className="text-2xl text-[#606060] font-bold mb-3">
                {work.title}
              </h3>

              <AnimatedImage
                src={work.image}
                alt={work.title}
                videoLink={work.link}
                width={383}
                height={225}
              />

              <p className="text-gray-600 w-[375px] mt-6">{work.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-8 md:px-16 lg:px-28 xl:px-32 2xl:px-[156px] py-16 lg:py-24 bg-[#353535] text-white">
        {showcaseItems.map((item, index) => (
          <div key={index} className="flex flex-col items-start">
            <p className="text-lg font-semibold ">{item.year}</p>
            <h3 className="text-xl  font-bold mb-3">
              {item.title}
            </h3>

            <AnimatedImage
              src={item.image}
              alt={item.title}
              videoLink={item.link}
              width={383}
              height={225}
            />

            <p className=" w-[375px] mt-6">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
