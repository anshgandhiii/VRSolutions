import React from 'react';
import IntroPageComponent from '../components/IntroPage';
import HomeFeaturesComponent from '../components/Home'; // Renamed import from your Home.jsx
import About from '@/components/About';
import Services from '@/components/Services';
import HomePageServices from '@/components/HomePageServices';
import Features from '@/components/Features';
import OurWork from '@/components/OurWork';
import { TabsDemo } from '@/components/Work';

const HomePage = () => {
  return (
    <>
      <IntroPageComponent />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Features />
        <TabsDemo />
        <HomePageServices />
      </div>
    </>
  );
};

export default HomePage;