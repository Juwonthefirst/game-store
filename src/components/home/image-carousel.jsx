"use client";

import Image from "next/image.js";

const HorizontalImageCarousel = ({
  currentImageId,
  setCurrentImageId,
  handleTouchStart,
  handleTouchEnd,
  genres,
}) => {
  return (
    <div className="flex md:hidden w-xs overflow-hidden">
      <div
        className="flex gap-12 relative transition-transform duration-500 *:shrink-0 px-16 items-center"
        style={{
          transform: `translateX(calc(50% - ${
            currentImageId * (216 + 48) + 128
          }px))`,
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {genres.map((genre, index) => {
          const isMain = currentImageId === index;
          const isNextOrPrev =
            currentImageId + 1 === index || currentImageId - 1 === index;

          let className = "scale-75 opacity-40";
          if (isMain) className = "scale-120 opacity-100 shadow-2xl";
          if (isNextOrPrev) className = "opacity-60";
          return (
            <div
              className={
                "h-24 w-54 relative rounded-xl overflow-hidden transition-all duration-500" +
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
                src={genre.bgImg}
                alt={genre.genre}
                fill
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const VerticalImageCarousel = ({
  currentImageId,
  setCurrentImageId,
  handleTouchStart,
  handleTouchEnd,
  genres,
}) => {
  return (
    <div className="hidden md:flex items-center h-108 overflow-y-hidden min-w-3/5 scale-75 lg:scale-100">
      <div
        className="flex flex-col gap-12 relative transition-transform duration-500 *:shrink-0 px-16 items-center "
        style={{
          transform: `translateY(calc(50% - ${
            currentImageId * (224 + 48) + 96
          }px))`,
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {genres.map((genre, index) => {
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
                src={genre.bgImg}
                alt={genre.genre}
                fill
              />
            </div>
          );
        })}
      </div>
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
