"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface LuxuryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
}

export default function LuxuryButton({
  children,
  onClick,
  className,
  variant = "primary",
}: LuxuryButtonProps) {
  const variants = {
    primary: "bg-primary text-white hover:bg-opacity-90",
    secondary: "bg-secondary text-primary hover:bg-opacity-90 font-semibold",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white bg-transparent",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, translateY: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "px-8 py-4 rounded-full transition-all duration-300 shadow-xl luxury-heading text-sm uppercase tracking-widest",
        variants[variant],
        className
      )}
    >
      <span className="relative z-10">{children}</span>
      {variant === "secondary" && (
        <motion.div
          className="absolute inset-0 bg-white/20 rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
        />
      )}
    </motion.button>
  );
}
