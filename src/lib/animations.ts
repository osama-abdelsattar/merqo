import { type MotionProps } from "framer-motion";

const fadeIn: MotionProps = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
};

const slideDown: MotionProps = {
  initial: { y: "-2rem", opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
};

const slideUp: MotionProps = {
  initial: { y: "2rem", opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
};

const fadeInUp: MotionProps = {
  initial: { y: "4rem", opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  viewport: { once: true },
};

export { fadeIn, slideDown, slideUp, fadeInUp };
