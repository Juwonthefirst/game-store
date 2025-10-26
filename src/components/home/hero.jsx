import Image from "next/image";

import CtaButton from "./cta-button";
import apexImage from "@/assets/images/apex.jpg";
import Logo from "./logo";

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-72 md:min-h-96 lg:min-h-108 bg-black/40 p-6 flex items-end justify-center">
      <Image
        className="absolute w-full h-full z-[-1] object-cover"
        src={apexImage}
        alt=""
        fill
      />

      <div className="flex flex-col gap-2 md:gap-4 items-center text-center mb-4 md:mb-6 lg:mb-10 w-3/4">
        <Logo />
        <p className="text-sm md:text-base lg:text-lg font-medium">
          The game store for gamers by gamers
        </p>
        <CtaButton />
      </div>
    </div>
  );
};

export default HeroSection;
