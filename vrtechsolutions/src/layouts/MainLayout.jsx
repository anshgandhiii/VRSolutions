import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20"> {/* pt-20 to offset fixed navbar height (h-20) */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;