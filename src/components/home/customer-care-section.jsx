import InfoSection from "./info-section.jsx";
import {
	CalendarClock,
	BriefcaseMedical,
	MessageSquare,
	Zap,
} from "lucide-react";

const customerCareBenefits = [
	{
		Icon: CalendarClock,
		title: "Always here to help",
		note: `Need help anytime, day or night? We’ve got you covered.
				Our support team is online 24/7 to answer questions, fix
				issues, or just point you in the right direction—so you
				can keep playing without the stress.`,
	},

	{
		Icon: BriefcaseMedical,
		title: "Your support squad",
		note: `Our customer care squad is as friendly as they come—always ready to back you up when things get tricky. Think of us as your co-op partners, always here to answer questions, fix issues, and keep you in the game.`,
	},

	{
		Icon: Zap,
		title: "Speedy response",
		note: `Nobody likes waiting around when something goes wrong. 
	           That’s why our support team responds fast—getting you 
	           the help you need without the long queues or endless back-and-forth. 
	           Quick, clear, and straight to the point, so you can get back to gaming.`,
	},

	{
		Icon: MessageSquare,
		title: "Support, Anywhere you play",
		note: `Whether you’re in chat, on email, or hanging out on Discord—we’ve got you covered. Our support team is everywhere you need us, so getting help feels as easy as switching loadouts.`,
	},
];

const CustomerCareSection = () => {
	return (
		<InfoSection heading="Customer care" className="bg-neutral-900 ">
			<p className="mb-4">
				at Vite games we value our customers, without them we wouldn't
				be here and We know issues can pop up when you least expect
				them. That’s why our support team is here to help—quick,
				friendly, and always ready to get you back in the game. Whether
				it’s a question, a bug, or just some guidance, we’ve got your
				back. our customer care provides you with:
			</p>

			<div className="flex w-[90dvw] *:shrink-0 overflow-auto gap-6 snap-x snap-mandatory">
				{customerCareBenefits.map((data) => (
					<section className="w-72 flex flex-col gap-4 border-2 border-accent p-4 rounded-2xl bg-black snap-center">
						<div className="p-2 bg-accent/30 w-fit h-fit rounded-full">
							<data.Icon className="text-accent" />
						</div>
						<h3 className="text-lg font-poppins-medium">
							{data.title}
						</h3>
						<p className="text-sm leading-6">{data.note}</p>
					</section>
				))}
			</div>
		</InfoSection>
	);
};

export default CustomerCareSection;
