import { Container, Typography, Card, CardContent, Box, Grid } from '@mui/material';
import { useTheme } from '../../context/ThemeContext';

const cameraService = [
  {
    title: 'Camera Repair',
    description: 'Professional repair services for all major camera brands.',
    price: 'Starting at $75'
  }
];

const CameraService = () => {
  const { isDarkMode } = useTheme();
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: isDarkMode ? 'background.default' : 'background.paper', py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom sx={{ textAlign: 'center', mb: 6 }}>
          Camera Service
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {cameraService.map((service, index) => (
            <Grid item xs={12} md={8} key={index}>
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

export default CameraService; 