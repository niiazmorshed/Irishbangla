import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion as Motion, useReducedMotion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollTopButton from "./ScrollTopButton";
import RouteErrorBoundary from "./RouteErrorBoundary";
import { ScrollReveal } from "./ScrollReveal";

export default function Layout() {
  const { pathname, hash } = useLocation();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      let attempts = 0;
      const maxAttempts = 24;

      const scrollToHash = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "auto", block: "start" });
          return;
        }
        if (attempts < maxAttempts) {
          attempts += 1;
          requestAnimationFrame(scrollToHash);
        }
      };

      scrollToHash();
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return (
    <div className={`layout-shell${pathname !== "/" ? " layout-has-breadcrumbs" : ""}`}>
      <Navbar />
      <Motion.div
        key={pathname}
        className="layout-outlet"
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: reduceMotion ? 0.15 : 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <RouteErrorBoundary>
          <Outlet />
        </RouteErrorBoundary>
      </Motion.div>
      <ScrollTopButton />
      <ScrollReveal as="div" className="layout-footer-reveal" y={20} amount={0.08}>
        <Footer />
      </ScrollReveal>
    </div>
  );
}

