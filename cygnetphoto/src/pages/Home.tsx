import React from 'react';
import { Container, Typography, Button, Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: '80vh',
          backgroundImage: 'url(/images/hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              color: 'white',
              fontWeight: 'bold',
              mb: 2,
              fontSize: { xs: '2.5rem', md: '4rem' },
            }}
          >
            Capturing Life's Beautiful Moments
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: 'white', mb: 4, maxWidth: '600px' }}
          >
            Professional photography services for weddings, portraits, and special events
          </Typography>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            size="large"
            sx={{ mr: 2 }}
          >
            Book a Session
          </Button>
          <Button
            component={Link}
            to="/gallery"
            variant="outlined"
            size="large"
            sx={{ color: 'white', borderColor: 'white' }}
          >
            View Gallery
          </Button>
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