import { motion } from "framer-motion";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface RevealWrapperProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function RevealWrapper({ 
  children, 
  delay = 0, 
  className 
}: RevealWrapperProps) {
  const { ref, inView } = useReveal();

  return (
    <motion.div
      ref={ref}
      initial={{ y: 30, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
