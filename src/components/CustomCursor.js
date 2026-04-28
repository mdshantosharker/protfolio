"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Position values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Buttery smooth spring configurations
  const outerSpringConfig = { damping: 25, stiffness: 120, mass: 0.8 };
  const innerSpringConfig = { damping: 40, stiffness: 500, mass: 0.1 };

  const x = useSpring(mouseX, outerSpringConfig);
  const y = useSpring(mouseY, outerSpringConfig);
  
  const dotX = useSpring(mouseX, innerSpringConfig);
  const dotY = useSpring(mouseY, innerSpringConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHover = (e) => {
      const target = e.target;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("clickable")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Premium Smooth Outer Circle */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-black/10 rounded-full pointer-events-none z-[9999] bg-transparent"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.6 : 1,
          backgroundColor: isHovered ? "rgba(0, 193, 142, 0.08)" : "transparent",
          borderColor: isHovered ? "rgba(0, 193, 142, 0.2)" : "rgba(0, 0, 0, 0.1)",
          borderWidth: isHovered ? "1.5px" : "1px",
        }}
        transition={{ 
          scale: { type: "spring", damping: 15, stiffness: 200 },
          backgroundColor: { duration: 0.3 },
          borderColor: { duration: 0.3 }
        }}
      />
      
      {/* High-Precision Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-black rounded-full pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 0 : 1, // Dot disappears on hover for a cleaner look, or shrinks
          opacity: isHovered ? 0 : 1,
        }}
      />
      
      {/* Subtle Glow/Shadow for Premium feel */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full pointer-events-none z-[9998] blur-xl opacity-20 bg-primary-container/20"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 2 : 0,
        }}
      />
    </>
  );
};

export default CustomCursor;



