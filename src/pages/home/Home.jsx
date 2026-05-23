import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./rightside/RightSide";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			{/* HERO */}
			<section
				id="home-hero"
				className="
					flex flex-col-reverse md:flex-row 
					items-center justify-between 
				"
			>
				{/* left side */}
				<div className="w-full md:w-1/2">
					<LeftSide />
				</div>

				{/* right side */}
				<div className="w-full md:w-1/2 flex justify-center">
					<RightSide />
				</div>
			</section>

			{/* WHAT I DO */}
			<section className="py-16 md:py-20 px-6 max-w-6xl mx-auto">
				<h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-12 text-white">
					What I Do ...
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
					{/* Web Dev */}
					<div className="bg-[#111827] p-5 md:p-6 rounded-xl hover:shadow-lg hover:shadow-blue-500/10 transition">
						<h3 className="text-lg md:text-xl font-semibold text-blue-400 mb-3">
							💻 Full Stack Development
						</h3>
						<p className="text-gray-400 text-sm md:text-base">
							I create modern, responsive MERN Stack websites with
							amazing creative gsap & framer-motion animations with Fine
							UI/UX Designs with creative Dashboards for Admin/User.
						</p>
					</div>

					{/* Design */}
					<div className="bg-[#111827] p-5 md:p-6 rounded-xl hover:shadow-lg hover:shadow-blue-500/10 transition">
						<h3 className="text-lg md:text-xl font-semibold text-blue-400 mb-3">
							🎨 Design Services
						</h3>
						<p className="text-gray-400 text-sm md:text-base">
							I design brochures, business cards, and invitation cards
							tailored to your brand using Canva.
						</p>
					</div>

					{/* Dashboard */}
					<div className="bg-[#111827] p-5 md:p-6 rounded-xl hover:shadow-lg hover:shadow-blue-500/10 transition">
						<h3 className="text-lg md:text-xl font-semibold text-blue-400 mb-3">
							📊 Smart Dashboards
						</h3>
						<p className="text-gray-400 text-sm md:text-base">
							I build advanced tracking dashboards for habits, expenses,
							fitness, and income with analytics and customization.
						</p>
					</div>
				</div>
			</section>

			{/* SERVICES */}
			<section className="py-16 md:py-20 px-6 max-w-5xl mx-auto text-center">
				<h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-white">
					Services
				</h2>

				<div className="space-y-5 md:space-y-6 text-gray-400 text-sm md:text-base">
					<p>
						<span className="text-blue-400 font-semibold">
							Website Development:
						</span>{" "}
						Custom responsive websites with modern UI.
					</p>

					<p>
						<span className="text-blue-400 font-semibold">
							Dashboard Creation:
						</span>{" "}
						Advanced tracking systems with analytics and custom features.
					</p>

					<p>
						<span className="text-blue-400 font-semibold">
							Business Design:
						</span>{" "}
						Brochures, business cards, and invitation designs.
					</p>

					<p className="text-blue-400">
						Custom solutions available based on your needs.
					</p>
				</div>
			</section>

			{/* WHY ME */}
			<section className="py-16 md:py-20 px-6 bg-[#111827] text-center">
				<h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white">
					Why Choose Me
				</h2>

				<p className="max-w-2xl mx-auto text-gray-400 text-sm md:text-base">
					I focus on building solutions that are not just visually clean,
					but also practical and useful in real life. Every project is
					created with attention to detail, usability, and performance.
				</p>
			</section>

			{/* CTA */}
			<section className="py-16 md:py-20 px-6 text-center">
				<h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
					Let’s Work Together
				</h2>

				<p className="text-gray-400 mb-6 text-sm md:text-base">
					Have an idea, need a website, or want a custom dashboard?
				</p>

				<Link
					to="/contact"
					className="px-5 md:px-6 py-2.5 md:py-3 bg-blue-400 text-black rounded-lg hover:bg-blue-500 transition"
				>
					Contact Me
				</Link>
			</section>
		</div>
	);
};

export default Home;
