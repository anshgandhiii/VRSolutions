// src/components/ui/card-hover-effect.jsx
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const cn = (...classes) => classes.filter(Boolean).join(' ');

export const HoverEffect = ({ items, className, cardClassName }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <RouterLink
          to={item.path || '#'}
          key={item.path || idx}
          // The Link is the hoverable area. Add padding here.
          className="relative group block h-full w-full p-2 rounded-3xl" // Added p-2 and rounded-3xl
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                // This span will fill the padded Link area
                className="absolute inset-0 h-full w-full bg-purple-300 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          {/* Card content is now inside the padded Link */}
          <div
            className={cn(
              "bg-white rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full relative z-10",
              // No hover effect directly on this div, it's handled by the parent Link's group state
              cardClassName
            )}
          >
            {/* ... Your existing card content ... */}
            <div className="h-40 overflow-hidden relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => { /* ... */ }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <h3 className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-xl sm:text-2xl font-bold text-white">
                {item.title}
              </h3>
            </div>
            <div className="p-4 sm:p-6">
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base min-h-[3em] sm:min-h-[3.5em]">
                {item.description}
              </p>
              <ul className="space-y-2 sm:space-y-3">
                {item.features?.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700 text-xs sm:text-sm">
                    <svg className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 text-purple-600 flex-shrink-0" /* ... */ >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* ... End of your card content ... */}
          </div>
        </RouterLink>
      ))}
    </div>
  );
};