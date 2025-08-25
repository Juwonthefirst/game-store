import viteLogo from "/vite.svg";
import apexImage from "../../assets/images/apex.jpg";
import { Link } from "react-router";

const HeroSection = () => {
	return (
		<div className="relative w-full h-72 bg-black/20 p-6">
			<img
				className="absolute top-0 left-1/6 w-full h-full z-[-1] object-cover"
				src={apexImage}
			/>
			<div className="flex items-center mb-2">
				<img src={viteLogo} />
				<h2 className="text-4xl font-bangers mt-1">Vite Games</h2>
			</div>
			<p className="w-2/5 text-sm font-poppins-medium">
				The game store for gamers by gamers
			</p>
			<Link
				className="absolute bottom-6 border-2 border-accent bg-accent/40 py-1 px-3 rounded-xl active:bg-accent font-bangers"
				to="shop"
			>
				Shop now
			</Link>
		</div>
	);
};

export default HeroSection;
