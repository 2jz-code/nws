import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Prices from "./components/Prices";
import Services from "./components/Services";
import Slideshow from "./components/Slideshow";
import "./globals.css"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Services/>
      {/* <Slideshow/> */}
      <About/>
      <Prices/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
