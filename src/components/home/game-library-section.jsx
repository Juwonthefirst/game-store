import InfoSection from "./info-section.jsx";
import SlideInCard from "./slide-in-card.jsx";
import apexImage from "../../assets/images/apex.jpg";
import borderlandImage from "../../assets/images/borderland.jpg";
import knightImage from "../../assets/images/knight.jpg";
import rdrImage from "../../assets/images/rdr.jpg";
import witcherImage from "../../assets/images/witcher.jpg";
import elderScrollImage from "../../assets/images/elder-scrolls.jpg";

const GameLibrarySection = () => {
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
				<SlideInCard
					bgImg={knightImage}
					text="Fantasy"
					from="left"
					className={"text-accent-light"}
				/>
				<SlideInCard
					bgImg={elderScrollImage}
					text="Adventure"
					from="right"
					className={"text-sky-500"}
				/>
				<SlideInCard
					bgImg={borderlandImage}
					text="Action"
					from="left"
					className={"text-orange-500"}
				/>
				<SlideInCard
					bgImg={rdrImage}
					text="Role-play"
					from="right"
					className={"text-red-500"}
				/>
				<SlideInCard
					bgImg={witcherImage}
					text="Action"
					from="left"
					className={"text-gray-800"}
				/>
			</div>
			<p>We don't judge, all for you</p>
		</InfoSection>
	);
};

export default GameLibrarySection;
