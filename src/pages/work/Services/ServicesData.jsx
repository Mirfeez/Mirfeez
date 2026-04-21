import {
	FaCode,
	FaReact,
	FaMobileAlt,
	FaChartBar,
	FaTable,
	FaPaintBrush,
	FaImage,
} from "react-icons/fa";

export const ServicesData = [
	{
		category: "Web Development",
		items: [
			{
				title: "Frontend Development",
				desc: "Build modern websites using HTML, CSS, and JavaScript.",
				icon: <FaCode />,
			},
			{
				title: "React Apps",
				desc: "Create dynamic apps with reusable components.",
				icon: <FaReact />,
			},
			{
				title: "Responsive Design",
				desc: "Mobile-friendly layouts for all devices.",
				icon: <FaMobileAlt />,
			},
		],
	},
	{
		category: "Excel & Data Dashboards",
		items: [
			{
				title: "Dashboard Creation",
				desc: "Interactive dashboards using Excel.",
				icon: <FaChartBar />,
			},
			{
				title: "Data Visualization",
				desc: "Charts and graphs for better insights.",
				icon: <FaChartBar />,
			},
			{
				title: "Data Cleaning",
				desc: "Organize and structure raw data.",
				icon: <FaTable />,
			},
		],
	},
	{
		category: "Graphic Design",
		items: [
			{
				title: "Posters & Social Media",
				desc: "Creative designs for online platforms.",
				icon: <FaImage />,
			},
			{
				title: "Business Cards",
				desc: "Professional visiting card designs.",
				icon: <FaPaintBrush />,
			},
			{
				title: "Invitations & Brochures",
				desc: "Design for events and promotions.",
				icon: <FaPaintBrush />,
			},
		],
	},
];
