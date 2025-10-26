"use client";

import Link from "next/link";
import { useGlitch } from "react-powerglitch";

import { bangers } from "@/utils/fonts";
import glitchConfig from "@/utils/glitch-config";

const CtaButton = () => {
  const glitch = useGlitch(glitchConfig);
  return (
    <Link
      ref={glitch.ref}
      className={`block border-2 w-fit md:text-lg lg:text-xl border-accent bg-accent/40 py-1 px-3 rounded-xl [&:hover,&:active]:bg-accent transition-colors ${bangers.className}`}
      href="shop"
    >
      Shop now
    </Link>
  );
};

export default CtaButton;
