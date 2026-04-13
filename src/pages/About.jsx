import { motion } from "motion/react";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<section id="aboutText" className="px-6 py-16 max-w-6xl mx-auto">
			{/* Title */}
			<motion.h1
				id="abouth1"
				initial={{ opacity: 0, y: -30 }}
				animate={{ opacity: 1, y: 0 }}
				className="text-3xl md:text-4xl font-bold text-white mb-12 text-center max-sm:text-sm "
			>
				About Me
			</motion.h1>

			{/* Top Section */}
			<div id="about-topandmid">
				<div
					id="about-topleft"
					className="flex gap-10 items-center mb-16 justify-around"
				>
					{/* Left - Text */}
					<motion.div
						id="about-lefttext"
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{
							delay: 0.3,
							duration: 0.5,
						}}
						className="text-zinc-400 space-y-4 w-[60%]"
					>
						<p>
							I’m
							<span
								id="about-name"
								className="text-2xl text-blue-400 font-bold"
							>
								Mahammad Mirfeez Makbool
							</span>
							, a self-taught frontend developer passionate about
							building modern and interactive web applications.
						</p>

						<p>
							I completed my BBA in 2025, and during college I discovered
							web development. What started as curiosity quickly became
							my career goal.
						</p>

						<p>
							I focus on React, UI design, and animations using GSAP and
							Motion. I also create dashboards and work as a freelancer.
						</p>

						{/* Buttons */}
						<motion.div
							initial={{
								x: 50,
								opacity: 0,
							}}
							animate={{
								x: 0,
								opacity: 1,
							}}
							transition={{
								delay: 0.5,
								duration: 0.5,
							}}
							className="flex gap-4 mt-4"
						>
							<a
								target="_blank"
								href="../pdf/resume.pdf"
								className="px-4 py-2 bg-blue-500 text-black rounded-lg font-medium hover:bg-blue-400"
							>
								View Resume
							</a>

							<Link
								to="/contact"
								className="px-4 py-2 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-black"
							>
								Hire Me
							</Link>
						</motion.div>
					</motion.div>

					{/* Right - Image */}
					<motion.div
						id="about-img-wrapper"
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
					>
						<motion.img
							id="aboutimg"
							whileHover={{
								scale: 1.03,
								boxShadow: "0 0 20px skyblue",
							}}
							initial={{ y: -200, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{
								type: "spring",
								stiffness: 120,
								damping: 6, // lower = more bounce
							}}
							src="../pics/coat pic.jpg"
							alt=""
							className="w-60 h-60 md:w-60 md:h-60 rounded-full object-cover flex justify-self-center"
						/>
					</motion.div>
				</div>
				<motion.div
					id="about-mid"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
				>
					{[
						{ label: "Projects", value: "7+" },
						{ label: "Skills", value: "8+" },
						{ label: "Freelancer ", value: "Status" },
						{ label: "Frontend Developer", value: "Designation" },
					].map((item) => (
						<motion.div
							initial={{
								x: 30,
								opacity: 0,
							}}
							animate={{
								x: 0,
								opacity: 1,
							}}
							transition={{
								delay: 0.3,
								duration: 0.5,
							}}
							id="about-status"
							key={item.label}
							className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 text-center items"
						>
							<h3
								id="about-status-head"
								className="text-2xl font-bold text-white"
							>
								{item.value}
							</h3>
							<p id="about-status-p" className="text-zinc-400 text-sm">
								{item.label}
							</p>
						</motion.div>
					))}
				</motion.div>
			</div>

			{/* Stats */}

			{/* Skills */}
			<motion.div
				id="about-skills"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.3,
					duration: 0.5,
				}}
				className="bg-zinc-900 border border-zinc-700 p-6 rounded-2xl mb-12"
			>
				<h2 className="text-xl font-semibold text-white mb-4">Skills</h2>

				<motion.div
					initial={{
						y: 20,
						opacity: 0,
					}}
					animate={{
						y: 0,
						opacity: 1,
					}}
					transition={{
						delay: 0.5,
						duration: 0.5,
					}}
					className="flex flex-wrap gap-3"
				>
					{[
						"HTML",
						"CSS",
						"JavaScript",
						"React",
						"Tailwind",
						"GSAP",
						"Motion",
						"Node.js",
						"Excel",
						"Canva",
						"Design",
					].map((skill) => (
						<span
							id="about-skills-text"
							key={skill}
							className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
						>
							{skill}
						</span>
					))}
				</motion.div>
			</motion.div>

			{/* Bottom CTA */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				className="text-center"
			>
				<p className="text-zinc-400 mb-10">
					I’m currently looking for frontend developer opportunities and
					freelance projects.
				</p>

				<Link
					to="/contact"
					className="px-6 py-3 bg-blue-500 text-black rounded-lg font-medium hover:bg-blue-400 "
				>
					Let’s Work Together
				</Link>
			</motion.div>
		</section>
	);
};

export default About;
