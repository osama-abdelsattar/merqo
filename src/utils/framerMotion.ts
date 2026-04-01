import { type MotionProps } from "framer-motion";

export const fadeIn: MotionProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  slideDown: MotionProps = {
    initial: { opacity: 0, translateY: "-100%" },
    animate: { opacity: 1, translateY: 0 },
    transition: { duration: 0.2 },
  },
  slideUp: MotionProps = {
    initial: { opacity: 0, translateY: "100%" },
    animate: { opacity: 1, translateY: 0 },
    transition: { duration: 0.2 },
  },
  fadeInUp: MotionProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  };
