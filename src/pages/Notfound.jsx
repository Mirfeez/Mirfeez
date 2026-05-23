import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
	const location = useLocation();

	return (
		<section
			className="
				min-h-screen
				bg-black
				text-white
				flex
				items-center
				justify-center
				px-2
				sm:px-4
				overflow-hidden
			"
		>
			<motion.div
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1 }}
				className="
					w-full
					max-w-2xl
					text-center
					px-2
				"
			>
				{/* 404 */}
				<motion.h1
					initial={{ y: -50 }}
					animate={{ y: 0 }}
					transition={{
						type: "spring",
						stiffness: 120,
					}}
					className="
						text-5xl
						[min-width:250px]:text-6xl
						sm:text-7xl
						md:text-8xl
						lg:text-9xl
						font-black
						text-blue-400
						drop-shadow-lg
						wrap-break-word
					"
				>
					404
				</motion.h1>

				{/* Meme Image */}
				<motion.img
					src="https://images.openai.com/static-rsc-4/_NL7vV7qMsVjNIc9s1RzQrEKIZdv3jQJ5y-hYptIV2b0P92eUCbbG6Z3g0IrNhxhkkEkrCLG0akzf1AKbTSWooKfjhNTyoOcbnQfu_dT4Y_60Qg9vcCf78xV2TnbeudZwsXGTz7u01lftS3dK0l-aaqDfTfpx7bvbieCk6az0RE?purpose=inline"
					alt="404 meme"
					initial={{ opacity: 0, y: 30 }}
					animate={{
						opacity: 1,
						y: [0, -10, 0],
					}}
					transition={{
                  duration: 1,
                  repeat:1
					}}
					className="
						w-36
						[min-width:250px]:w-44
						sm:w-56
						md:w-64
						lg:w-72
						max-w-full
						mx-auto
						mt-6
						rounded-2xl
						border
						border-zinc-800
						shadow-2xl
						object-cover
					"
				/>

				{/* Funny Text */}
				<motion.h2
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3 }}
					className="
						mt-6
						text-lg
						[min-width:250px]:text-xl
						sm:text-2xl
						md:text-3xl
						font-bold
						wrap-break-word
					"
				>
					SORRY
				</motion.h2>

				{/* Route Label */}
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5 }}
					className="
						mt-4
						text-zinc-400
						text-xs
						[min-width:250px]:text-sm
						sm:text-base
						wrap-break-word
						px-2
					"
				>
					No page for:
				</motion.p>

				{/* Route */}
				<p
					className="
						text-blue-400
						mt-2
						font-mono
						text-xs
						[min-width:250px]:text-sm
						sm:text-base
						break-all
						px-2
					"
				>
					{location.pathname}
				</p>

				{/* Button */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.7 }}
					className="mt-8"
				>
					<Link
						to="/"
						className="
							inline-block
							px-4
							py-2
							sm:px-6
							sm:py-3
							bg-blue-500
							text-black
							text-sm
							sm:text-base
							font-semibold
							rounded-xl
							hover:bg-blue-400
							transition-all
							duration-300
							hover:scale-105
							wrap-break-word
						"
					>
						Return Home
					</Link>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default NotFound;
