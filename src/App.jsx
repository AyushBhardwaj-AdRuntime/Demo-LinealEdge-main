import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalBackground from './components/GlobalBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RouteLoader from './components/RouteLoader';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import TeamPage from './pages/TeamPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import DisclosurePage from './pages/DisclosurePage';
import ClientLoginPage from './pages/ClientLoginPage';
import AdvisorLoginPage from './pages/AdvisorLoginPage';
import { useLocation } from 'react-router-dom';

function getRouteLoaderTheme(pathname) {
  if (pathname.startsWith('/services')) return 'services';
  if (pathname.startsWith('/about')) return 'about';
  if (pathname.startsWith('/careers')) return 'careers';
  if (pathname.startsWith('/contact')) return 'contact';
  if (pathname.startsWith('/login')) return 'login';
  if (pathname.startsWith('/faq') || pathname.startsWith('/disclosure')) return 'info';
  return 'default';
}

function RouteLoaderGate({ children }) {
  const location = useLocation();
  const previousPathRef = useRef(location.pathname);
  const [loaderVisible, setLoaderVisible] = useState(false);
  const [loaderTheme, setLoaderTheme] = useState('default');

  useEffect(() => {
    const previousPath = previousPathRef.current;
    previousPathRef.current = location.pathname;
    setLoaderTheme(getRouteLoaderTheme(location.pathname));

    if (previousPath !== location.pathname) {
      setLoaderVisible(true);
      const timeoutId = window.setTimeout(() => {
        setLoaderVisible(false);
      }, 900);

      return () => window.clearTimeout(timeoutId);
    }

    setLoaderVisible(false);
    return undefined;
  }, [location.pathname]);

  return (
    <>
      {children}
      <RouteLoader visible={loaderVisible} theme={loaderTheme} />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteLoaderGate>
        <GlobalBackground />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/disclosure" element={<DisclosurePage />} />
          <Route path="/login/client" element={<ClientLoginPage />} />
          <Route path="/login/advisor" element={<AdvisorLoginPage />} />
        </Routes>
        <Footer />
      </RouteLoaderGate>
    </BrowserRouter>
  );
}