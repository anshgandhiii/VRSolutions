import { motion } from 'framer-motion';
import { TypingText } from './CustomTexts'; // Assuming this component is set up
import styles from '../styles'; // Assuming this provides padding, etc.
import { fadeInForAbout, staggerContainer } from '../utils/motion';
import arrowDownIcon from '../assets/arrow-down.svg';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    {/* gradient-02 is likely a background effect defined in your styles */}
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About VR Tech Solutions" textStyles="text-center" />

      <motion.p
        variants={fadeInForAbout('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[28px] text-[18px] text-center mytext leading-relaxed sm:leading-loose" // Adjusted font size and leading for readability
      >
        <span className="font-extrabold text-black">VR Tech Solutions</span> stands at the forefront of technological innovation, dedicated to transforming complex challenges into clear, actionable insights and bespoke solutions. We leverage the power of{' '}
        <span className="font-extrabold text-black">Artificial Intelligence</span>, <span className="font-extrabold text-black">Machine Learning</span>, and advanced{' '}
        <span className="font-extrabold text-black">Data Analytics</span> to engineer systems and strategies that drive growth and efficiency.
        Our expertise spans from intricate{' '}
        <span className="font-extrabold text-black">AI/ML project development</span> and comprehensive{' '}
        <span className="font-extrabold text-black">data processing</span> services to impactful{' '}
        <span className="font-extrabold text-black">creative design</span> and strategic{' '}
        <span className="font-extrabold text-black">academic consultation</span>.
        We are committed to delivering{' '}
        <span className="font-extrabold text-black">precision and excellence</span> in every project, ensuring our partners and clients are equipped to navigate the future with confidence.
        Let's{' '}
        <span className="font-extrabold text-black">explore</span> how our tailored solutions can redefine your potential by scrolling down.
      </motion.p>

      <motion.img
        variants={fadeInForAbout('up', 'tween', 0.3, 1)}
        src={arrowDownIcon}
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;