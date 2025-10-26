"use client";

import { useState, useEffect, useRef } from "react";

import { Section, Body, Header } from "./sematics.jsx";
import borderlandImage from "@/assets/images/borderland.jpg";
import knightImage from "@/assets/images/knight.jpg";
import rdrImage from "@/assets/images/rdr.jpg";
import eldenRingImage from "@/assets/images/elden-ring.jpg";
import fifaImage from "@/assets/images/fifa.jpg";
import minecraftImage from "@/assets/images/minecraft.jpg";
import codImage from "@/assets/images/cod.jpg";

import ImageCarousel from "./image-carousel.jsx";

const GameLibrarySection = () => {
  const imagesUrl = [
    rdrImage,
    eldenRingImage,
    fifaImage,
    minecraftImage,
    borderlandImage,
    knightImage,
    codImage,
  ];

  const [currentImageId, setCurrentImageId] = useState(3);
  const direction = useRef(1);

  const handleSwipe = (direction) => {
    if (direction === "up" || direction === "right") {
      if (currentImageId >= imagesUrl.length - 1) return;
      setCurrentImageId(currentImageId + 1);
    } else if (direction === "down" || direction === "left") {
      if (currentImageId <= 0) return;
      setCurrentImageId(currentImageId - 1);
    }
  };

  useEffect(() => {
    if (currentImageId <= 0) direction.current = 1;
    else if (currentImageId >= imagesUrl.length - 1) direction.current = -1;
    const timeoutkey = setTimeout(() => {
      setCurrentImageId(currentImageId + direction.current);
    }, 10000);

    return () => {
      clearTimeout(timeoutkey);
    };
  }, [currentImageId]);

  return (
    <Section className="relative flex-col-reverse sm:flex-row items-center gap-12 sm:gap-6 text-white max-w-screen sm:min-h-88 md:min-h-108 sm:overflow-hidden">
      <div
        className="absolute -z-10 w-full h-full bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: `url(${imagesUrl[currentImageId].src})`,
          filter: "blur(24px) brightness(0.5)",
        }}
      ></div>
      <ImageCarousel
        currentImageId={currentImageId}
        setCurrentImageId={setCurrentImageId}
        handleSwipe={handleSwipe}
        images={imagesUrl}
      />
      <div className="flex flex-col gap-4">
        <Header>Large game library</Header>
        <Body>
          We know finding the right game can be frustrating—jumping between
          platforms, making sure you have the right specs, comparing prices.
          That’s why we did all the hard work for you, so you can focus on what
          really matters: having fun —and if you’re like us, crushing your
          opponents. We picked a wide range of selections just for you:
        </Body>
      </div>
    </Section>
  );
};

export default GameLibrarySection;
