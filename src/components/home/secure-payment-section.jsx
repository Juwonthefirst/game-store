import { Section, Body, Header } from "./sematics.jsx";
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
    <Section className="bg-black flex-col items-center gap-4">
      <div className="flex flex-col gap-4 sm:p-6">
        <Header>Secure payments</Header>
        <Body>
          Whether you’re stacking V-Bucks in Fortnite, grabing the latest COD
          game, or grabbing gear fit for the frontier in Red Dead Redemption —
          your payments stay locked down tighter than a vault. With
          military-grade encryption guarding every transaction, your loot is
          always safe. we offer payment options in:
        </Body>
      </div>
      <div className=" grid grid-cols-2 sm:grid-cols-4 gap-y-3 max-sm:self-center w-1/2  md:w-1/3 justify-center">
        {paymentIcons.map((icon, index) => (
          <FontAwesomeIcon key={index} icon={icon} className="w-12 h-12 " />
        ))}
        <div className="flex sm:flex-col gap-1 justify-center items-center mb-4 text-xs">
          <Landmark size={40} />
          <p>Bank transfer</p>
        </div>
      </div>
    </Section>
  );
};

export default SecurePaymentSection;
