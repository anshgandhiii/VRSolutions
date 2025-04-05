import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    document.documentElement.style.setProperty('--bg-color', theme.bgColor);
    document.documentElement.style.setProperty('--text-color', theme.textColor);
    document.documentElement.style.setProperty('--font-primary', theme.fontFamily);
  }, [theme]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;