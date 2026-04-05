"use client";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { motion, type MotionProps } from "framer-motion";

export default function Section({
  children,
  className,
  ...props
}: React.ComponentProps<"section"> & MotionProps) {
  return (
    <motion.section
      {...fadeInUp}
      transition={{ delay: 0.1 }}
      className={cn("py-12 max-w-7xl mx-auto", className)}
      {...props}
    >
      {children}
    </motion.section>
  );
}
