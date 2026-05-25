import { useRef, useState } from "react";
import { motion as Motion } from "motion/react";
import emailjs from "emailjs-com";

const Contact = () => {
	const formRef = useRef();
	const [loading, setLoading] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();
		setLoading(true);
		emailjs
			.sendForm(
				"service_wg5qg9i",
				"template_d8rzh4n",
				formRef.current,
				"kchI4O44k0IsrM-Qy",
			)
			.then(() => {
				alert("Your message sent sucessfully!");
				setLoading(false);
				formRef.current.reset();
			})
			.catch(() => {
				alert("Failed to send message right now. try again!!!.");
				setLoading(false);
			});
	};
	return (
		<section className="px-6 py-16 max-w-4xl mx-auto">
			{/* Title */}
			<Motion.h1
				initial={{ opacity: 0, y: -30 }}
				animate={{ opacity: 1, y: 0 }}
				className="text-3xl md:text-4xl font-bold text-center text-blue-400 mb-10"
			>
				Contact Me
			</Motion.h1>

			{/* Form */}
			<div className="w-full max-w-xl mx-auto">
				<Motion.form
					ref={formRef}
					onSubmit={sendEmail}
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="flex flex-col gap-5 bg-zinc-900/80 backdrop-blur-lg border border-zinc-700 p-6 md:p-8 rounded-2xl shadow-xl"
				>
					<Motion.input
						whileFocus={{ scale: 1.02 }}
						className="p-3 rounded-lg bg-zinc-800 text-white outline-none border border-transparent focus:border-blue-400 transition-all"
						type="text"
						name="name"
						required
						placeholder="Your Name..."
					/>

					<Motion.input
						whileFocus={{ scale: 1.02 }}
						className="p-3 rounded-lg bg-zinc-800 text-white outline-none border border-transparent focus:border-blue-400 transition-all"
						type="email"
						name="email"
						placeholder="Your Email..."
						required
					/>

					<Motion.textarea
						whileFocus={{ scale: 1.02 }}
						className="p-3 rounded-lg bg-zinc-800 text-white outline-none border border-transparent focus:border-blue-400 transition-all resize-none"
						name="message"
						rows="5"
						placeholder="Your message..."
					/>

					<Motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="relative bg-blue-400 text-black font-medium py-3 rounded-lg overflow-hidden"
					>
						{loading ? "Sending..." : "Send Message"}
						<Motion.span
							className="absolute inset-0 bg-white/20"
							initial={{ x: "-100%" }}
							whileHover={{ x: "100%" }}
							transition={{ duration: 0.6 }}
						/>
					</Motion.button>
				</Motion.form>
			</div>

			{/* Social Links */}
			<Motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3 }}
				className="flex justify-center gap-6 mt-10 text-blue-400"
			>
				<a
					href="https://www.linkedin.com/in/mahammad-mirfeez-1a5961243/"
					target="_blank"
				>
					LinkedIn
				</a>

				<a href="https://github.com/Mirfeez" target="_blank">
					GitHub
				</a>

				<a href="tel:+916360836891" target="_blank">
					Phone
				</a>

				<a
					href="https://api.whatsapp.com/send?phone=916360836891&text=Hi!%20Mirfeez!%20I%27m%20"
					target="_blank"
				>
					Whatsapp
				</a>

				<a
					href="https://mail.google.com/mail/?view=cm&fs=1&to=mahammadmirfeez@gmail.com"
					target="_blank"
				>
					Mail
				</a>
			</Motion.div>
		</section>
	);
};

export default Contact;
