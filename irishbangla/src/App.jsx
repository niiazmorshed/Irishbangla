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
      <div className="home-hero-stack">
        <Hero
          onConsultClick={scrollToContact}
          onServiceClick={scrollToServices}
        />
        <VisaSearchCard />
      </div>
      <ThinkingTrip />

      {/* ✅ WRAP SERVICES WITH REF */}
      <div ref={servicesRef}>
        <Services onEnquiryClick={scrollToContact} />
      </div>

      <Inspiration />
      <IrelandStays />
      <AboutUs />

      {/* ✅ CONTACT TARGET */}
      <ContactSection ref={contactRef} />
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
        </Route>
      </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
