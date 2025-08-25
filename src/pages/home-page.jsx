import { useOutletContext } from "react-router";
import ImageCarousel from "../components/home/image-carousel.jsx";
import HeroSection from "../components/home/hero.jsx";
import CustomerCareSection from "../components/home/customer-care-section.jsx";
import GameLibrarySection from "../components/home/game-library-section.jsx";
import SlideInCard from "../components/home/slide-in-card.jsx";
import InfoSection from "../components/home/info-section.jsx";

const HomePage = () => {
	const { className } = useOutletContext();
	return (
		<main className={className + " flex flex-col items-center h-auto"}>
			<HeroSection />
			<h2 className="text-2xl font-poppins-bold mt-24 mb-6">
				Explore{" "}
				<span className="font-bangers text-accent-light text-3xl">
					Vite Games
				</span>
			</h2>

			<GameLibrarySection />
			<CustomerCareSection />
			<InfoSection heading="Secure payments" className="bg-black">
				<p>
					Whether you’re stacking V-Bucks in Fortnite, loading up on
					COD Points, or grabbing gear fit for the frontier in Red
					Dead Redemption — your payments stay locked down tighter
					than a vault. With military-grade encryption guarding every
					transaction, your loot is always safe. Game on, spend
					fearless.
				</p>
			</InfoSection>
		</main>
	);
};

export default HomePage;
