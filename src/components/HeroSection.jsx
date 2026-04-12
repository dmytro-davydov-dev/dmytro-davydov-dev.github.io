import React, { useEffect, useRef } from 'react';
import { Box, Typography, Button, Stack, Chip } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// Animated particle network canvas
const NetworkCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    const nodes = Array.from({ length: 80 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.35;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 212, 255, 0.7)';
        ctx.fill();

        // Update position
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        opacity: 0.4,
        pointerEvents: 'none',
      }}
    />
  );
};

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const HeroSection = () => {
  return (
    <Box
      id="hero"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 20% 50%, rgba(124, 58, 237, 0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(0, 212, 255, 0.08) 0%, transparent 50%), #080c14',
      }}
    >
      <NetworkCanvas />

      {/* Glowing orb decorations */}
      <Box sx={{
        position: 'absolute', top: '15%', right: '10%',
        width: 300, height: 300,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)',
        filter: 'blur(40px)',
        pointerEvents: 'none',
      }} />
      <Box sx={{
        position: 'absolute', bottom: '20%', left: '5%',
        width: 250, height: 250,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%)',
        filter: 'blur(40px)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          px: { xs: 3, md: 6 },
          maxWidth: '900px',
        }}
      >
        {/* Badge */}
        <Chip
          label="Available for opportunities"
          size="small"
          sx={{
            mb: 3,
            pl: 1.5,
            background: 'rgba(16, 185, 129, 0.12)',
            border: '1px solid rgba(16, 185, 129, 0.4)',
            color: '#10b981',
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '0.7rem',
            '&::before': {
              content: '"●"',
              mr: 0.5,
              animation: 'pulse 2s infinite',
            },
          }}
        />

        {/* Name */}
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.8rem', sm: '4rem', md: '5.5rem' },
            fontWeight: 800,
            lineHeight: 1.1,
            mb: 2,
            background: 'linear-gradient(135deg, #e2e8f0 30%, #00d4ff 70%, #7c3aed 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Dmytro Davydov
        </Typography>

        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            color: '#00d4ff',
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: { xs: '1rem', md: '1.3rem' },
            fontWeight: 400,
            mb: 3,
            letterSpacing: '0.05em',
          }}
        >
          {'< Tech Lead · TypeScript & Python · AI/LLM · Engineer >'}
        </Typography>

        {/* Tagline */}
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            fontSize: { xs: '1rem', md: '1.15rem' },
            maxWidth: '620px',
            mx: 'auto',
            mb: 5,
            lineHeight: 1.7,
          }}
        >
          15 years building production-grade software. From monoliths to microservices,
          from CRUD to AI-powered agents — I architect and ship things that scale.
        </Typography>

        {/* CTA Buttons */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{ mb: 6, justifyContent: 'center' }}
        >
          <Button
            variant="contained"
            size="large"
            onClick={() => scrollTo('experience')}
            sx={{
              background: 'linear-gradient(135deg, #00d4ff, #0099bb)',
              color: '#080c14',
              fontWeight: 700,
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)',
              '&:hover': {
                background: 'linear-gradient(135deg, #33ddff, #00c2d4)',
                boxShadow: '0 0 40px rgba(0, 212, 255, 0.5)',
              },
            }}
          >
            View My Work
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() => scrollTo('contact')}
            startIcon={<EmailIcon />}
            sx={{
              borderColor: 'rgba(0, 212, 255, 0.5)',
              color: '#00d4ff',
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              '&:hover': {
                borderColor: '#00d4ff',
                background: 'rgba(0, 212, 255, 0.06)',
              },
            }}
          >
            Get in Touch
          </Button>
          <Button
            variant="outlined"
            size="large"
            href="https://github.com/dmytro-davydov-dev"
            target="_blank"
            startIcon={<GitHubIcon />}
            sx={{
              borderColor: 'rgba(0, 212, 255, 0.5)',
              color: '#00d4ff',
              px: 3,
              py: 1.5,
              fontSize: '1rem',
              '&:hover': {
                borderColor: '#00d4ff',
                background: 'rgba(0, 212, 255, 0.06)',
              },
            }}
          >
            GitHub
          </Button>
          <Button
            variant="outlined"
            size="large"
            href="https://linkedin.com/in/dmytro-davydov-049474158"
            target="_blank"
            startIcon={<LinkedInIcon />}
            sx={{
              borderColor: 'rgba(0, 212, 255, 0.5)',
              color: '#00d4ff',
              px: 3,
              py: 1.5,
              fontSize: '1rem',
              '&:hover': {
                borderColor: '#00d4ff',
                background: 'rgba(0, 212, 255, 0.06)',
              },
            }}
          >
            LinkedIn
          </Button>
        </Stack>

        {/* Quick stats */}
        <Stack
          direction="row"
          spacing={{ xs: 3, md: 6 }}
          sx={{ mb: 4, justifyContent: 'center' }}
        >
          {[
            { value: '15+', label: 'Years Exp.' },
            { value: '5', label: 'Companies' },
            { value: 'Expert', label: 'AI/LLM' },
            { value: 'AWS/GCP', label: 'Cloud' },
          ].map((stat) => (
            <Box key={stat.label} sx={{ textAlign: 'center' }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: '#00d4ff',
                  fontFamily: '"JetBrains Mono", monospace',
                }}
              >
                {stat.value}
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>

      {/* Scroll indicator */}
      <Box
        onClick={() => scrollTo('about')}
        sx={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
          animation: 'bounce 2s infinite',
          '@keyframes bounce': {
            '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
            '50%': { transform: 'translateX(-50%) translateY(-8px)' },
          },
          color: 'text.muted',
          '&:hover': { color: '#00d4ff' },
        }}
      >
        <KeyboardArrowDownIcon sx={{ fontSize: 32 }} />
      </Box>
    </Box>
  );
};

export default HeroSection;
