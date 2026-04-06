import React, { useState } from 'react';
import { Box, Typography, Chip, Grid, Card, CardContent, LinearProgress } from '@mui/material';

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

const SKILL_CATEGORIES = [
  {
    category: 'AI / LLM',
    level: 98,
    color: '#00d4ff',
    badge: 'Expert',
    skills: [
      'OpenAI API', 'Anthropic Claude', 'Vertex AI Gemini', 'LangChain',
      'LlamaIndex', 'RAG Pipelines', 'Agentic Workflows', 'MCP Patterns',
      'Semantic Search', 'Prompt Engineering', 'Vector DBs (Pinecone, pgvector)',
    ],
  },
  {
    category: 'Languages',
    level: 98,
    color: '#f59e0b',
    badge: 'Expert',
    skills: ['TypeScript', 'JavaScript', 'Python'],
  },
  {
    category: 'Front-End',
    level: 96,
    color: '#61dafb',
    badge: 'Expert',
    skills: [
      'React', 'Next.js', 'Redux (Toolkit & Sagas)', 'React Query',
      'SWR', 'MobX', 'Material UI', 'Styled Components', 'CSS-in-JS',
    ],
  },
  {
    category: 'Back-End',
    level: 90,
    color: '#68d391',
    badge: 'Advanced',
    skills: [
      'Node.js', 'NestJS', 'Express', 'Flask', 'REST APIs',
      'GraphQL', 'Microservices',
    ],
  },
  {
    category: 'Cloud & DevOps',
    level: 88,
    color: '#7c3aed',
    badge: 'Advanced',
    skills: [
      'AWS', 'GCP', 'Docker', 'Kubernetes', 'Argo CD', 'GitOps',
      'GitHub Actions', 'CI/CD', 'Serverless', 'Velero',
    ],
  },
  {
    category: 'Databases',
    level: 88,
    color: '#10b981',
    badge: 'Advanced',
    skills: [
      'PostgreSQL', 'MySQL', 'MongoDB', 'Redis',
      'Firebase (Firestore / RTDB)', 'BigQuery',
    ],
  },
  {
    category: 'Testing',
    level: 95,
    color: '#f472b6',
    badge: 'Expert',
    skills: [
      'Jest', 'Cypress', 'Puppeteer', 'Selenium',
      'Enzyme', 'Mocha', 'Chai', 'Sentry',
    ],
  },
  {
    category: 'Methodologies',
    level: 96,
    color: '#fbbf24',
    badge: 'Expert',
    skills: [
      'Scrum / Agile', 'TDD', 'OOP', 'Functional Programming',
      'Microservices Architecture', 'System Design',
    ],
  },
];

const badgeColors = {
  Expert: { bg: 'rgba(0, 212, 255, 0.12)', color: '#00d4ff', border: 'rgba(0, 212, 255, 0.35)' },
  Advanced: { bg: 'rgba(124, 58, 237, 0.12)', color: '#a78bfa', border: 'rgba(124, 58, 237, 0.35)' },
};

const SkillCard = ({ item }) => {
  const [hovered, setHovered] = useState(false);
  const bc = badgeColors[item.badge] || badgeColors.Advanced;

  return (
    <Card
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        height: '100%',
        background: 'rgba(15, 22, 41, 0.8)',
        border: `1px solid ${hovered ? item.color + '55' : 'rgba(0, 212, 255, 0.1)'}`,
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-3px)' : 'none',
        boxShadow: hovered ? `0 12px 40px ${item.color}18` : 'none',
      }}
    >
      <CardContent sx={{ p: 3 }}>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" sx={{ fontSize: '0.95rem', fontWeight: 600, color: 'text.primary' }}>
            {item.category}
          </Typography>
          <Chip
            label={item.badge}
            size="small"
            sx={{
              background: bc.bg,
              color: bc.color,
              border: `1px solid ${bc.border}`,
              fontSize: '0.65rem',
              height: 22,
            }}
          />
        </Box>

        {/* Progress bar */}
        <Box sx={{ mb: 2 }}>
          <LinearProgress
            variant="determinate"
            value={item.level}
            sx={{
              height: 4,
              borderRadius: 2,
              background: 'rgba(255,255,255,0.06)',
              '& .MuiLinearProgress-bar': {
                background: `linear-gradient(90deg, ${item.color}88, ${item.color})`,
                borderRadius: 2,
              },
            }}
          />
        </Box>

        {/* Skills chips */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.7 }}>
          {item.skills.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              size="small"
              sx={{
                background: 'rgba(255,255,255,0.05)',
                color: 'text.secondary',
                border: '1px solid rgba(255,255,255,0.08)',
                fontSize: '0.7rem',
                height: 24,
                '&:hover': {
                  background: `${item.color}15`,
                  color: item.color,
                  border: `1px solid ${item.color}40`,
                },
                transition: 'all 0.2s',
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

const SkillsSection = () => {
  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 10, md: 14 },
        px: { xs: 3, md: 4 },
        maxWidth: '1200px',
        mx: 'auto',
      }}
    >
      <SectionLabel>// technical skills</SectionLabel>
      <Typography
        variant="h2"
        sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, color: 'text.primary', mb: 2 }}
      >
        What I{' '}
        <Box component="span" sx={{ color: '#00d4ff' }}>build with</Box>
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: 'text.secondary', mb: 6, maxWidth: '560px', lineHeight: 1.7 }}
      >
        A decade and a half of deliberate practice — from vanilla JS to AI agent pipelines.
        Hover over a card to explore.
      </Typography>

      <Grid container spacing={2.5}>
        {SKILL_CATEGORIES.map((item) => (
          <Grid item xs={12} sm={6} lg={4} key={item.category}>
            <SkillCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SkillsSection;
