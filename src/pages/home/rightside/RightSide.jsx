import Github from "./ContactLinks/Github";
import Linkedin from "./ContactLinks/Linkedin";
import Whatsapp from "./ContactLinks/Whatsapp";
import Phone from "./ContactLinks/Phone";
import Contact from "./../../Contact";
import { motion as Motion } from "motion/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaArrowAltCircleDown } from "react-icons/fa";
import Mail from './ContactLinks/Mail';

const RightSide = () => {

	
	useGSAP(() => {
		gsap.to(".ship", {
			y: 15,
			duration: 1.5,
			delay: 3,
			ease: "sine.inOut",
			yoyo: true,
			repeat: -1,
		});

		gsap.to("#rotate", {
			rotate: 360,
			duration: 5,
		});

		gsap.to("#line", {
			scale: 0,
			delay: 0,
			duration: 5,
		});

	});

	return (
		<div
			id="rotate"
			className="ship w-full h-[85vh] flex gap-10 justify-center items-center text-center px-6"
		>
			<div>
				<Motion.div
					initial={{
						x: -120,
						y: 500,
						
					}}
					animate={{
						x: 5,
						y: -35,
						scale:1.5,
					}}
					whileTap={{
						scale: 0.7,
					}}
					transition={{
						delay: 0.5,
						duration: 2,
					}}
				>
					<Linkedin />
				</Motion.div>
			</div>

			<div id="line" className="absolute h-15 w-1 bg-blue-400"></div>

			<div>
				<Motion.div
					initial={{
						x: 500,
						y: 500,
						
					}}
					animate={{
						x: -10,
						y: 115,
						scale:1.5,
					}}
					whileTap={{
						scale: 0.7,
					}}
					transition={{
						delay: 0.5,
						duration: 2,
					}}
				>
					<Github />
				</Motion.div>
			</div>

			<div
				id="line"
				className="absolute h-15 w-1 bg-blue-400 rotate-90"
			></div>

			<div>
				<Motion.div
					initial={{
						x: -500,
						y: 100,
						
					}}
					animate={{
						x: 0,
						y: -150,
						scale:1.5,
					}}
					whileTap={{
						scale: 0.7,
					}}
					transition={{
						delay: 0.5,
						duration: 2,
					}}
				>
					<Whatsapp />
				</Motion.div>
			</div>

			<div>
				<Motion.div
					initial={{
						x: 500,
						y: -250,
					}}
					animate={{
						x: 15,
						y: 115,
						scale:1.5,
					}}
					whileTap={{
						scale: 0.7,
					}}
					transition={{
						delay: 0.5,
						duration: 2,
					}}
				>
					<Phone />
				</Motion.div>
			</div>

			<div>
				<Motion.div
					initial={{
						x: -350,
						y: -500,
						
					}}
					animate={{
						x: 0,
						y: -35,
						scale:1.5,
					}}
					whileTap={{
						scale: 0.7,
					}}
					transition={{
						delay: 0.5,
						duration: 2,
					}}
				>
					<Mail />
				</Motion.div>
			</div>
		</div>
	);
};

export default RightSide;
