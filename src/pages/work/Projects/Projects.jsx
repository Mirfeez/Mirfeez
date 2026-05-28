import React from "react";
import { motion as Motion } from "motion/react";

import portfolio1 from "./projects-img/portfolio-1.png";
import portfolio2 from "./projects-img/portfolio-2.png";
import difference from "./projects-img/age-difference.png";
import bodyfat from "./projects-img/bodyfat.png";
import clock from "./projects-img/clock.png";
import cals from "./projects-img/cals.png";
import loveCals from "./projects-img/love-cals.png";
import dpt from "./projects-img/dpt.png";

const Projects = () => {
	const projectList = [
		{
			title: "Portfolio Website",
			category: "Portfolio Websites",
			img: portfolio1,
			client: "My Portfolio in 2025",
			webLink: "https://mirfeez.github.io/Mirfeez-portfolio/",
			info: "My first responsive portfolio with clean UI using HTML, CSS & JS.",
		},
		{
			title: "Portfolio Website",
			category: "Portfolio Websites",
			img: portfolio2,
			client: "My Portfolio in 2026",
			webLink: "https://mirfeez.vercel.app/",
			info: "A portfolio website exploring React, TailwindCSS, GSAP & Framer Motion.",
		},
		{
			title: "Age Difference Tester",
			category: "Utility Projects",
			img: difference,
			client: "Utility Project",
			webLink: "https://mirfeez.github.io/p1-difference/",
			info: "Check age difference between two people or calculate exact age.",
		},
		{
			title: "Body Fat Calculator",
			category: "Utility Projects",
			img: bodyfat,
			client: "Health Tool",
			webLink: "https://mirfeez.github.io/p2-calculate-body-fat/",
			info: "Calculate body fat using US Navy & BMI methods.",
		},
		{
			title: "Rotating Clock",
			category: "Fun Projects",
			img: clock,
			client: "Fun Project",
			webLink: "https://mirfeez.github.io/p3-clock/",
			info: "A real-time rotating clock with creative UI animation.",
		},
		{
			title: "Calculator",
			category: "Fun Projects",
			img: cals,
			client: "CASIO Inspired",
			webLink: "https://mirfeez.github.io/p4-calculator/",
			info: "A functional calculator inspired by CASIO design.",
		},
		{
			title: "Love Calculator",
			category: "Fun Projects",
			img: loveCals,
			client: "Fun Project",
			webLink: "https://p5-love-calculator.onrender.com/",
			info: "A fun calculator built using HTML, CSS & JavaScript.",
		},
		{
			title: "Freelancing Website",
			category: "Freelancing Websites",
			img: dpt,
			client: "DigiPixelTech",
			webLink: "https://digipixeltech.vercel.app/",
			info: "A responsive freelancing website built with React.",
		},
	];

	// Group Projects
	const groupedProjects = {};

	projectList.forEach((project) => {
		if (!groupedProjects[project.category]) {
			groupedProjects[project.category] = [];
		}

		groupedProjects[project.category].push(project);
	});

	return (
		<section
			id="projects"
			className="w-full min-h-screen px-4 sm:px-6 lg:px-10 py-16 max-w-7xl mx-auto"
		>
			{/* Title */}
			<Motion.h1
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
				My Projects
			</Motion.h1>

			{/* Categories */}
			{Object.entries(groupedProjects).map(([category, projects]) => (
				<div key={category} className="mb-20">
					{/* Category Heading */}
					<Motion.h2
						initial={{ opacity: 0, y: -40 }}
						whileInView={{ opacity: 1, y: 0 }}
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
						{category}
					</Motion.h2>

					{/* Cards */}
					<div
						className="
							grid
							grid-cols-2
							sm:grid-cols-2
							lg:grid-cols-3
							gap-8
						"
					>
						{projects.map((project, idx) => (
							<Motion.div
								key={idx}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.2 }}
								viewport={{ once: true }}
								whileHover={{
									y: -10,
									scale: 1.02,
								}}
								className="
									bg-zinc-900
									border
									border-zinc-800
									rounded-xl
									overflow-hidden
									shadow-md
									hover:border-blue-400
									transition-all
									duration-300
									flex
									flex-col
									max-w-[320px]
									mx-auto
								"
							>
								{/* Image */}
								<div className="overflow-hidden">
									<Motion.img
										initial={{
											opacity: 0,
										}}
										whileInView={{
											opacity: 1,
										}}
										transition={{
											duration: 0.4,
											delay: 0.2,
										}}
										viewport={{
											once: true,
										}}
										src={project.img}
										alt={project.title}
										className="
											w-full
											lg:h-40
											object-cover
											hover:scale-105
											transition-transform
											duration-500
										"
									/>
								</div>

								{/* Content */}
								<div className="p-4 flex flex-col flex-1">
									<h3
										className="
											text-lg
											font-semibold
											text-white
											mb-1
										"
									>
										{project.title}
									</h3>

									<p className="text-blue-400 text-xs mb-2">
										{project.client}
									</p>

									<p
										className="
											text-zinc-400
											text-sm
											leading-relaxed
											flex-1
										"
									>
										{project.info}
									</p>

									{/* Button */}
									<a
										href={project.webLink}
										target="_blank"
										rel="noopener noreferrer"
										className="
											mt-4
											inline-flex
											items-center
											justify-center
											px-4
											py-2
											rounded-lg
											bg-blue-500
											text-sm
											text-black
											font-semibold
											hover:bg-blue-400
											transition-all
											duration-300
										"
									>
										View Project
									</a>
								</div>
							</Motion.div>
						))}
					</div>
				</div>
			))}
		</section>
	);
};

export default Projects;
