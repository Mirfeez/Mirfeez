import { FaLocationDot, FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="bg-[#0B0F1A] text-gray-300 px-6 py-10 mt-20">
			<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
				{/* Left */}
				<div>
					<h1 className="text-2xl font-bold text-blue-400 mb-2">
						&lt;Mirfeez /&gt;
					</h1>
					<p>Full Stack Developer.</p>
					<p className="text-sm text-gray-400">
						Open to freelance & full-time opportunities. Let’s build
						something amazing together
					</p>
					<div className="m-2 flex hover:text-white pointer">
						<span className="m-1">
							<FaLocationDot />
						</span>
						<a
							href="https://www.google.com/maps?q=Mangalore"
							target="_blank"
							rel="noopener noreferrer"
							className=""
						>
							{" "}
							Mangalore, India
						</a>
					</div>
					<div className="m-2 flex hover:text-white pointer">
						<span className="m-1">
							<FaSquarePhone />
						</span>
						<a href="tel:+916360836891">+91 63608 36891</a>
					</div>
					<div className="m-2 flex hover:text-white pointer">
						<span className="m-1">
							<MdEmail />
						</span>
						<a href="https://mail.google.com/mail/?view=cm&fs=1&to=mahammadmirfeez@gmail.com">
							mahammadmirfeez@gmail.com
						</a>
					</div>
				</div>

				{/* Center */}
				<div className="flex flex-col gap-2">
					<h2 className="text-white font-semibold mb-2">Quick Links</h2>
					<Link to="/" className="hover:text-blue-400">
						Home
					</Link>
					<Link	to="/works" className="hover:text-blue-400">
						Works
					</Link>
					<Link to="/about" className="hover:text-blue-400">
						About
					</Link>
					<Link to="/contact" className="hover:text-blue-400">
						Contact
					</Link>
				</div>
			</div>

			{/* Bottom */}
			<div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-500">
				© {new Date().getFullYear()} Mirfeez. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
