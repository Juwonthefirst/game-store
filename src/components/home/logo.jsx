"use client";

import { useGlitch } from "react-powerglitch";
import Image from "next/image";

import glitchConfig from "@/utils/glitch-config";
import { bangers } from "@/utils/fonts";

const Logo = () => {
  const glitch = useGlitch(glitchConfig);
  return (
    <div className="flex items-center mb-2" ref={glitch.ref}>
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
  );
};

export default Logo;
