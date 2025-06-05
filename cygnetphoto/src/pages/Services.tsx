import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';
import { useTheme } from '../context/ThemeContext';

const Services = () => {
  const { isDarkMode } = useTheme();

  const photographicServices = [
    {
      title: 'Portrait Photography',
      description: 'Professional portraits for individuals, families, and corporate headshots. Perfect for capturing special moments and professional branding.',
      price: 'Starting at $150'
    },
    {
      title: 'Event Photography',
      description: 'Comprehensive coverage for sports, corporate events, and special occasions. Custom packages available.',
      price: 'Starting at $500'
    },
    {
      title: 'Commercial Photography',
      description: 'High-quality product and commercial photography for businesses. Perfect for marketing materials and online presence.',
      price: 'Starting at $300'
    }
  ];

  const cameraServices = [
    {
      title: 'Camera Sales',
      description: 'Used camera equipment from top brands. Expert advice on selecting the right gear for your needs.',
      price: 'Varies by equipment'
    },
    {
      title: 'Camera Repair',
      description: 'Professional repair services for all major camera brands.',
      price: 'Starting at $75'
    },
  ];

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        bgcolor: isDarkMode ? 'background.default' : 'background.paper',
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom 
          sx={{ 
            textAlign: 'center',
            mb: 6,
            color: isDarkMode ? 'text.primary' : 'text.primary'
          }}
        >
          Our Services
        </Typography>

        <Typography 
          variant="h3" 
          component="h2" 
          gutterBottom 
          sx={{ 
            mb: 4,
            color: isDarkMode ? 'text.primary' : 'text.primary'
          }}
        >
          Photographic Services
        </Typography>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {photographicServices.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  bgcolor: isDarkMode ? 'background.paper' : 'background.default',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)'
                  }
                }}
              >
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {service.description}
                  </Typography>
                  <Typography variant="h6" color="primary">
                    {service.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography 
          variant="h3" 
          component="h2" 
          gutterBottom 
          sx={{ 
            mb: 4,
            color: isDarkMode ? 'text.primary' : 'text.primary'
          }}
        >
          Camera Sales & Service
        </Typography>
        <Box
          sx={{
            position: 'relative',
            py: 6,
            px: 2,
            borderRadius: 2,
            backgroundImage: 'url(/images/services/camera-bg.jpg)', // You can change this path later
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              borderRadius: 2,
            }
          }}
        >
          <Grid 
            container 
            spacing={4} 
            sx={{ 
              justifyContent: 'center',
              maxWidth: '800px',
              margin: '0 auto',
              position: 'relative',
              zIndex: 1
            }}
          >
            {cameraServices.map((service, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card 
                  sx={{ 
                    height: '100%',
                    bgcolor: isDarkMode ? 'background.paper' : 'background.default',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)'
                    }
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {service.description}
                    </Typography>
                    <Typography variant="h6" color="primary">
                      {service.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Services; 