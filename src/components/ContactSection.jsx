import React from 'react';
import { Box, Typography, Button, Stack, Card } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const SectionLabel = ({ children }) => (
  <Typography
    variant="overline"
    sx={{
      color: '#00d4ff',
      fontFamily: '"JetBrains Mono", monospace',
      letterSpacing: '0.15em',
      fontSize: '0.75rem',
      display: 'block',
      mb: 1,
    }}
  >
    {children}
  </Typography>
);

const ContactSection = () => {
  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 10, md: 14 },
        px: { xs: 3, md: 4 },
        maxWidth: '1200px',
        mx: 'auto',
      }}
    >
      <SectionLabel>// contact</SectionLabel>
      <Typography
        variant="h2"
        sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, color: 'text.primary', mb: 2 }}
      >
        Let's{' '}
        <Box component="span" sx={{ color: '#00d4ff' }}>work together</Box>
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: 'text.secondary', mb: 6, maxWidth: '560px', lineHeight: 1.7 }}
      >
        Available for senior/lead engineering roles and consulting on AI/LLM integration,
        cloud architecture, and full-stack development. Hybrid or remote.
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
          gap: 2.5,
          mb: 6,
        }}
      >
        {[
          {
            icon: <EmailIcon sx={{ fontSize: 28, color: '#00d4ff' }} />,
            label: 'Email',
            value: 'dd77.ua@gmail.com',
            href: 'mailto:dd77.ua@gmail.com',
            cta: 'Send Email',
            color: '#00d4ff',
          },
          {
            icon: <LinkedInIcon sx={{ fontSize: 28, color: '#0a66c2' }} />,
            label: 'LinkedIn',
            value: 'dmytro-davydov-049474158',
            href: 'https://linkedin.com/in/dmytro-davydov-049474158',
            cta: 'View Profile',
            color: '#0a66c2',
          },
          {
            icon: <LocationOnIcon sx={{ fontSize: 28, color: '#10b981' }} />,
            label: 'Location',
            value: 'Lisbon, Portugal',
            href: null,
            cta: 'Hybrid / Remote',
            color: '#10b981',
          },
        ].map((item) => (
          <Card
            key={item.label}
            sx={{
              background: 'rgba(15, 22, 41, 0.8)',
              border: '1px solid rgba(0, 212, 255, 0.1)',
              p: 3,
              textAlign: 'center',
              transition: 'all 0.3s ease',
              '&:hover': {
                border: `1px solid ${item.color}44`,
                transform: 'translateY(-3px)',
                boxShadow: `0 12px 40px ${item.color}12`,
              },
            }}
          >
            <Box sx={{ mb: 1.5 }}>{item.icon}</Box>
            <Typography variant="caption" sx={{ color: 'text.muted', display: 'block', mb: 0.5 }}>
              {item.label}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.8rem',
                mb: 2,
                wordBreak: 'break-all',
              }}
            >
              {item.value}
            </Typography>
            {item.href ? (
              <Button
                variant="outlined"
                size="small"
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                sx={{
                  borderColor: `${item.color}55`,
                  color: item.color,
                  fontSize: '0.75rem',
                  '&:hover': {
                    borderColor: item.color,
                    background: `${item.color}10`,
                  },
                }}
              >
                {item.cta}
              </Button>
            ) : (
              <Typography variant="caption" sx={{ color: item.color }}>
                {item.cta}
              </Typography>
            )}
          </Card>
        ))}
      </Box>

      {/* CTA Banner */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.06), rgba(124, 58, 237, 0.06))',
          border: '1px solid rgba(0, 212, 255, 0.15)',
          borderRadius: '16px',
          p: { xs: 4, md: 6 },
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" sx={{ color: 'text.primary', mb: 1.5, fontWeight: 700 }}>
          Ready to ship something{' '}
          <Box component="span" sx={{ color: '#00d4ff' }}>great?</Box>
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, maxWidth: 480, mx: 'auto' }}>
          Whether it's architecting a new system, integrating AI, or scaling an existing platform
          — let's talk.
        </Typography>
        <Button
          variant="contained"
          size="large"
          href="mailto:dd77.ua@gmail.com"
          startIcon={<EmailIcon />}
          sx={{
            background: 'linear-gradient(135deg, #00d4ff, #0099bb)',
            color: '#080c14',
            fontWeight: 700,
            px: 5,
            py: 1.5,
            fontSize: '1rem',
            boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)',
            '&:hover': {
              background: 'linear-gradient(135deg, #33ddff, #00c2d4)',
              boxShadow: '0 0 40px rgba(0, 212, 255, 0.5)',
            },
          }}
        >
          Get in Touch
        </Button>
      </Box>
    </Box>
  );
};

export default ContactSection;
