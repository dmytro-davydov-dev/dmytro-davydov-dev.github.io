import React, { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer,
  List, ListItem, ListItemButton, ListItemText, useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CodeIcon from '@mui/icons-material/Code';
import DownloadIcon from '@mui/icons-material/Download';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled
            ? 'rgba(8, 12, 20, 0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0, 212, 255, 0.12)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <Toolbar sx={{ maxWidth: '1200px', mx: 'auto', width: '100%', px: { xs: 2, md: 4 } }}>
          {/* Logo */}
          <Box
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            sx={{
              display: 'flex', alignItems: 'center', gap: 1,
              cursor: 'pointer', flexGrow: 1,
            }}
          >
            <CodeIcon sx={{ color: '#00d4ff', fontSize: 24 }} />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontFamily: '"JetBrains Mono", monospace',
                background: 'linear-gradient(135deg, #00d4ff, #7c3aed)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '0.05em',
              }}
            >
              dmytro.dev
            </Typography>
          </Box>

          {/* Desktop nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                sx={{
                  color: 'text.secondary',
                  px: 2,
                  '&:hover': {
                    color: '#00d4ff',
                    background: 'rgba(0, 212, 255, 0.06)',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
            <Button
              variant="outlined"
              href="mailto:dd77.ua@gmail.com"
              sx={{
                ml: 1,
                borderColor: '#00d4ff',
                color: '#00d4ff',
                '&:hover': {
                  background: 'rgba(0, 212, 255, 0.08)',
                  borderColor: '#00d4ff',
                },
              }}
            >
              Hire Me
            </Button>
            <Button
              variant="contained"
              href="/dmytro-davydov-dev/Dmytro_Davydov_CV.pdf"
              download="Dmytro_Davydov_CV.pdf"
              startIcon={<DownloadIcon sx={{ fontSize: 16 }} />}
              sx={{
                ml: 1,
                background: 'linear-gradient(135deg, #7c3aed, #5b21b6)',
                color: '#fff',
                fontWeight: 600,
                '&:hover': {
                  background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
                  boxShadow: '0 0 20px rgba(124, 58, 237, 0.4)',
                },
              }}
            >
              CV
            </Button>
          </Box>

          {/* Mobile menu icon */}
          <IconButton
            sx={{ display: { md: 'none' }, color: 'text.primary' }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 260,
            background: '#0f1629',
            borderLeft: '1px solid rgba(0, 212, 255, 0.12)',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'text.secondary' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ px: 2 }}>
          {NAV_ITEMS.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                onClick={() => scrollTo(item.href)}
                sx={{
                  borderRadius: '8px',
                  mb: 0.5,
                  '&:hover': { background: 'rgba(0, 212, 255, 0.08)', color: '#00d4ff' },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding sx={{ mt: 1 }}>
            <Button
              fullWidth
              variant="outlined"
              href="mailto:dd77.ua@gmail.com"
              sx={{
                borderColor: '#00d4ff', color: '#00d4ff', borderRadius: '8px', mb: 1,
                '&:hover': { background: 'rgba(0, 212, 255, 0.08)' },
              }}
            >
              Hire Me
            </Button>
          </ListItem>
          <ListItem disablePadding>
            <Button
              fullWidth
              variant="contained"
              href="/dmytro-davydov-dev/Dmytro_Davydov_CV.pdf"
              download="Dmytro_Davydov_CV.pdf"
              startIcon={<DownloadIcon sx={{ fontSize: 16 }} />}
              sx={{
                background: 'linear-gradient(135deg, #7c3aed, #5b21b6)',
                color: '#fff',
                borderRadius: '8px',
                fontWeight: 600,
                '&:hover': { background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)' },
              }}
            >
              Download CV
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
