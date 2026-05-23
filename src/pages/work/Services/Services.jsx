import { motion } from "motion/react";
import { ServicesData } from "./ServicesData";
import ServiceCard from "./ServiceCard";

const Services = () => {
	return (
		<section className="px-6 py-16 max-w-7xl mx-auto">
			{/* Main Heading */}
			<motion.h1
				initial={{ opacity: 0, y: -40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="
					text-4xl
					md:text-5xl
					font-bold
					text-center
					text-blue-400
					mb-20
				"
			>
				My Services
			</motion.h1>

			{/* Categories */}
			{ServicesData.map((section, i) => (
				<motion.div
					key={i}
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="mb-20"
				>
					{/* Category Title */}
					<motion.h2
						initial={{ opacity: 0, x: -40 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className="
							text-2xl
							md:text-3xl
							font-bold
							text-blue-300
							mb-10
							border-l-4
							border-blue-400
							pl-4
						"
					>
						{section.category}
					</motion.h2>

					{/* Cards */}
					<div
						className="
							grid
							grid-cols-1
							sm:grid-cols-2
							lg:grid-cols-3
							gap-8
						"
					>
						{section.items.map((item, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.4,
									delay: idx * 0.1,
								}}
								viewport={{ once: true }}
							>
								<ServiceCard
									icon={item.icon}
									title={item.title}
									desc={item.desc}
								/>
							</motion.div>
						))}
					</div>
				</motion.div>
			))}
		</section>
	);
};

export default Services;
