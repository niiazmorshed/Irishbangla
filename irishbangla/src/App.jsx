import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRef } from "react";

import Hero from "./components/Hero";
import ThinkingTrip from "./components/thinkingtrip";
import Inspiration from "./components/Inspiration";
import IrelandStays from "./components/IrelandStays";
import VisaSearchCard from "./components/VisaSearchCard";
import VisaDetails from "./pages/VisaDetails";
import Services from "./components/Service";
import TrackerPage from "./pages/TrackerPage";
import ContactSection from "./components/contact";
import AboutUs from "./components/aboutus";
import IrelandTravelProcess from "./components/IrelandTravelProcess";
import SustainableIreland from "./pages/SustainableIreland";
import IrelandWeather from "./pages/irelandweather";
import BookTrip from "./pages/BookTrip";
import InformationTopic from "./pages/InformationTopic";
import IrelandTourismGuide from "./pages/IrelandTourismGuide";
import TourismIrelandHomeSection from "./components/TourismIrelandHomeSection";
import { ScrollReveal } from "./components/ScrollReveal";
import Layout from "./components/Layout";
import AdminLayout from "./components/AdminLayout";
import { AuthProvider } from "./contexts/AuthContext";
import AdminTrackerConsole from "./pages/AdminTrackerConsole";
import { ADMIN_CONSOLE_PATH } from "./constants/adminRoute";

// ✅ Home component
function Home() {
  const contactRef = useRef(null);
  const servicesRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <ScrollReveal as="div" className="home-hero-stack" y={18} amount={0.08}>
        <Hero onConsultClick={scrollToContact} onServiceClick={scrollToServices} />
        <VisaSearchCard />
      </ScrollReveal>

      <ScrollReveal y={24}>
        <ThinkingTrip />
      </ScrollReveal>
      <ScrollReveal y={24} delay={0.03}>
        <AboutUs onEnquiryClick={scrollToContact} />
      </ScrollReveal>

      <ScrollReveal ref={servicesRef} y={24} delay={0.04}>
        <Services onEnquiryClick={scrollToContact} />
      </ScrollReveal>

      <ScrollReveal y={26} delay={0.02}>
        <Inspiration />
      </ScrollReveal>
      <ScrollReveal y={26} delay={0.04}>
        <IrelandStays />
      </ScrollReveal>
      <ScrollReveal y={26} delay={0.05}>
        <TourismIrelandHomeSection />
      </ScrollReveal>

      <ScrollReveal ref={contactRef} y={22} delay={0.02}>
        <ContactSection />
      </ScrollReveal>
    </>
  );
}

// ✅ App component
function App() {
  return (
    <Router>
      <AuthProvider>
      <Routes>
        <Route path={ADMIN_CONSOLE_PATH} element={<AdminLayout />}>
          <Route index element={<AdminTrackerConsole />} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} /> {/* only one / route */}
          <Route path="/book-trip" element={<BookTrip />} />
          <Route path="/visa-details" element={<VisaDetails />} />
          <Route path="/information/:topic" element={<InformationTopic />} />
          <Route path="/track/:trackingId" element={<TrackerPage />} />
          <Route path="/ireland-travel-process" element={<IrelandTravelProcess />} />
          <Route path="/ireland-weather" element={<IrelandWeather />} />
          <Route path="/sustainable-ireland" element={<SustainableIreland />} />
          <Route path="/tourism-ireland/guide" element={<IrelandTourismGuide />} />
        </Route>
      </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
