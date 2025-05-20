import { Box, Typography, Button, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredPhotos = [
    {
      id: 1,
      title: 'Nature Photography',
      image: '/images/nature.jpg',
      description: 'Capturing the beauty of the natural world',
    },
    {
      id: 2,
      title: 'Portrait Photography',
      image: '/images/portrait.jpg',
      description: 'Professional portraits that tell your story',
    },
    {
      id: 3,
      title: 'Event Photography',
      image: '/images/event.jpg',
      description: 'Preserving your special moments',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            textAlign: 'center',
            color: 'white',
            zIndex: 1,
          }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Capturing Life's Beautiful Moments
          </Typography>
          <Typography variant="h5" gutterBottom>
            Professional Photography Services
          </Typography>
          <Button
            component={Link}
            to="/gallery"
            variant="contained"
            size="large"
            sx={{ mt: 2 }}
          >
            View Gallery
          </Button>
        </Box>
      </Box>

      {/* Featured Section */}
      <Box sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          Featured Work
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {featuredPhotos.map((photo) => (
            <Grid item xs={12} sm={6} md={4} key={photo.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={photo.image}
                  alt={photo.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h3">
                    {photo.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {photo.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Call to Action */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Ready to Capture Your Story?
        </Typography>
        <Button
          component={Link}
          to="/contact"
          variant="contained"
          size="large"
          sx={{
            mt: 2,
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
    </Box>
  );
};

export default Home; 