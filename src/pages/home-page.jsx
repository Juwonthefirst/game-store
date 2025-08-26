import { useOutletContext } from "react-router";
import HeroSection from "../components/home/hero.jsx";
import CustomerCareSection from "../components/home/customer-care-section.jsx";
import GameLibrarySection from "../components/home/game-library-section.jsx";
import SecurePaymentSection from "../components/home/secure-payment-section.jsx";
import SlideInCard from "../components/home/slide-in-card.jsx";
import InfoSection from "../components/home/info-section.jsx";
import { Link } from "react-router";

const HomePage = () => {
	const { className } = useOutletContext();

	return (
		<div>
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
				<SecurePaymentSection />
				<div className="p-4 flex flex-col items-center gap-3">
					<p className=" text-sm">
						so Jump in and let up help you have the best gaming
						experience ever.
					</p>
					<Link
						className="w-fit border-2 border-accent bg-accent/40 py-1 px-4 rounded-xl active:bg-accent font-bangers text-lg self-center"
						to="shop"
					>
						Shop now
					</Link>
				</div>
			</main>
			<footer className="flex flex-col gap-2 bg-neutral-800 p-10 items-center">
				<div className="flex gap-1">
					<img />
					<p>Powdered by Rawg</p>
				</div>
			</footer>
		</div>
	);
};

export default HomePage;
