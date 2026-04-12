import * as React from 'react';
import Box from '@mui/material/Box';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';

export default function App() {
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

      <ContactSection />

      <Footer />
    </Box>
  );
}
