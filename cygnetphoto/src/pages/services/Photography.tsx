import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';
import { useTheme } from '../../context/ThemeContext';

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

const Photography = () => {
  const { isDarkMode } = useTheme();
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: isDarkMode ? 'background.default' : 'background.paper', py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom sx={{ textAlign: 'center', mb: 6 }}>
          Photography Services
        </Typography>
        <Grid container spacing={4}>
          {photographicServices.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%', bgcolor: isDarkMode ? 'background.paper' : 'background.default', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)' } }}>
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
      </Container>
    </Box>
  );
};

export default Photography; 