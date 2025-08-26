import InfoSection from "./info-section.jsx";
import SlideInCard from "./slide-in-card.jsx";
import borderlandImage from "../../assets/images/borderland.jpg";
import knightImage from "../../assets/images/knight.jpg";
import rdrImage from "../../assets/images/rdr.jpg";
import eldenRingImage from "../../assets/images/elden-ring.jpg";
import fifaImage from "../../assets/images/fifa.jpg";
import minecraftImage from "../../assets/images/minecraft.jpg";
import codImage from "../../assets/images/cod.jpg";

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

	return (
		<InfoSection
			heading="Large game library"
			className="bg-slate-200 text-black"
		>
			<p>
				We know finding the right game can be frustrating—jumping
				between platforms, making sure you have the right specs,
				comparing prices. That’s why we did all the hard work for you,
				so you can focus on what really matters: having fun —and if
				you’re like us, crushing your opponents. We picked a wide range
				of selections just for you:
			</p>
			<div className="flex flex-col gap-4">
				{genreData.map((genre, index) => (
					<SlideInCard
						key={index}
						bgImg={genre.bgImg}
						text={genre.genre}
						from={index % 2 === 0 ? "left" : "right"}
						className={genre.color}
					/>
				))}
			</div>
			<p>We don't judge, all for you</p>
		</InfoSection>
	);
};

export default GameLibrarySection;
