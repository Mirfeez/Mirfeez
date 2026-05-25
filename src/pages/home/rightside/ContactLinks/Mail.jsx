import { IoIosMail } from "react-icons/io";
import { motion as Motion } from "motion/react";


const Mail = () => {
	return (
		<Motion.div
			whileHover={{
				scale: 1.3,
				boxShadow: "0 0 10px 5px rgba(59, 130, 246, 0.4)",
				borderRadius: "50%",
			}}
			transition={{ type: "spring", stiffness: 200 }}
			className="w-8 h-8 border-2 border-blue-400  rounded-t-xl rounded-b-xl flex justify-center items-center hover:bg-blue-400 hover:text-black text-yellow-500 "
		>
			<a
				target="_blank"
				href="https://mail.google.com/mail/?view=cm&fs=1&to=mahammadmirfeez@gmail.com"
			>
				<IoIosMail />
			</a>
		</Motion.div>
	);
};

export default Mail;
