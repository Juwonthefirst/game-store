import InfoSection from "./info-section.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faApplePay,
	faGooglePay,
	faPaypal,
	faAmazonPay,
	faCcVisa,
	faCcAmex,
	faCcDiscover,
} from "@fortawesome/free-brands-svg-icons";
import { Landmark } from "lucide-react";
import { Link } from "react-router";

const SecurePaymentSection = () => {
    const paymentIcons = [
		faApplePay,
		faGooglePay,
		faAmazonPay,
		faCcVisa,
		faPaypal,
		faCcAmex,
		faCcDiscover,
	];
	
	return (
	    			<InfoSection heading="Secure payments" className="bg-black">
				<p>
					Whether you’re stacking V-Bucks in Fortnite, grabing the
					latest COD game, or grabbing gear fit for the frontier in
					Red Dead Redemption — your payments stay locked down tighter
					than a vault. With military-grade encryption guarding every
					transaction, your loot is always safe. we offer payment
					options in:
				</p>
				<div className=" grid grid-cols-2 gap-x-[-48px] gap-y-3 self-center">
					{paymentIcons.map((icon, index) => (
						<FontAwesomeIcon key={index} icon={icon} size="2x" />
					))}
					<div className="flex gap-1 justify-center items-center mb-4">
						<Landmark />
						<p>Bank transfer</p>
					</div>
				</div>
			</InfoSection>
	)
};

export default SecurePaymentSection;
