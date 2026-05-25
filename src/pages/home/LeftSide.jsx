import React from "react";
import { motion as Motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import bed from '../../components/Navbar/bed.png'

const LeftSide = () => {
   return (
		<div className=" text-gray-300 ">
			{/* HERO */}
			<section className="flex flex-col justify-center items-center text-center px-6">
				<Motion.h1
					initial={{ y: -40, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.3, duration: 0.8 }}
					className="flex flex-wrap items-center justify-center gap-2 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
				>
					<span className="text-white">Hi, I’m</span>

					<span className="flex items-center gap-2">
						<span className="text-blue-400">Mirfeez</span>

						<img
							
							src={bed}
							alt="Mirfeez icon"
							className="w-20 h-20 sm:w-24 sm:h-24 md:w-26 md:h-26 object-contain drop-shadow-[0_0_10px_rgba(59,130,246,0.6)] scale-250"
						/>
					</span>
				</Motion.h1>

				<Motion.h2
					initial={{
						y: -50,
						opacity: 0,
					}}
					animate={{
						y: 0,
						opacity: 1,
					}}
					transition={{
						delay: 0.5,
						duration: 1,
					}}
					className="text-xl md:text-2xl mb-4 text-gray-400"
				>
					Full Stack Developer, Digital Product & Advanced Excel Dashboard
					Creator
				</Motion.h2>

				<Motion.p
					initial={{
						y: -50,
						opacity: 0,
					}}
					animate={{
						y: 0,
						opacity: 1,
					}}
					transition={{
						delay: 0.5,
						duration: 1,
					}}
					className="max-w-2xl mb-6 text-gray-400"
				>
					I build modern, responsive web applications, design business
					assets, and create powerful dashboards that help people track and
					improve their life.
				</Motion.p>

				<div className="flex gap-4">
					<Link
						to="/works"
						className="px-6 py-3 bg-blue-400 text-black rounded-lg font-bold hover:bg-black transition hover:text-blue-400 hover:border-2 hover:border-blue-400 hover:shadow-md hover:shadow-blue-400"
					>
						View My Work
					</Link>
				</div>
			</section>

			{/* WHAT I DO */}
		</div>
	);
}

export default LeftSide;