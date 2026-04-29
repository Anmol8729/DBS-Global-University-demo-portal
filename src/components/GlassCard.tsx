import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "purple" | "dark";
  hover?: boolean;
}

const GlassCard = ({ children, className = "", variant = "default", hover = true }: GlassCardProps) => {
  const variants = {
    default: "glass-card",
    purple: "glass-card-purple",
    dark: "glass-dark rounded-2xl",
  };

  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.3 }}
      className={`${variants[variant]} p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
