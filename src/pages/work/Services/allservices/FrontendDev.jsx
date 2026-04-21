import { FaCode, FaReact, FaPaintBrush, FaBriefcase } from "react-icons/fa";
import ServiceCard from "../ServiceCard";

const FrontendDev = () => {
	return (
		<div className="m-5">
			<h1 className="flex text-2xl m-5 text-blue-400 font-bold ">Web Development</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				<ServiceCard
					icon={<FaCode />}
					title="Frontend Development"
					desc="Build responsive and modern websites using HTML, CSS, and JavaScript."
				/>

				<ServiceCard
					icon={<FaReact />}
					title="React Apps"
					desc="Create dynamic web applications with reusable components and pages. Use react-router-dom for page links."
				/>
				<ServiceCard
					icon={<FaBriefcase />}
					title="Responsive Portfolios"
					desc="Create Portfolio website with reusable components."
				/>

				<ServiceCard
					icon={<FaPaintBrush />}
					title="UI Implementation"
					desc="Convert designs into pixel-perfect websites."
				/>
			</div>
		</div>
	);
};

export default FrontendDev;
