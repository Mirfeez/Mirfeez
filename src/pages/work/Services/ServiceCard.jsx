import { motion } from "motion/react";

const ServiceCard = ({ icon, title, desc }) => {
	return (
		<motion.div
			whileHover={{
				y: -8,
				scale: 1.03,
				boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
				backgroundColor: "black",
			}}
			className="
				bg-zinc-900
				border border-zinc-700
				p-6
				rounded-2xl
				flex flex-col gap-4
				items-center text-center
				cursor-pointer
				hover:border-blue-400
				transition-all duration-300
				lg:m-10
			"
		>
			<div className="text-3xl text-blue-400">{icon}</div>

			<h3 className="font-bold md:text-xl text-blue-400">{title}</h3>

			<p className="text-sm text-zinc-400">{desc}</p>
		</motion.div>
	);
};

export default ServiceCard;
