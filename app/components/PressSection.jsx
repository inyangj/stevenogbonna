import PressCard from "./PressCard";
import { test } from "@/public/images";

const PressSection = () => {
  const pressData = [
    {
      title: "The power of storytelling in content creation",
      imageUrl: test,
      source: "Steven Ogbonna",
      // description:
      //   "Temitope Dada, popularly referred to as “Dabest” by his friends and protégés, is making TV ads in Nigeria worth talking about.",
      link: "https://www.linkedin.com/posts/stevenogbonna7_we-are-selfish-but-our-favorite-reality-activity-7247981522278883331-_b9K?utm_source=share&utm_medium=member_desktop",
    },
    // {
    //   title: "Oluwadabest Is The Director Behind Your Favourite Commercials",
    //   imageUrl: test,
    //   source: "PiggyVest feature",
    //   description:
    //     "oluwadabest takes us through his eventful career, discusses the moment his life changed and offers advice for pricing creative work.",
    //   link: "https://piggyvest.com/oluwadabest-director-behind-commercials",
    // },
    // {
    //   title:
    //     "Dada Temitope Has been nominated for The Future Awards Africa Prize For Film",
    //   imageUrl: test,
    //   source: "TFAAFRICA",
    //   description:
    //     "Meet the nominees for The Future Awards Africa Prize For Film.",
    //   link: "https://thefutureawards.com/dada-temitope-nominated",
    // },
  ];

  return (
    <section className="container mx-auto px-8 md:px-16 lg:px-28 xl:px-32 2xl:px-[156px] py-16 lg:py-24">
      <h2 className="text-4xl font-bold mb-8">Press</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pressData.map((item, index) => (
          <PressCard
            key={index}
            title={item.title}
            imageUrl={item.imageUrl}
            source={item.source}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
};

export default PressSection;
