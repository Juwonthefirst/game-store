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
  const genreData = [
    {
      genre: "Adventure",
      bgImg: rdrImage,
      color: "text-red-400",
    },

    {
      genre: "Fantasy",
      bgImg: eldenRingImage,
      color: "text-green-700",
    },

    {
      genre: "Sport",
      bgImg: fifaImage,
      color: "text-sky-400",
    },

    {
      genre: "Survival",
      bgImg: minecraftImage,
      color: "text-green-500",
    },

    {
      genre: "RPG",
      bgImg: borderlandImage,
      color: "text-orange-400",
    },

    {
      genre: "Indie",
      bgImg: knightImage,
      color: "text-accent-light",
    },

    {
      genre: "Shooter",
      bgImg: codImage,
      color: "text-white",
    },
  ];

  const [currentImageId, setCurrentImageId] = useState(3);
  const direction = useRef(1);

  let touchStartPoint;
  const handleTouchStart = (event) => {
    const touch = event.targetTouches[0];
    touchStartPoint = touch.clientY;
  };

  const handleTouchEnd = (event) => {
    const touch = event.changedTouches[0];
    let touchEndPoint = touch.clientY;
    let touchPointDifference = touchEndPoint - touchStartPoint;
    if (touchPointDifference < -50) {
      if (currentImageId >= imagesURL.length - 1) return;
      setCurrentImageId(currentImageId + 1);
    } else if (touchPointDifference > 50) {
      if (currentImageId <= 0) return;
      setCurrentImageId(currentImageId - 1);
    }
  };

  useEffect(() => {
    if (currentImageId <= 0) direction.current = 1;
    else if (currentImageId >= genreData.length - 1) direction.current = -1;
    const timeoutkey = setTimeout(() => {
      setCurrentImageId(currentImageId + direction.current);
    }, 10000);

    return () => {
      clearTimeout(timeoutkey);
    };
  }, [currentImageId]);

  return (
    <Section className="flex-col-reverse md:flex-row items-center md:gap-10 bg-slate-200 text-black ">
      <ImageCarousel
        currentImageId={currentImageId}
        setCurrentImageId={setCurrentImageId}
        handleTouchEnd={handleTouchEnd}
        handleTouchStart={handleTouchStart}
        genres={genreData}
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
