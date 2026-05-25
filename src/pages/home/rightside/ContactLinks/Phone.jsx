import { FaPhone } from "react-icons/fa";
import { motion as Motion } from "motion/react";

const Phone = () => {
	return (
		<Motion.div
			whileHover={{
				boxShadow: "0 0 10px 5px rgba(59, 130, 246, 0.4)",
				scale: 1.3,
				borderRadius:'50%'
			}}
			transition={{ type: "spring", stiffness: 200 }}
			className="w-8 h-8 border-2 border-blue-400 flex justify-center items-center hover:bg-blue-400 hover:text-black  rounded-br-lg rounded-tl-sm  text-red-600
			"
		>
			<a target="_blank" href="tel:+916360836891">
				<FaPhone />
			</a>
		</Motion.div>
	);
};

export default Phone;
