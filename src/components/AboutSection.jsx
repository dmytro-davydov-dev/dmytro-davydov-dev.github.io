import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Divider } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CloudIcon from '@mui/icons-material/Cloud';
import GroupsIcon from '@mui/icons-material/Groups';

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

const highlights = [
  {
    icon: <AutoAwesomeIcon sx={{ color: '#00d4ff', fontSize: 28 }} />,
    title: 'AI & LLM Expert',
    desc: 'Shipped production Gen AI features: NL→SQL analytics assistants, RAG pipelines, conversational search agents, document processing & workflow automation.',
  },
  {
    icon: <CloudIcon sx={{ color: '#7c3aed', fontSize: 28 }} />,
    title: 'Cloud Native',
    desc: 'AWS & GCP architectures from the ground up. CI/CD, Docker, Kubernetes, GitOps, serverless — built for scale and cost efficiency.',
  },
  {
    icon: <PsychologyIcon sx={{ color: '#10b981', fontSize: 28 }} />,
    title: 'Full-Stack Architect',
    desc: 'TypeScript + Python across the entire stack. React frontends, Node/NestJS backends, microservices, GraphQL, PostgreSQL, Redis, Firebase.',
  },
  {
    icon: <GroupsIcon sx={{ color: '#f59e0b', fontSize: 28 }} />,
    title: 'Tech Leadership',
    desc: 'Led teams of 6–8 engineers, defined architecture standards, built engineering culture, mentored juniors, drove monolith-to-microservices migrations.',
  },
];

const AboutSection = () => {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 10, md: 14 },
        px: { xs: 3, md: 4 },
        maxWidth: '1200px',
        mx: 'auto',
      }}
    >
      <SectionLabel>// about me</SectionLabel>
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: '2rem', md: '2.8rem' },
          color: 'text.primary',
          mb: 3,
        }}
      >
        Building software that{' '}
        <Box component="span" sx={{ color: '#00d4ff' }}>matters</Box>
      </Typography>

      <Grid container spacing={6} alignItems="flex-start">
        {/* Bio text */}
        <Grid item xs={12} md={5}>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2, fontSize: '1.05rem' }}
          >
            Senior TypeScript and Python Full-Stack Engineer with ~15 years of experience
            leading architecture and delivery of scalable, high-performance applications across
            E-commerce, automotive, IoT, and SaaS domains.
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2, fontSize: '1.05rem' }}
          >
            Specialised in creating projects from scratch, modernising legacy systems, and
            integrating advanced AI/LLM capabilities into production environments.
            Currently building the engineering foundation at{' '}
            <Box component="span" sx={{ color: '#00d4ff', fontWeight: 600 }}>Crowdkeep</Box>{' '}
            in Lisbon.
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '1.05rem' }}
          >
            Based in{' '}
            <Box component="span" sx={{ color: 'text.primary', fontWeight: 500 }}>Portugal 🇵🇹</Box>,
            originally from Ukraine 🇺🇦. Available for hybrid and remote opportunities.
          </Typography>

          <Divider sx={{ my: 4, borderColor: 'rgba(0, 212, 255, 0.1)' }} />

          {/* Quick facts */}
          <Grid container spacing={2}>
            {[
              { label: 'Location', value: 'Lisbon, Portugal' },
              { label: 'Mode', value: 'Hybrid / Remote' },
              { label: 'Experience', value: '~15 years' },
              { label: 'Focus', value: 'AI · Cloud · Full-Stack' },
            ].map((fact) => (
              <Grid item xs={6} key={fact.label}>
                <Typography variant="caption" sx={{ color: 'text.muted', display: 'block' }}>
                  {fact.label}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 500 }}>
                  {fact.value}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Highlight cards */}
        <Grid item xs={12} md={7}>
          <Grid container spacing={2}>
            {highlights.map((h) => (
              <Grid item xs={12} sm={6} key={h.title}>
                <Card
                  sx={{
                    height: '100%',
                    background: 'rgba(15, 22, 41, 0.8)',
                    border: '1px solid rgba(0, 212, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      border: '1px solid rgba(0, 212, 255, 0.35)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 32px rgba(0, 212, 255, 0.08)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ mb: 1.5 }}>{h.icon}</Box>
                    <Typography variant="h6" sx={{ mb: 1, fontSize: '1rem', color: 'text.primary' }}>
                      {h.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                      {h.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutSection;
