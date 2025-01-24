import React from "react";
import {
	CodeBracketIcon,
	ShoppingCartIcon,
	WrenchScrewdriverIcon,
	MagnifyingGlassIcon,
	ComputerDesktopIcon,
	ArrowRightIcon,
} from "@heroicons/react/24/outline"; // Added ArrowRightIcon
import Background from "../assets/services-bg.jpg";
import { useInView } from "react-intersection-observer";

const servicesData = [
	{
		title: "Web Design",
		description:
			"Every website needs two things: the technology to offer quality services to your customers and the design to provide an enjoyable visit and consistent professional image for your site.",
		icon: <CodeBracketIcon className="h-8 w-8 text-blue-600" />,
	},
	{
		title: "E-commerce",
		description:
			"We set up ecommerce platforms that drive people from the product they want to the checkout screen without unnecessary complications.",
		icon: <ShoppingCartIcon className="h-8 w-8 text-blue-600" />,
	},
	{
		title: "Website Maintenance",
		description:
			"Your website needs regular updates and backups to continue running smoothly for yourself and for customers.",
		icon: <WrenchScrewdriverIcon className="h-8 w-8 text-blue-600" />,
	},
	{
		title: "SEO",
		description:
			"Search Engine Optimization enhances a website’s visibility on search engines like Google.",
		icon: <MagnifyingGlassIcon className="h-8 w-8 text-blue-600" />,
	},
	{
		title: "IT Services",
		description:
			"We provide comprehensive IT solutions, from setting up secure networks to integrating home automation systems.",
		icon: <ComputerDesktopIcon className="h-8 w-8 text-blue-600" />,
	},
];

const Services = () => {
	const { ref: servicesRef, inView: isInView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<section
			id="services"
			className="relative py-12 mb-6"
			style={{
				backgroundImage: `url(${Background})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			{/* Overlay Tint */}
			{/* <div className="absolute inset-0 bg-black bg-opacity-10"></div> */}

			{/* Content */}
			<div className="relative text-center mb-10 z-10">
				<h1 className="text-4xl font-bold text-white">Our Services</h1>
			</div>
			<div
				className="container mx-auto px-6 relative z-10 max-w-[1280px]"
				ref={servicesRef}
			>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{servicesData.map((service, index) => (
						<div
							key={index}
							className={`p-6 transition duration-[2000ms] ease-in-out transform ${
								isInView
									? "translate-y-0 opacity-100"
									: "translate-y-10 opacity-0"
							}`}
						>
							<div className="flex items-center space-x-3 mb-4">
								{service.icon}
								<h3 className="text-2xl font-bold text-white">
									{service.title}
								</h3>
							</div>
							<p className="text-lg leading-relaxed text-white">
								{service.description}
							</p>
						</div>
					))}

					{/* Sixth Grid: Button */}
					<div
						className={`p-6 flex items-center justify-center transition duration-[2000ms] ease-in-out transform ${
							isInView
								? "translate-y-0 opacity-100"
								: "translate-y-10 opacity-0"
						}`}
					>
						<a
							href="#prices"
							className="flex items-center space-x-2 text-white text-lg font-bold px-6 py-3 rounded-md hover:scale-105 hover:transition hover:duration-700 group"
						>
							<span className="leading-none">See Our Prices Now</span>
							<ArrowRightIcon className="h-6 w-6 text-white transform transition-transform duration-300 group-hover:translate-x-2" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
