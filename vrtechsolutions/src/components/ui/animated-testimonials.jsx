import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState, useCallback } from "react";

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = true,
}) => {
  const [active, setActive] = useState(0);

  const handleNext = useCallback(() => {
    if (testimonials && testimonials.length > 0) {
      setActive((prev) => (prev + 1) % testimonials.length);
    }
  }, [testimonials]);

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay && testimonials && testimonials.length > 1) {
      const interval = setInterval(handleNext, 3000);
      return () => clearInterval(interval);
    }
  }, [autoplay, testimonials, handleNext]);

  // UPDATED: Increased rotation range
  const randomRotateY = () => {
    return Math.floor(Math.random() * 31) - 15; // Now -15 to +15 degrees (was -10 to +10)
  };

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <div className="mx-auto max-w-md px-4 py-16 font-sans antialiased sm:py-20 md:max-w-2xl lg:max-w-3xl md:px-8 lg:px-12">
      <div className="flex flex-col items-center text-center">
        {/* UPDATED: Added inline style for perspective */}
        <div
          className="relative w-80 h-[180px] sm:w-96 sm:h-[216px] md:w-[512px] md:h-[288px]"
          style={{ perspective: "1000px" }} // Added perspective for enhanced 3D effect
        >
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.src || index}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  z: -100,
                  rotate: randomRotateY(),
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.95,
                  z: isActive(index) ? 0 : -100,
                  rotate: isActive(index) ? 0 : randomRotateY(),
                  zIndex: isActive(index)
                    ? 40
                    : testimonials.length + 2 - index,
                  y: isActive(index) ? [0, -60, 0] : 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  z: 100,
                  rotate: randomRotateY(),
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className={`absolute inset-0 origin-bottom rounded-3xl overflow-hidden transition-all duration-300 ${
                  isActive(index)
                    ? 'ring-4 ring-purple-400/60 shadow-2xl shadow-cyan-400/30 border-2 border-cyan-300/80'
                    : 'ring-2 ring-gray-300/40 shadow-lg border border-gray-200/60 dark:border-gray-600/60 dark:ring-gray-600/40'
                } bg-white dark:bg-slate-800`}
              >
                {/* Optional: Add a subtle inner glow for active image */}
                {isActive(index) && (
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent rounded-3xl pointer-events-none"></div>
                )}
                <img
                  src={testimonial.src}
                  alt={testimonial.title || `Testimonial image ${index + 1}`}
                  width={1600}
                  height={900}
                  draggable={false}
                  className="h-full w-full object-cover object-center relative z-10"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Text part remains unchanged */}
        <div className="mt-12 w-full px-2 sm:mt-16 md:px-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            >

            {testimonials[active]?.title && (
              <motion.p className="text-base leading-relaxed sm:text-lg md:text-xl font-semibold">
                {testimonials[active].title.split(" ").map((word, index) => (
                  <motion.span
                    key={`${active}-${index}`} // Important: key with active index for re-animation
                    initial={{
                      opacity: 0,
                      y: 20,
                      filter: "blur(8px)",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                      delay: 0.08 * index,
                    }}
                    className="inline-block bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mr-2"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.p>
            )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};