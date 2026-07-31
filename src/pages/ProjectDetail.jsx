import React, { useState } from 'react';
import { useParams, Link as RouterLink, Navigate } from 'react-router-dom';
import { Box, Typography, Chip, Button, Divider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PORTFOLIO_PROJECTS } from '../data/portfolioProjects';

const Hero = ({ image, title }) => {
  const [errored, setErrored] = useState(false);

  if (!image || errored) {
    return (
      <Box
        sx={{
          width: '100%',
          aspectRatio: { xs: '4 / 3', md: '16 / 7' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '16px',
          border: '1px solid rgba(0, 212, 255, 0.12)',
          background: 'linear-gradient(135deg, rgba(0,212,255,0.08), rgba(124,58,237,0.08))',
        }}
      >
        <CodeIcon sx={{ fontSize: 64, color: 'rgba(0, 212, 255, 0.35)' }} />
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
        maxHeight: 560,
        objectFit: 'cover',
        borderRadius: '16px',
        border: '1px solid rgba(0, 212, 255, 0.12)',
        display: 'block',
      }}
    />
  );
};

const Gallery = ({ images, title }) => {
  if (!images || images.length === 0) return null;

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
        gap: 2,
        mt: 4,
        mb: 5,
      }}
    >
      {images.map((src, i) => (
        <Box
          key={src}
          component="img"
          src={src}
          alt={`${title} screenshot ${i + 2}`}
          sx={{
            width: '100%',
            objectFit: 'cover',
            borderRadius: '12px',
            border: '1px solid rgba(0, 212, 255, 0.12)',
            display: 'block',
          }}
        />
      ))}
    </Box>
  );
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/#portfolio" replace />;
  }

  const [heroImage, ...galleryImages] = project.images || [];

  return (
    <Box sx={{ minHeight: '100vh', background: '#080c14', color: '#e2e8f0' }}>
      <Navbar />

      <Box sx={{ pt: { xs: 12, md: 16 }, pb: { xs: 10, md: 14 }, px: { xs: 3, md: 4 }, maxWidth: '1000px', mx: 'auto' }}>
        <Button
          component={RouterLink}
          to="/#portfolio"
          startIcon={<ArrowBackIcon sx={{ fontSize: 18 }} />}
          sx={{
            color: 'text.secondary',
            mb: 4,
            px: 0,
            '&:hover': { color: '#00d4ff', background: 'transparent' },
          }}
        >
          Back to portfolio
        </Button>

        <Hero image={heroImage} title={project.title} />

        <Box sx={{ mt: 4 }}>
          {project.origin && (
            <Typography
              variant="overline"
              sx={{
                color: '#00d4ff',
                fontFamily: '"JetBrains Mono", monospace',
                letterSpacing: '0.1em',
                fontSize: '0.72rem',
                display: 'block',
                mb: 1,
              }}
            >
              {project.origin}
            </Typography>
          )}

          <Typography
            variant="h2"
            sx={{ fontSize: { xs: '2rem', md: '2.6rem' }, color: 'text.primary', mb: 2 }}
          >
            {project.title}
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 3 }}>
            {project.tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                sx={{
                  background: 'rgba(0,212,255,0.08)',
                  color: '#00d4ff',
                  border: '1px solid rgba(0,212,255,0.2)',
                  fontSize: '0.7rem',
                  height: 24,
                }}
              />
            ))}
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 4 }}>
            {project.deployedUrl ? (
              <Button
                variant="contained"
                href={project.deployedUrl}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<LaunchIcon />}
                sx={{
                  background: 'linear-gradient(135deg, #00d4ff, #0099bb)',
                  color: '#080c14',
                  fontWeight: 700,
                  '&:hover': {
                    background: 'linear-gradient(135deg, #33ddff, #00c2d4)',
                    boxShadow: '0 0 24px rgba(0, 212, 255, 0.4)',
                  },
                }}
              >
                View Live App
              </Button>
            ) : (
              <Chip
                label="Not publicly deployed yet"
                size="small"
                sx={{
                  background: 'rgba(255,255,255,0.05)',
                  color: 'text.muted',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              />
            )}
            {project.repoUrl && (
              <Button
                variant="outlined"
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<GitHubIcon />}
                sx={{
                  borderColor: 'rgba(0, 212, 255, 0.4)',
                  color: '#00d4ff',
                  '&:hover': {
                    borderColor: '#00d4ff',
                    background: 'rgba(0, 212, 255, 0.06)',
                  },
                }}
              >
                Source Code
              </Button>
            )}
          </Box>

          <Divider sx={{ mb: 4, borderColor: 'rgba(0,212,255,0.08)' }} />

          {project.description.map((para, i) => (
            <Typography
              key={i}
              variant="body1"
              sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2, fontSize: '1.05rem' }}
            >
              {para}
            </Typography>
          ))}

          <Gallery images={galleryImages} title={project.title} />
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default ProjectDetail;
