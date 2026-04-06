import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: '1px solid rgba(0, 212, 255, 0.1)',
        background: 'rgba(8, 12, 20, 0.95)',
        py: 3,
        textAlign: 'center',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 0.5 }}>
        <CodeIcon sx={{ color: '#00d4ff', fontSize: 16 }} />
        <Typography
          variant="body2"
          sx={{
            fontFamily: '"JetBrains Mono", monospace',
            background: 'linear-gradient(135deg, #00d4ff, #7c3aed)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 700,
            letterSpacing: '0.05em',
          }}
        >
          dmytro.dev
        </Typography>
      </Box>
      <Typography variant="caption" sx={{ color: 'text.muted' }}>
        © {new Date().getFullYear()} Dmytro Davydov · Tech Lead · TypeScript & Python · AI/LLM Engineer
      </Typography>
    </Box>
  );
};

export default Footer;
