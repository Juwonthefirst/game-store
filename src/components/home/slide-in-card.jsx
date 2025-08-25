import { motion } from "motion/react";

const SlideInCard = ({ bgImg, from, text, className, children }) => {
	const isLeft = from === "left";
	const x = 300 * (isLeft ? -1 : 1);
	if (children)
		return (
			<motion.div
				initial={{ x }}
				whileInView={{ x: 0 }}
				layout
				transition={{ duration: 0.4 }}
				className={className}
			>
				{children}
			</motion.div>
		);
	return (
		<motion.div
			initial={{ x }}
			whileInView={{ x: 0 }}
			layout
			transition={{ duration: 0.4 }}
			className="relative w-full h-14 rounded-xl overflow-hidden"
		>
			<img src={bgImg} className="w-full h-full object-cover " />
			<p
				className={
					"p-2 w-full h-full bg-black/40 absolute top-0 left-0 font-poppins-extrabold text-3xl " +
					(isLeft ? "text-left " : "text-right ") +
					className
				}
			>
				{text}
			</p>
		</motion.div>
	);
};

export default SlideInCard;
