import { Section, Body, Header } from "./sematics.jsx";
import { CalendarClock, BriefcaseMedical, MessageSquare } from "lucide-react";

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
    Icon: MessageSquare,
    title: "Support, Anywhere you play",
    note: `Whether you’re in chat, on email, or hanging out on Discord—we’ve got you covered. Our support team is everywhere you need us, so getting help feels as easy as switching loadouts.`,
  },
];

const CustomerCareSection = () => {
  return (
    <Section className="bg-slate-200 text-black flex-col gap-6">
      <div className="flex flex-col gap-4">
        <Header>Customer care</Header>
        <Body className="mb-4">
          at Vite games we value our customers, without them we wouldn't be here
          and We know issues can pop up when you least expect them. That’s why
          our support team is here to help—quick, friendly, and always ready to
          get you back in the game. Whether it’s a question, a bug, or just some
          guidance, we’ve got your back. our customer care provides you with:
        </Body>
      </div>

      <div className="grid grid-rows-3 sm:grid-cols-2 sm:grid-rows-1 lg:grid-cols-3 lg:grid-rows-1 justify-between gap-x-4 gap-y-8">
        {customerCareBenefits.map((data) => (
          <section
            key={data.title}
            className="flex flex-col items-center gap-2  sm:last:col-span-2 lg:last:col-span-1 "
          >
            <div className="p-4 bg-accent/30 w-fit h-fit rounded-full">
              <data.Icon className="text-accent" size={48} />
            </div>
            <h3 className="text-lg font-medium mb-2">{data.title}</h3>
            <p className="w-3/4 sm:max-w-xs flex text-sm leading-6 text-center">
              {data.note}
            </p>
          </section>
        ))}
      </div>
    </Section>
  );
};

export default CustomerCareSection;
