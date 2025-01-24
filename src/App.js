import Meet from "./components/Meet";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Prices from "./components/pricePage/Prices.jsx";
import Services from "./components/Services";
import Slideshow from "./components/Slideshow";
import About from "./components/About";
import MoreInfo from "./components/getStarted/MoreInfo.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./globals.css";
import BackgroundWrapper from "./components/BackgroundWrapper";

function App() {
	return (
	  <div className="flex flex-col min-h-screen">
		{/* Navbar at the top */}
		<Router>
		  <Navbar />
  
		  {/* Main content should stretch to fill space */}
		  <main className="flex-grow">
			<Routes>
			  <Route
				path="/"
				element={
				  <>
					<Hero />
					<About />
					<Services />
					<Meet/>
					<Contact />
				  </>
				}
			  />
			  <Route path="/prices" element={<Prices />} />
			  <Route path="/form" element={<MoreInfo/>}/>
			</Routes>
		  </main>
  
		  {/* Footer stays at the bottom */}
		  <Footer />
		</Router>
	  </div>
	);
  }

export default App;
