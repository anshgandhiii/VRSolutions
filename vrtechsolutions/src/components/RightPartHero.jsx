import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"; // Ensure the path is correct
import analyticsImage from '../assets/VR_AdvancedAnalytics.png';
import creativeImage from '../assets/VR_CreativeExcellence.png';
import deliveryImage from '../assets/VR_RapidDelivery.png';
import drone from '../assets/drone.png';

// Define animation variants
const slideInFromRight = { // Renamed for clarity
  hidden: {
    opacity: 0,
    x: "100%", // Start completely off-screen to the right
               // You could use a value like "80%" if you want a small part to peek in
  },
  visible: {
    opacity: 1,
    x: 0,       // Slide to its final position
    transition: {
      duration: 0.8, // Slightly longer duration for a more noticeable slide
      ease: "easeOut",
      // Optional: Add a small delay if needed
      // delay: 0.1,
    },
  },
};

export function RightPartHero() {
  const testimonials = [
    {
      title: "AI-Driven Analysis",
      src: analyticsImage,
    },
    {
      title: "Creative Design Excellence",
      src: creativeImage,
    },
    {
      title: "Rapid Project Delivery",
      src: deliveryImage,
    },
    {
      title: "Drone Data Processing",
      src: drone,
    },
  ];

  return (
    // IMPORTANT: Add overflow-x-hidden to a parent container if this causes a horizontal scrollbar during animation
    // For example, if RightPartHero is directly in your <main> or a section, that parent might need it.
    <motion.div
      variants={slideInFromRight} // Use the updated variants
      initial="hidden"
      animate="visible"
      // Or, for scroll-triggered animation:
      // whileInView="visible"
      // viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is visible
      className="w-full" // Ensure this container takes up appropriate width
    >
      <AnimatedTestimonials testimonials={testimonials} />
    </motion.div>
  );
}