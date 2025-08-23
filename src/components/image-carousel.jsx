import { useState } from "react";

const ImageCarousel = ({ imagesURL }) => {
	const [currentImageId, setCurrentImageId] = useState(2);
	let touchStartPoint;
	const handleTouchStart = (event) => {
		const touch = event.targetTouches[0];
		touchStartPoint = touch.clientX;
	};

	const handleTouchEnd = (event) => {
		const touch = event.changedTouches[0];
		let touchEndPoint = touch.clientX;
		let touchPointDifference = touchEndPoint - touchStartPoint;
		if (touchPointDifference < -50) {
			if (currentImageId >= imagesURL.length - 1) return;
			setCurrentImageId(currentImageId + 1);
		} else if (touchPointDifference > 50) {
			if (currentImageId <= 0) return;
			setCurrentImageId(currentImageId - 1);
		}
	};

	return (
		<div
			className="relative flex gap-4 transition-transform duration-300 *:shrink-0"
			style={{
				transform: `translateX(calc(50% - ${
					currentImageId * (80 + 16) + 40
				}px))`,
			}}
			onTouchStart={handleTouchStart}
			onTouchEnd={handleTouchEnd}
		>
			{imagesURL.map((imageURL, index) => {
				const isMain = currentImageId === index;
				const isNextOrPrev =
					currentImageId + 1 === index ||
					currentImageId - 1 === index;

				let className = "scale-80 opacity-40";
				if (isMain) className = "scale-120 opacity-100";
				if (isNextOrPrev) className = "opacity-60";
				return (
					<div
						key={index}
						className={
							"h-28 w-20 transition-all duration-300 " + className
						}
						onClick={() => setCurrentImageId(index)}
					>
						<img
							className="w-full h-full object-cover rounded-xl"
							src={imageURL}
						/>
						{isMain && "Borderland" }
					</div>
				);
			})}
		</div>
	);
};

export default ImageCarousel;
