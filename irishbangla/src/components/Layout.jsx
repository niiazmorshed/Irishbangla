import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion as Motion, useReducedMotion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ScrollReveal } from "./ScrollReveal";

export default function Layout() {
  const { pathname } = useLocation();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <>
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
        <Outlet />
      </Motion.div>
      <ScrollReveal as="div" className="layout-footer-reveal" y={20} amount={0.08}>
        <Footer />
      </ScrollReveal>
    </>
  );
}

