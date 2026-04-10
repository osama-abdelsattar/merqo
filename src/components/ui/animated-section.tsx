"use client";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { motion, type MotionProps } from "framer-motion";

export default function AnimatedSection({
  children,
  className,
  ...props
}: React.ComponentProps<"section"> & MotionProps) {
  return (
    <motion.section
      {...fadeInUp}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className={cn("py-12 max-w-7xl mx-auto", className)}
      {...props}
    >
      {children}
    </motion.section>
  );
}
