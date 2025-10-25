import { bangers } from "@/utils/fonts";
import HeroSection from "@/components/home/hero.jsx";
import CustomerCareSection from "@/components/home/customer-care-section.jsx";
import GameLibrarySection from "@/components/home/game-library-section.jsx";
import SecurePaymentSection from "@/components/home/secure-payment-section.jsx";
import CtaButton from "@/components/home/cta-button";

const HomePage = () => {
  return (
    <div>
      <main
        className={` pt-12 h-[100dvh] overflow-x-hidden overflow-y-auto flex flex-col items-center /h-auto`}
      >
        <HeroSection />
        <h2 className="text-2xl font-bold mt-24 mb-6">
          Explore
          <span className={`${bangers.className} text-accent-light text-3xl`}>
            Vite Games
          </span>
        </h2>

        <GameLibrarySection />
        <CustomerCareSection />
        <SecurePaymentSection />
        <div className="p-4 flex flex-col items-center gap-3">
          <p className=" text-sm">
            so Jump in and let up help you have the best gaming experience ever.
          </p>
          <CtaButton />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
