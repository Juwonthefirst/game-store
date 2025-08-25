const Section = ({ heading, children, className }) => {
	return (
		<section
			className={"py-8 px-6 flex flex-col gap-6 text-sm " + className}
		>
			<h2 className="font-bangers text-2xl text-center">{heading}</h2>
			{children}
		</section>
	);
};

export default Section;
