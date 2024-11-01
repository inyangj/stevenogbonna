import Image from "next/image";
import AnimatedImage from "./AnimatedImage";

const PressCard = ({ title, imageUrl, source, description, link }) => {
  return (
    <div className="bg-white  overflow-hidden">
      
      <AnimatedImage 
      
src={imageUrl} alt={title} width={400} height={250} videoLink={link}
      />
      <div className="py-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-500 font-bold mb-1">{source}</p>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <a
          href={link}
          className="border border-black text-black px-4 py-2 rounded hover:bg-black hover:text-white transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default PressCard;
