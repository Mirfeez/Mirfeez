import { servicesData } from "./ServicesData";
import ServiceCard from "./ServiceCard";

const Services = () => {
	return (
		<div className="px-6 py-12">
			{servicesData.map((section, i) => (
				<div key={i} className="mb-12">
					{/* Category Title */}
					<h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
						{section.category}
					</h2>

					{/* Cards */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{section.items.map((item, idx) => (
							<ServiceCard
								key={idx}
								icon={item.icon}
								title={item.title}
								desc={item.desc}
							/>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default Services;
