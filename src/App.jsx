import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import ProjectDetail from './pages/ProjectDetail';

function MainPage() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, [location.hash]);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: '#080c14',
        color: '#e2e8f0',
      }}
    >
      <Navbar />
      <HeroSection />

      {/* Divider glow */}
      <Box sx={{ height: 1, width: '100%', display: 'block', background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.2), transparent)' }} />

      <AboutSection />

      <Box sx={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.15), transparent)' }} />

      <SkillsSection />

      <Box sx={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.2), transparent)' }} />

      <ExperienceSection />

      <Box sx={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.15), transparent)' }} />

      <PortfolioSection />

      <Box sx={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.2), transparent)' }} />

      <ContactSection />

      <Footer />
    </Box>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/portfolio/:slug" element={<ProjectDetail />} />
    </Routes>
  );
}
