import { Container, Typography, Card, CardContent, Box, Grid } from '@mui/material';
import { useTheme } from '../../context/ThemeContext';

const cameraSales = [
  {
    title: 'Camera Sales',
    description: 'Used camera equipment from top brands. Expert advice on selecting the right gear for your needs.',
    price: 'Varies by equipment'
  }
];

const CameraSales = () => {
  const { isDarkMode } = useTheme();
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: isDarkMode ? 'background.default' : 'background.paper', py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom sx={{ textAlign: 'center', mb: 6 }}>
          Camera Sales
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {cameraSales.map((service, index) => (
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

export default CameraSales; 