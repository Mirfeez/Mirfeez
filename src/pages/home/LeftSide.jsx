import React from "react";
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";


const LeftSide = () => {
   return (
		<div className=" text-gray-300 ">
			{/* HERO */}
			<section className="flex flex-col justify-center items-center text-center px-6">
				<motion.h1
					animate={{
						y: 0,
						opacity: 1,
					}}
					initial={{
						y: -50,
						opacity: 0,
					}}
					transition={{
						delay: 0.5,
						duration: 1,
					}}
					className="text-4xl md:text-6xl font-bold mb-4"
				>
					Hi, I’m <span className="text-blue-400">Mirfeez</span> 👋
				</motion.h1>

				<motion.h2
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
				</motion.h2>

				<motion.p
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
				</motion.p>

				<div className="flex gap-4">
					<Link to='/works' className="px-6 py-3 bg-blue-400 text-black rounded-lg font-bold hover:bg-black transition hover:text-blue-400 hover:border-2 hover:border-blue-400 hover:shadow-md hover:shadow-blue-400">
						View My Work
					</Link>
					
				</div>
			</section>

			{/* WHAT I DO */}
		</div>
	);
}

export default LeftSide;