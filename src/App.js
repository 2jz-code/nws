import Meet from "./components/Meet";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Prices from "./components/Prices";
import Services from "./components/Services";
import Slideshow from "./components/Slideshow";
import About from "./components/About";

import "./globals.css";
import BackgroundWrapper from "./components/BackgroundWrapper";

function App() {
	return (
		<div className="App">
			<Navbar />
			<BackgroundWrapper>
				<Hero />
				<About />
			</BackgroundWrapper>
			<Services />
			{/* <Slideshow/> */}
			<Meet />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
