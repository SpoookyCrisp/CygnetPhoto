import React from 'react';
import { Container, Typography, Button, Box, Grid, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: '60vh', md: '80vh' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'url(/images/hero.jpg)', // Placeholder
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(0,0,0,0.55)',
            zIndex: 1,
          }}
        />
        {/* Content */}
        <Container
          maxWidth="md"
          sx={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            py: { xs: 8, md: 12 },
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              color: 'white',
              fontWeight: 800,
              mb: 2,
              fontSize: { xs: '2.2rem', md: '3.5rem' },
              letterSpacing: '-1px',
              lineHeight: 1.1,
            }}
          >
            Capturing Life's Beautiful Moments
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'grey.200',
              mb: 4,
              maxWidth: 600,
              fontWeight: 400,
            }}
          >
            Professional photography services for weddings, portraits, and special events
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              size="large"
              sx={{
                fontWeight: 600,
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                boxShadow: 2,
              }}
            >
              Book a Session
            </Button>
            <Button
              component={Link}
              to="/gallery"
              variant="outlined"
              size="large"
              sx={{
                color: 'white',
                borderColor: 'white',
                fontWeight: 600,
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': {
                  borderColor: 'grey.300',
                  backgroundColor: 'rgba(255,255,255,0.08)',
                },
              }}
            >
              View Gallery
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Featured Work Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
          Featured Work
        </Typography>
        <Grid container spacing={4}>
          {[1, 2, 3].map((item) => (
            <Grid key={item} xs={12} md={4}>
              <Box
                sx={{
                  height: 300,
                  backgroundImage: `url(/images/featured-${item}.jpg)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: 2,
                  '&:hover': {
                    transform: 'scale(1.02)',
                    transition: 'transform 0.3s ease-in-out',
                  },
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h3" sx={{ mb: 2, textAlign: 'center' }}>
            Ready to Create Lasting Memories?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, textAlign: 'center' }}>
            Let's work together to capture your special moments
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'grey.100',
                },
              }}
            >
              Get in Touch
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 