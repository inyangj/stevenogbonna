import Image from "next/image";
import AnimatedImage from "./AnimatedImage";
import {  folio1, test, cawstem, chimdi, christmas, collective, esther, operators, royal, startup, stevedata } from "@/public/images";

export default function BodyOfWork() {
  const works = [
    {
      year: "2023",
      title: "The Royal Wedding",
      description:
        "Emmanuel and Princess’s Love story is one to be shared to nations. The Royal Union captures the beauty of their connection and the warmth of a celebration that feels timeless and true to who they are.",
      image: royal,
      link: "https://youtu.be/iGb25oZ-ePU?si=aS1oli5Ut7fHzYuZ",
    },
    {
      year: "2024",
      title: "Esther & Matthew",
      description:
        "Matthew and Esther’s wedding is a heartfelt journey of love and laughter.  This film brings their unique bond to life, capturing the real moments that make their love story unforgettable.",
      image: esther,
      link: "https://drive.google.com/file/d/1kvggOnglT9Kz5HVxLI9hUuxCsEJ0U-Gq/view?usp=drive_link",
    },
    {
      year: "2023",
      title: "Chimdi & Joel",
      description:
        "Chimdi and Joel’s day is a tribute to their deep connection and shared dreams. This short film captures the real emotions, laughter, and love of a couple starting their forever with genuine happiness and warmth.",
      image: chimdi,
      link: "https://drive.google.com/file/d/1ss4ay7RKGmgFNY8NgDsxKca0gEBw349e/view?usp=drive_link",
    },
  ];

    const showcaseItems = [
      {
        year: "2024",
        title: "CAWSTEM",
        description:
          "CAWSTEM brings African women in STEM together to connect, inspire, and strengthen the tech ecosystem. This short film highlights the conversations, collaborations, and shared vision driving change in tech across the continent.",
        image: cawstem,
        link: "https://drive.google.com/file/d/1dCD-km2SUzexinhkIzyAhyi--6CJu42f/view?usp=drive_link",
      },
      {
        year: "2024",
        title: "54 COLLECTIVE",
        description:
          "This trailer captures a space where innovators from the 54 countries in Africa connect, collaborate, and reimagine what’s possible.",
        image: collective,
        link: "https://drive.google.com/file/d/1NXZz4GfWTa49aiR8_xv8qmWh6SwRwbkH/view?usp=drive_link",
      },
      {
        year: "2024",
        title: "AFRICA STARTUP FESTIVAL",
        description:
          "This motivating trailer shows how the Africa Startup Festival dived into navigating the unique challenges and opportunities of the African market.",
        image: startup,
        link: "https://drive.google.com/file/d/1XvKFdhFZoJ4EyiGrVss8LmfE5Je2T4Yn/view?usp=drive_link",
      },
      {
        year: "2024",
        title: "OPERATOR’S MIXER",
        description:
          "A vibrant mixer for African tech founders, builders, and entrepreneurs, Operator's Mixer shows the energy of learning, connection, and fun.",
        image: operators,
        link: "https://drive.google.com/file/d/1C8b9cWcZ9oZB-u931edAeSRTzCakyWGO/view?usp=drive_link",
      },
      {
        year: "2023",
        title: "Christmas In PH",
        description:
          "Christmas in PH is a joyful homecoming where friends reunite to celebrate their year’s achievements. This short film brings to life the warmth and tradition of a typical Nigerian Christmas day.",
        image: christmas,
        link: "https://drive.google.com/file/d/1_5_LFixRThKmYvqfq0COd8BnzyskZieR/view?usp=drive_link",
      },
      {
        year: "2024",
        title: "APV LAGOS ISLAND",
        description:
          "Highlighting a transformative event hosted by Celebration Church International, this short film reveals moments of inspiration and life-changing experiences.",
        image: test,
        link: "https://drive.google.com/file/d/12EjgGWejmd8q8Pw831OYdfkiAOtDgxbx/view?usp=drive_link",
      },
      {
        year: "2022",
        title: "SD Network& Services",
        description:
          "Highlighting SD Networks & Services, this commercial shows how their fast, seamless service brings ease and reliability to every connection.",
        image: stevedata,
        link: "https://drive.google.com/file/d/1GiWZtLFQP1aIaERl6BeYu8IrO2QhAFXw/view?usp=drive_link",
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
