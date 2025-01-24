import React from "react";
import Placeholder from "../assets/placeholder.jpg";

const About = () => {
	return (
		<section
			id="about"
			className="bg-transparent py-12"
		>
			<div className="container mx-auto px-6 max-w-[1280px]">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					{/* Image Section */}
					<div>
						<img
							src={Placeholder}
							alt="About Us"
							className="w-full rounded-lg shadow-lg"
						/>
					</div>
					{/* Text Section */}
					<div>
						<h2 className="text-4xl font-bold text-gray-800 mb-6 text-center md:text-left">
							Our Mission
						</h2>
						<p className="text-lg text-gray-600 leading-relaxed text-justify">
							Our mission is to empower businesses and individuals with the
							tools and resources they need to thrive in an ever-changing world.
							We focus on collaboration, innovation, and a commitment to
							excellence in every project we undertake. By providing tailored
							solutions and fostering strong partnerships, we aim to create a
							positive impact that extends beyond expectations and helps our
							clients achieve their goals.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
