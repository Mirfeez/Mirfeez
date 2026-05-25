import { FaGithub } from "react-icons/fa";
import { motion as Motion } from "motion/react";

const Github = () => {
	return (
		<Motion.div
			whileHover={{
				boxShadow: "0 0 10px 5px rgba(59, 130, 246, 0.4)",
				scale: 1.3,
				borderRadius:'50%'
			}}
			transition={{ type: "spring", stiffness: 200 }}
			className="w-8 h-8 border-2 border-blue-400  rounded-t-3xl flex justify-center items-center hover:bg-blue-400 hover:text-black text-white "
		>
			<a target="_blank" href="https://github.com/Mirfeez">
				<FaGithub />
			</a>
		</Motion.div>
	);
};

export default Github;
