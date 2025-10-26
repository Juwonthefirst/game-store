"use client";

import Image from "next/image.js";

import { SwipeSensor } from "@/utils/swipe-sensor";

const HorizontalImageCarousel = ({
  currentImageId,
  setCurrentImageId,
  handleSwipe,
  images,
}) => {
  const cardSize = 192;
  const cardGap = 40;
  const containerPadding = 156;
  const swipeSensor = new SwipeSensor("X", handleSwipe);
  return (
    <div
      className="flex md:hidden gap-10 relative transition-transform duration-500 *:shrink-0 px-16 items-center"
      style={{
        transform: `translateX(calc(50% - ${
          currentImageId * (cardSize + cardGap) + containerPadding
        }px))`,
      }}
      onTouchStart={swipeSensor.handleTouchStart}
      onTouchEnd={swipeSensor.handleTouchEnd}
    >
      {images.map((image, index) => {
        const isMain = currentImageId === index;
        const isNextOrPrev =
          currentImageId + 1 === index || currentImageId - 1 === index;

        let className = "scale-75 opacity-40";
        if (isMain) className = "scale-120 opacity-100 shadow-2xl";
        if (isNextOrPrev) className = "opacity-60";
        return (
          <div
            className={
              "h-24 w-48 relative rounded-xl overflow-hidden transition-all duration-500" +
              " " +
              className
            }
            key={index}
            onClick={() => {
              setCurrentImageId(index);
            }}
          >
            <Image
              className="w-full h-full object-cover rounded-xl "
              src={image}
              alt="game image"
              fill
            />
          </div>
        );
      })}
    </div>
  );
};

const VerticalImageCarousel = ({
  currentImageId,
  setCurrentImageId,
  handleSwipe,
  images,
}) => {
  const swipeSensor = new SwipeSensor("Y", handleSwipe);
  return (
    <div
      className="hidden md:flex flex-col gap-12 min-w-3/5 scale-80 lg:scale-100 relative transition-transform duration-500 *:shrink-0 px-16 items-center "
      style={{
        transform: `translateY(calc(50% - ${
          currentImageId * (224 + 48) + 96
        }px))`,
      }}
      onTouchStart={swipeSensor.handleTouchStart}
      onTouchEnd={swipeSensor.handleTouchEnd}
    >
      {images.map((image, index) => {
        const isMain = currentImageId === index;
        const isNextOrPrev =
          currentImageId + 1 === index || currentImageId - 1 === index;

        let className = "scale-75 opacity-40";
        if (isMain) className = "scale-120 opacity-100 shadow-2xl";
        if (isNextOrPrev) className = "opacity-60";
        return (
          <div
            className={
              "h-56 w-108 relative rounded-xl overflow-hidden transition-all duration-500" +
              " " +
              className
            }
            key={index}
            onClick={() => {
              setCurrentImageId(index);
            }}
          >
            <Image
              className="w-full h-full object-cover rounded-xl "
              src={image}
              alt="game image"
              fill
            />
          </div>
        );
      })}
    </div>
  );
};
const ImageCarousel = (props) => {
  return (
    <>
      <HorizontalImageCarousel {...props} />
      <VerticalImageCarousel {...props} />
    </>
  );
};

export default ImageCarousel;
