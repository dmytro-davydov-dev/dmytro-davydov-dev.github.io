import React, { useState } from 'react';
import { Box, Typography, Chip, Card, CardContent, Divider, Collapse, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';
import WorkIcon from '@mui/icons-material/Work';

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

const EXPERIENCES = [
  {
    role: 'Technical Lead · TypeScript, Python Full-Stack Engineer',
    company: 'Crowdkeep',
    period: 'Dec 2024 – Present',
    type: 'Hybrid · Lisbon',
    current: true,
    stack: ['GCP', 'TypeScript', 'Python', 'Flask', 'React', 'NodeJS', 'Firebase', 'PostgreSQL', 'Redis', 'Docker', 'Terraform', 'EMQX MQTT', 'Vite'],
    achievements: [
      'Established the engineering foundation for a greenfield product — defined architecture, standards, and CI/CD from day one.',
      'Architected and shipped production Gen AI features using Vertex AI Gemini: NL→SQL Analytics Assistant, Conversational Asset & People Search, Automated Document Processing, and Workflow Automation & AI Orchestration.',
      'Introduced structured observability with Sentry + performance monitoring, reducing mean time to detect production issues.',
      'Built and grew the engineering team, including conducting interviews and onboarding.',
    ],
  },
  {
    role: 'Team Lead · Senior TypeScript, Python Engineer',
    company: 'GlobalLogic',
    period: 'Mar 2021 – Dec 2024',
    type: 'Remote · 3.5 yrs',
    current: false,
    stack: ['React', 'TypeScript', 'Node.js', 'NestJS', 'Python (Flask)', 'AWS', 'Serverless', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Terraform', 'GitLab'],
    achievements: [
      'Led a remote cross-functional team of 6–8 engineers across multiple product streams, delivering consistently on schedule.',
      'Built a Natural Language LLM integration enabling non-technical users to query analytics data in plain English — reducing time-to-insight from manual report cycles to seconds.',
      'Introduced structured observability (Sentry + performance monitoring), reducing mean time to detect production issues by ~60%.',
      'Drove migration from monolith to microservices architecture, improving deployment frequency and system resilience.',
    ],
  },
  {
    role: 'Senior JavaScript/TypeScript Full-Stack Engineer',
    company: 'Intellias',
    period: 'Sep 2018 – Jan 2021',
    type: 'Hybrid · 2.5 yrs',
    current: false,
    stack: ['React', 'React Query', 'Redux', 'Next.js', 'TypeScript', 'Node.js', 'NestJS', 'AWS', 'PostgreSQL', 'MySQL', 'MongoDB', 'Docker'],
    achievements: [
      'Architected and delivered multiple complex front-end features for large-scale enterprise clients, handling millions of data points with custom Recharts visualisations.',
      'Championed test coverage initiative, growing E2E coverage from near-zero to >70% across core user journeys.',
    ],
  },
  {
    role: 'JavaScript/TypeScript Full-Stack Engineer',
    company: 'Al Tayer Group',
    period: 'Dec 2015 – Sep 2018',
    type: 'Hybrid · 3 yrs',
    current: false,
    stack: ['React', 'Redux', 'Next.js', 'TypeScript', 'Node.js', 'NestJS', 'AWS', 'PostgreSQL', 'GraphQL', 'Docker'],
    achievements: [
      'Contributed to the re-platform of a high-traffic e-commerce system serving millions of users across the Middle East.',
    ],
  },
  {
    role: 'Frontend Engineer',
    company: 'Talking Swords Data-Media Agency',
    period: 'Sep 2013 – Dec 2015',
    type: 'Kyiv, Ukraine · 2.5 yrs',
    current: false,
    stack: ['JavaScript (ES5/ES6)', 'HTML5', 'CSS3', 'SASS', 'jQuery', 'Backbone.js', 'Gulp'],
    achievements: [
      'Designed and developed UI components and interactive features for client web projects.',
    ],
  },
];

const ExperienceCard = ({ exp, index }) => {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <Box sx={{ display: 'flex', gap: 3, mb: 2 }}>
      {/* Timeline line */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          alignItems: 'center',
          minWidth: 40,
          pt: 2.5,
        }}
      >
        <Box
          sx={{
            width: 36,
            height: 36,
            borderRadius: '50%',
            background: exp.current
              ? 'linear-gradient(135deg, #00d4ff, #0099bb)'
              : 'rgba(15, 22, 41, 0.9)',
            border: exp.current
              ? '2px solid #00d4ff'
              : '2px solid rgba(0, 212, 255, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            boxShadow: exp.current ? '0 0 16px rgba(0,212,255,0.4)' : 'none',
          }}
        >
          <WorkIcon
            sx={{
              fontSize: 16,
              color: exp.current ? '#080c14' : 'rgba(0, 212, 255, 0.5)',
            }}
          />
        </Box>
        {index < EXPERIENCES.length - 1 && (
          <Box
            sx={{
              width: 1,
              flexGrow: 1,
              mt: 1,
              background: 'linear-gradient(to bottom, rgba(0,212,255,0.3), rgba(0,212,255,0.05))',
            }}
          />
        )}
      </Box>

      {/* Card */}
      <Card
        sx={{
          flex: 1,
          background: 'rgba(15, 22, 41, 0.8)',
          border: exp.current
            ? '1px solid rgba(0, 212, 255, 0.3)'
            : '1px solid rgba(0, 212, 255, 0.1)',
          mb: 1,
          transition: 'all 0.3s ease',
          '&:hover': {
            border: '1px solid rgba(0, 212, 255, 0.3)',
          },
        }}
      >
        <CardContent sx={{ p: 3 }}>
          {/* Header row */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
            <Box sx={{ flex: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5, flexWrap: 'wrap' }}>
                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 600, color: 'text.primary' }}>
                  {exp.role}
                </Typography>
                {exp.current && (
                  <Chip
                    label="Current"
                    size="small"
                    sx={{
                      background: 'rgba(16, 185, 129, 0.15)',
                      color: '#10b981',
                      border: '1px solid rgba(16, 185, 129, 0.4)',
                      fontSize: '0.65rem',
                      height: 20,
                    }}
                  />
                )}
              </Box>
              <Typography variant="body2" sx={{ color: '#00d4ff', fontWeight: 600 }}>
                {exp.company}
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.muted' }}>
                {exp.period} · {exp.type}
              </Typography>
            </Box>
            <IconButton
              size="small"
              onClick={() => setExpanded(!expanded)}
              sx={{
                color: 'text.muted',
                transition: 'transform 0.3s',
                transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                '&:hover': { color: '#00d4ff' },
                mt: -0.5,
                mr: -1,
              }}
            >
              <ExpandMoreIcon />
            </IconButton>
          </Box>

          {/* Stack chips */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.6, mb: expanded ? 2 : 0 }}>
            {exp.stack.slice(0, expanded ? exp.stack.length : 5).map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                sx={{
                  background: 'rgba(255,255,255,0.04)',
                  color: 'text.secondary',
                  border: '1px solid rgba(255,255,255,0.07)',
                  fontSize: '0.68rem',
                  height: 22,
                }}
              />
            ))}
            {!expanded && exp.stack.length > 5 && (
              <Chip
                label={`+${exp.stack.length - 5}`}
                size="small"
                sx={{
                  background: 'rgba(0,212,255,0.08)',
                  color: '#00d4ff',
                  border: '1px solid rgba(0,212,255,0.2)',
                  fontSize: '0.68rem',
                  height: 22,
                  cursor: 'pointer',
                }}
                onClick={() => setExpanded(true)}
              />
            )}
          </Box>

          {/* Achievements */}
          <Collapse in={expanded}>
            <Divider sx={{ mb: 2, borderColor: 'rgba(0,212,255,0.08)' }} />
            <Box component="ul" sx={{ m: 0, pl: 0, listStyle: 'none' }}>
              {exp.achievements.map((a, i) => (
                <Box
                  component="li"
                  key={i}
                  sx={{
                    display: 'flex',
                    gap: 1.5,
                    mb: 1.5,
                    alignItems: 'flex-start',
                  }}
                >
                  <StarIcon sx={{ fontSize: 14, color: '#00d4ff', mt: '3px', flexShrink: 0 }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                    {a}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Collapse>
        </CardContent>
      </Card>
    </Box>
  );
};

const ExperienceSection = () => {
  return (
    <Box
      id="experience"
      sx={{
        py: { xs: 10, md: 14 },
        px: { xs: 3, md: 4 },
        maxWidth: '1200px',
        mx: 'auto',
      }}
    >
      <SectionLabel>// work experience</SectionLabel>
      <Typography
        variant="h2"
        sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, color: 'text.primary', mb: 2 }}
      >
        Where I've{' '}
        <Box component="span" sx={{ color: '#00d4ff' }}>shipped</Box>
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: 'text.secondary', mb: 6, maxWidth: '560px', lineHeight: 1.7 }}
      >
        From agency work to scaling enterprise SaaS — click any card to expand full details.
      </Typography>

      <Box>
        {EXPERIENCES.map((exp, i) => (
          <ExperienceCard key={exp.company} exp={exp} index={i} />
        ))}
      </Box>

      {/* Education */}
      <Box sx={{ mt: 8 }}>
        <SectionLabel>// education & certs</SectionLabel>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>
          {[
            { title: "Bachelor's — Computational Linguistics", sub: 'Kharkiv National University, Ukraine' },
            { title: 'AWS: Building Containerized Applications', sub: 'Coursera Certification' },
            { title: 'AWS: Building Modern Node.js Applications', sub: 'Coursera Certification' },
          ].map((cert) => (
            <Card
              key={cert.title}
              sx={{
                background: 'rgba(15, 22, 41, 0.7)',
                border: '1px solid rgba(0, 212, 255, 0.1)',
                px: 2.5,
                py: 2,
                '&:hover': { border: '1px solid rgba(0, 212, 255, 0.3)' },
                transition: 'all 0.2s',
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary', mb: 0.5 }}>
                {cert.title}
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.muted' }}>
                {cert.sub}
              </Typography>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ExperienceSection;
