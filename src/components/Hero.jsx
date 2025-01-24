import React, { useEffect, useState } from "react";
import HeroPic from "../assets/hero-pic.png";

const Hero = () => {
	const [inView, setInView] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const heroSection = document.getElementById("home");
			if (heroSection) {
				const rect = heroSection.getBoundingClientRect();
				if (rect.top <= window.innerHeight * 0.8) {
					setInView(true);
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Initial check
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section
			className="bg-transparent dark:bg-gray-900 mt-10"
			id="home"
		>
			<div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
				{/* Left Content */}
				<div className="mr-auto place-self-center lg:col-span-7">
					{/* Fade-in H1 */}
					<h1
						className={`max-w-2xl mb-4 text-4xl text-gray-800 font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white transition-all duration-[1500ms] ease-out ${
							inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
						}`}
					>
						Payments tool for software companies
					</h1>

					{/* Fade-in Paragraph */}
					<p
						className={`max-w-2xl mb-6 text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 transition-all duration-[1500ms] ease-out delay-300 ${
							inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
						}`}
					>
						From checkout to global sales tax compliance, companies around the
						world use Flowbite to simplify their payment stack.
					</p>

					{/* Fade-in Buttons */}
					<div
						className={`transition-all duration-[1500ms] ease-out delay-600 ${
							inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
						}`}
					>
						<a
							href="#"
							className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
						>
							Get started
							<svg
								className="w-5 h-5 ml-2 -mr-1"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a 1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
									clipRule="evenodd"
								></path>
							</svg>
						</a>
					</div>
				</div>

				{/* Right Image */}
				<div
					className={`hidden lg:mt-0 lg:col-span-5 lg:flex transition-all duration-[1500ms] ease-out delay-900 ${
						inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
					}`}
				>
					<img
						src={HeroPic}
						alt="mockup"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
