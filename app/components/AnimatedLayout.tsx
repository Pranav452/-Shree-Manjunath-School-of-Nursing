'use client'

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

// Animation variants for scroll reveal
const revealVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

interface AnimatedLayoutProps {
  children: ReactNode;
}

export function AnimatedLayout({ children }: AnimatedLayoutProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.3
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedSection({ children }: AnimatedLayoutProps) {
  return (
    <motion.section variants={revealVariants}>
      {children}
    </motion.section>
  );
}