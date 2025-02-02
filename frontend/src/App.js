import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Meet from "./components/Meet";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Prices from "./components/pricePage/Prices.jsx";
import Services from "./components/Services";
import About from "./components/About";
import MoreInfo from "./components/getStarted/MoreInfo.jsx"
import PriceHero from "./components/pricePage/PriceHero.jsx";
import PriceIntro from "./components/pricePage/PriceIntro.jsx";
import WhatToExpect from "./components/pricePage/WhatToExpect.jsx";
import Loader from "./components/utility/Loader.jsx";
import "./globals.css"

const AppContent = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust delay if needed

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Loader Animation Between Page Transitions */}
      <main className="flex-grow">
        {loading ? (
          <div className="flex justify-center items-center min-h-screen">
            <Loader />
          </div>
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Services />
                  <Meet />
                  <Contact />
                </>
              }
            />
            <Route
              path="/prices"
              element={
                <>
                  <PriceHero />
                  <PriceIntro />
                  <Prices />
                  <WhatToExpect />
                </>
              }
            />
            <Route path="/form" element={<MoreInfo />} />
          </Routes>
        )}
      </main>

      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
