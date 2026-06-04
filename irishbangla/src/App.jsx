import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense, useRef } from "react";

import Hero from "./components/Hero";
import VisaSearchCard from "./components/VisaSearchCard";
import { ScrollReveal } from "./components/ScrollReveal";
import Layout from "./components/Layout";
import { ADMIN_CONSOLE_PATH } from "./constants/adminRoute";

const ThinkingTrip = lazy(() => import("./components/thinkingtrip"));
const Inspiration = lazy(() => import("./components/Inspiration"));
const IrelandStays = lazy(() => import("./components/IrelandStays"));
const Services = lazy(() => import("./components/Service"));
const ContactSection = lazy(() => import("./components/contact"));
const AboutUs = lazy(() => import("./components/aboutus"));
const TourismIrelandHomeSection = lazy(() => import("./components/TourismIrelandHomeSection"));

const VisaDetails = lazy(() => import("./pages/VisaDetails"));
const TrackerPage = lazy(() => import("./pages/TrackerPage"));
const IrelandTravelProcess = lazy(() => import("./components/IrelandTravelProcess"));
const SustainableIreland = lazy(() => import("./pages/SustainableIreland"));
const IrelandWeather = lazy(() => import("./pages/irelandweather"));
const BookTrip = lazy(() => import("./pages/BookTrip"));
const InformationTopic = lazy(() => import("./pages/InformationTopic"));
const IrelandTourismGuide = lazy(() => import("./pages/IrelandTourismGuide"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AdminRouteShell = lazy(() => import("./components/AdminRouteShell"));
const AdminTrackerConsole = lazy(() => import("./pages/AdminTrackerConsole"));

function PageLoader() {
  return (
    <div className="center page-with-navbar" aria-live="polite">
      Loading...
    </div>
  );
}

function PageSuspense({ children }) {
  return <Suspense fallback={<PageLoader />}>{children}</Suspense>;
}

function SectionSuspense({ children }) {
  return <Suspense fallback={null}>{children}</Suspense>;
}

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
        <SectionSuspense>
          <ThinkingTrip />
        </SectionSuspense>
      </ScrollReveal>
      <ScrollReveal y={24} delay={0.03}>
        <SectionSuspense>
          <AboutUs onEnquiryClick={scrollToContact} />
        </SectionSuspense>
      </ScrollReveal>

      <ScrollReveal ref={servicesRef} y={24} delay={0.04}>
        <SectionSuspense>
          <Services onEnquiryClick={scrollToContact} />
        </SectionSuspense>
      </ScrollReveal>

      <ScrollReveal y={26} delay={0.02}>
        <SectionSuspense>
          <Inspiration />
        </SectionSuspense>
      </ScrollReveal>
      <ScrollReveal y={26} delay={0.04}>
        <SectionSuspense>
          <IrelandStays />
        </SectionSuspense>
      </ScrollReveal>
      <ScrollReveal y={26} delay={0.05}>
        <SectionSuspense>
          <TourismIrelandHomeSection />
        </SectionSuspense>
      </ScrollReveal>

      <ScrollReveal ref={contactRef} y={22} delay={0.02}>
        <SectionSuspense>
          <ContactSection />
        </SectionSuspense>
      </ScrollReveal>
    </>
  );
}

// ✅ App component
function App() {
  return (
    <Router>
      <Routes>
        <Route path={ADMIN_CONSOLE_PATH} element={<PageSuspense><AdminRouteShell /></PageSuspense>}>
          <Route index element={<AdminTrackerConsole />} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} /> {/* only one / route */}
          <Route path="/book-trip" element={<PageSuspense><BookTrip /></PageSuspense>} />
          <Route path="/visa-details" element={<PageSuspense><VisaDetails /></PageSuspense>} />
          <Route path="/information" element={<Navigate to="/information/moving-to-ireland" replace />} />
          <Route path="/information/:topic" element={<PageSuspense><InformationTopic /></PageSuspense>} />
          <Route path="/track/:trackingId" element={<PageSuspense><TrackerPage /></PageSuspense>} />
          <Route path="/ireland-travel-process" element={<PageSuspense><IrelandTravelProcess /></PageSuspense>} />
          <Route path="/ireland-weather" element={<PageSuspense><IrelandWeather /></PageSuspense>} />
          <Route path="/sustainable-ireland" element={<PageSuspense><SustainableIreland /></PageSuspense>} />
          <Route path="/tourism-ireland/guide" element={<PageSuspense><IrelandTourismGuide /></PageSuspense>} />
          <Route path="*" element={<PageSuspense><NotFound /></PageSuspense>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
