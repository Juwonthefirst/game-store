import { useOutletContext } from "react-router";
import apexImage from "../assets/images/apex.jpg";
import borderlandImage from "../assets/images/borderland.jpg";
import knightImage from "../assets/images/knight.jpg";
import rdrImage from "../assets/images/rdr.jpg";
import witcherImage from "../assets/images/witcher.jpg";
import elderScrollImage from "../assets/images/elder-scrolls.jpg";
import ImageCarousel from "../components/image-carousel.jsx";
import HeroSection from "../components/home/hero.jsx";

const HomePage = () => {
	const { className } = useOutletContext();
	return (
		<div className={"flex flex-col gap-8 items-center " + className}>
			<HeroSection />
			<div className="relative p-4 flex flex-col gap-4 w-full ">
				<img
					src={knightImage}
					className="absolute top-1/4 left-0 z-[-1] w-full h-full object-cover blur-md saturate-150"
				/>
				<p className="text-lg">
					Browse through our collection of AAA games
				</p>
				<ImageCarousel
					imagesURL={[
						elderScrollImage,
						borderlandImage,
						knightImage,
						rdrImage,
						witcherImage,
						knightImage,
						elderScrollImage,
					]}
				/>
			</div>
		</div>
	);
};

export default HomePage;
