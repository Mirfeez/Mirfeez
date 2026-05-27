import { motion as Motion } from "framer-motion";

const Skills = () => {
	const skillsData = [
		{
			title: "Frontend",
			text: "text-blue-400",
			bg: "bg-blue-500/10",
			border: "border-blue-500/20",
			skills: [
				"HTML",
				"CSS",
				"JavaScript",
				"TypeScript",
				"React js",
				"Next js",
				"Tailwind CSS",
				"GSAP",
				"Motion",
				"UI/UX Design",
				"Responsive Design",
			],
		},
		{
			title: "Backend",
			text: "text-green-400",
			bg: "bg-green-500/10",
			border: "border-green-500/20",
			skills: ["Node.js", "Express.js", "REST API", "MERN Stack"],
		},
		{
			title: "Database",
			text: "text-yellow-400",
			bg: "bg-yellow-500/10",
			border: "border-yellow-500/20",
			skills: ["MongoDB", "MySQL"],
		},
		{
			title: "Tools",
			text: "text-pink-400",
			bg: "bg-pink-500/10",
			border: "border-pink-500/20",
			skills: [
				"Git",
				"GitHub",
				"VS Code",
				"Postman",
				"Vercel",
				"Netlify",
				"Render",
			],
		},
		{
			title: "Other Skills",
			text: "text-purple-400",
			bg: "bg-purple-500/10",
			border: "border-purple-500/20",
			skills: [
				"Canva",
				"Advanced Excel",
				"Dashboard Creation",
				"Python"
			],
		},
	];

	return (
		<section
			id="skills"
			className="
				w-full
				max-w-7xl
				mx-auto
				px-4
				sm:px-6
				lg:px-8
				py-16
			"
		>
			{/* Heading */}
			<Motion.div
				initial={{ opacity: 0, y: -30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="mb-14 text-center"
			>
				<h1
					className="
						text-3xl
						sm:text-4xl
						md:text-5xl
						font-bold
						text-white
						mb-4
					"
				>
					Skills & Technologies
				</h1>

				<p
					className="
						text-zinc-400
						text-sm
						sm:text-base
						max-w-2xl
						mx-auto
					"
				>
					Technologies and Tools that I use to build what i do.
				</p>
			</Motion.div>

			{/* Grid */}
			<div
				className="
					grid
					grid-cols-1
					sm:grid-cols-2
					lg:grid-cols-3
					gap-5
				"
			>
				{skillsData.map((category, index) => (
					<Motion.div
						key={index}
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.2,
							delay: 0.1,
						}}
						viewport={{ once: true }}
						whileHover={{
							y: -6,
							scale: 1.02,
						}}
						className={`
							${category.bg}
							border
							${category.border}
							rounded-3xl
							p-5
							sm:p-6
							min-w-0
						`}
					>
						{/* Category Title */}
						<Motion.h2
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{
								duration: 0.4,
								delay: 0.1,
							}}
							viewport={{ once: true }}
							className={`
								text-xl
								font-semibold
								mb-5
								${category.text}
							`}
						>
							{category.title}
						</Motion.h2>

						{/* Skills */}
						<div className="flex flex-wrap gap-2">
							{category.skills.map((skill, idx) => (
								<Motion.span
									key={idx}
									initial={{ opacity: 0, scale: 0, x: 100 }}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									transition={{
										duration: 0.3,
										delay: idx * 0.1,
									}}
									viewport={{ once: true }}
									className={`
										px-3
										py-2
										rounded-full
										text-xs
										sm:text-sm
										font-medium
										wrap-break-word
										border
										${category.bg}
										${category.border}
										${category.text}
									`}
								>
									{skill}
								</Motion.span>
							))}
						</div>
					</Motion.div>
				))}
			</div>
		</section>
	);
};

export default Skills;
