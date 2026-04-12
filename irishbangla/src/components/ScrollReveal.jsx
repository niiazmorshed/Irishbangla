import { forwardRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

const motionTags = {
  div: motion.div,
  section: motion.section,
  main: motion.main,
  article: motion.article,
};

/**
 * Fade + slide in when the element enters the viewport (Framer Motion whileInView).
 */
export const ScrollReveal = forwardRef(function ScrollReveal(
  {
    as = "div",
    children,
    className = "",
    delay = 0,
    y = 26,
    duration = 0.5,
    once = true,
    amount = 0.12,
    margin = "0px 0px -10% 0px",
    ...rest
  },
  ref
) {
  const reduceMotion = useReducedMotion();
  const Motion = motionTags[as] || motion.div;
  const d = reduceMotion ? Math.min(duration, 0.22) : duration;
  const offset = reduceMotion ? 0 : y;

  return (
    <Motion
      ref={ref}
      className={className}
      initial={{ opacity: reduceMotion ? 1 : 0, y: offset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount, margin }}
      transition={{ duration: d, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Motion>
  );
});

ScrollReveal.displayName = "ScrollReveal";
