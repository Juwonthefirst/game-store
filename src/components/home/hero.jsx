import Image from "next/image";

import { bangers } from "@/utils/fonts";
import CtaButton from "./cta-button";
import apexImage from "@/assets/images/apex.jpg";

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
        <div className="flex items-center mb-2">
          <Image
            className="hidden md:block"
            src={"/vite.svg"}
            alt="vite games logo"
            width={48}
            height={48}
          />
          <Image
            className="md:hidden"
            src={"/vite.svg"}
            alt="vite games logo"
            width={28}
            height={28}
          />
          <h2
            className={`${bangers.className} text-4xl md:text-5xl lg:text-6xl text-shadow-xs md:text-shadow-sm text-shadow-accent`}
          >
            Vite Games
          </h2>
        </div>
        <p className="text-sm md:text-base lg:text-lg font-medium">
          The game store for gamers by gamers
        </p>
        <CtaButton />
      </div>
    </div>
  );
};

export default HeroSection;
