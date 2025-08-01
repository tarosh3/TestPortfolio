import { Variants } from 'framer-motion';

// Fade in
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
};

// Slide in from left
export const slideInLeft: Variants = {
  hidden: { x: '-100%', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
};

// Slide in from right
export const slideInRight: Variants = {
  hidden: { x: '100%', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
};

// Slide up
export const slideUp: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
};

// Scale up
export const scaleUp: Variants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

// Bounce
export const bounce: Variants = {
  hidden: { y: 0 },
  visible: { 
    y: [0, -12, 0], 
    transition: { repeat: Infinity, repeatType: 'loop', duration: 1, ease: 'easeInOut' } 
  },
};

// Glassmorphism card hover
export const glassCardHover: Variants = {
  rest: { scale: 1, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' },
  hover: { 
    scale: 1.03, 
    boxShadow: '0 8px 32px rgba(0,0,0,0.16)', 
    transition: { duration: 0.3, ease: 'easeOut' }
  },
};