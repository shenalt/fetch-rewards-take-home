// Animation Variants
export const input = {
    hidden: { opacity: 0, scale: 0.25 },
    show: { opacity: 1, scale: 1 },
  };
  
export  const inputs = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.1,
        },
    },
  };