import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRef } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ThinkingTrip from "./components/thinkingtrip";
import Inspiration from "./components/Inspiration";
import VisaSearchCard from "./components/VisaSearchCard";
import VisaDetails from "./pages/VisaDetails";
import Services from "./components/Service";
import TrackerPage from "./pages/TrackerPage";
import ContactSection from "./components/contact";
import AboutUs from "./components/aboutus";
import IrelandTravelProcess from "./components/IrelandTravelProcess";
import Footer from "./components/Footer";
import SustainableIreland from "./pages/SustainableIreland";
import IrelandWeather from "./pages/irelandweather";

// ✅ Home component
function Home() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Hero />
      <VisaSearchCard />
      <ThinkingTrip />
      <Services onEnquiryClick={scrollToContact} />
      <Inspiration />
      <AboutUs />
      <ContactSection ref={contactRef} /> {/* ✅ attach ref */}
      <Footer />
    </>
  );
}

// ✅ App component
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} /> {/* only one / route */}
        <Route path="/visa-details" element={<VisaDetails />} />
        <Route path="/track/:trackingId" element={<TrackerPage />} />
        <Route path="/ireland-travel-process" element={<IrelandTravelProcess />} />
        <Route path="/ireland-weather" element={<IrelandWeather />} />
        <Route path="/sustainable-ireland" element={<SustainableIreland />} />
      </Routes>
    </Router>
  );
}

export default App;
