import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Grid, Card, CardActionArea, Chip } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { PORTFOLIO_PROJECTS } from '../data/portfolioProjects';

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

const ProjectThumb = ({ image, title }) => {
  const [errored, setErrored] = useState(false);

  if (!image || errored) {
    return (
      <Box
        sx={{
          aspectRatio: '16 / 10',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, rgba(0,212,255,0.08), rgba(124,58,237,0.08))',
        }}
      >
        <CodeIcon sx={{ fontSize: 40, color: 'rgba(0, 212, 255, 0.35)' }} />
      </Box>
    );
  }

  return (
    <Box
      component="img"
      src={image}
      alt={title}
      onError={() => setErrored(true)}
      sx={{
        width: '100%',
        aspectRatio: '16 / 10',
        objectFit: 'cover',
        objectPosition: 'top',
        display: 'block',
      }}
    />
  );
};

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        height: '100%',
        background: 'rgba(15, 22, 41, 0.8)',
        border: '1px solid rgba(0, 212, 255, 0.1)',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        '&:hover': {
          border: '1px solid rgba(0, 212, 255, 0.35)',
          transform: 'translateY(-3px)',
          boxShadow: '0 12px 40px rgba(0, 212, 255, 0.1)',
        },
      }}
    >
      <CardActionArea
        onClick={() => navigate(`/portfolio/${project.slug}`)}
        sx={{ height: '100%', alignItems: 'stretch' }}
      >
        <ProjectThumb image={project.images?.[0]} title={project.title} />
        <Box sx={{ p: 2.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1, mb: 0.75 }}>
            <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 600, color: 'text.primary' }}>
              {project.title}
            </Typography>
            <ArrowOutwardIcon sx={{ fontSize: 18, color: '#00d4ff', flexShrink: 0 }} />
          </Box>
          <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6, mb: 1.5 }}>
            {project.tagline}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.6 }}>
            {project.tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                sx={{
                  background: 'rgba(255,255,255,0.04)',
                  color: 'text.secondary',
                  border: '1px solid rgba(255,255,255,0.07)',
                  fontSize: '0.65rem',
                  height: 20,
                }}
              />
            ))}
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
};

const PortfolioSection = () => {
  return (
    <Box
      id="portfolio"
      sx={{
        py: { xs: 10, md: 14 },
        px: { xs: 3, md: 4 },
        maxWidth: '1200px',
        mx: 'auto',
      }}
    >
      <SectionLabel>// portfolio</SectionLabel>
      <Typography
        variant="h2"
        sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, color: 'text.primary', mb: 2 }}
      >
        Things I've{' '}
        <Box component="span" sx={{ color: '#00d4ff' }}>built</Box>
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: 'text.secondary', mb: 6, maxWidth: '560px', lineHeight: 1.7 }}
      >
        A selection of independent projects — click any card for the full write-up.
      </Typography>

      <Grid container spacing={2.5} sx={{ width: '100%' }}>
        {PORTFOLIO_PROJECTS.map((project) => (
          <Grid size={{ xs: 12, sm: 6 }} key={project.slug}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PortfolioSection;
