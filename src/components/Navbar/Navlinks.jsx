import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion as Motion } from "motion/react";

const Navlinks = () => {
	const [open, setOpen] = useState(false);
	const navClass = ({ isActive }) =>
		`pageLinks cursor-pointer rounded-md w-25 h-10 text-center transition-colors items-center flex justify-center gap-1 text-sm md:text-base 
   hover:bg-blue-900 font-bold
   ${isActive ? "bg-blue-500 text-white" : ""}`;

	const navLinks = [
		{ name: "Home", path: "/" },
		{ name: "Works", path: "/works" },
		{ name: "About", path: "/about" },
		{ name: "Contact", path: "/contact" },
	];
	return (
		<>
			<Motion.nav className="hidden md:flex gap-4 font-medium">
				{navLinks.map((link, i) => (
					<NavLink key={i} to={link.path} className={navClass}>
						{link.name}
					</NavLink>
				))}
			</Motion.nav>
			<Motion.button
				animate={{
					rotate: open ? 360 : 0,
					x: open ? -47 : 0, // move slightly left
				}}
				transition={{ duration: 0.3 }}
				className="md:hidden flex flex-col gap-1"
				onClick={() => setOpen(!open)}
			>
				{open ? (
					/* Close Icon */
					<svg
						className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				) : (
					/* Hamburger Icon */
					<svg
						className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 "
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				)}
			</Motion.button>

			{open && (
				<Motion.div
					initial={{
						x: 100,
						opacity: 0,
					}}
					animate={{
						x: open ? 0 : 100,
						opacity: open ? 1 : 0,
					}}
					transition={{ duration: 0.2, delay: 0 }}
					className="md:hidden absolute right-0 top-full bg-black py-5 px-5 rounded-xl flex flex-col gap-3 m-5"
				>
					{navLinks.map((link, i) => (
						<NavLink key={i} to={link.path} className={navClass}>
							{link.name}
						</NavLink>
					))}
				</Motion.div>
			)}
		</>
	);
};

export default Navlinks;
