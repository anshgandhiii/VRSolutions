// src/components/FeatureShowcaseRow.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

const FeatureShowcaseRow = ({ imgSrc, imgAlt, title, description, imageSide = 'left', animationDelay = 0.2 }) => {
  const textAnimationDirection = imageSide === 'left' ? 'right' : 'left';

  const imageOrderClass = imageSide === 'left' ? 'lg:order-1' : 'lg:order-2';
  const textOrderClass = imageSide === 'left' ? 'lg:order-2' : 'lg:order-1';

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6"> {/* Padding for each row */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }} // Set once: true if you want animation only once
        className="max-w-6xl mx-auto flex lg:flex-row flex-col items-center gap-10 md:gap-16"
      >
        {/* Image Section */}
        <motion.div
          variants={planetVariants(imageSide)}
          className={`flex-1 flex justify-center items-center ${imageOrderClass}`}
        >
          <img
            src={imgSrc}
            alt={imgAlt}
            className="w-full max-w-md md:max-w-lg h-auto object-contain rounded-lg shadow-xl"
          />
        </motion.div>

        {/* Text Content Section */}
        <motion.div
          variants={fadeIn(textAnimationDirection, 'tween', animationDelay, 1)}
          className={`flex-[0.9] flex justify-center flex-col ${textOrderClass} text-center lg:text-left`}
        >
          {/* You can use your <TypingText> and <TitleText> here if you have them */}
          {/* For example:
          <TypingText title={`| Our Approach: ${title}`} textStyles="text-center lg:text-left" />
          <TitleText title={<>{title}</>} textStyles="text-center lg:text-left" />
          */}

          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {title}
          </h3>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            {description}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeatureShowcaseRow;