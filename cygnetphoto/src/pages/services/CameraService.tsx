import { Container, Typography, Card, CardContent, Box, Grid, Paper, List, ListItem, ListItemText, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from '../../context/ThemeContext';

const cameraService = [
  {
    title: 'Camera Repair',
    description: 'Professional repair services for all major camera brands.',
    price: 'Diagnostics Fee: $100 (Non-Refundable)'
}
];

const CameraService = () => {
  const { isDarkMode } = useTheme();
  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: 8,
        position: 'relative',
        backgroundImage: 'url(/images/services/camera-service-bg.jpg)', // Your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ textAlign: 'center', mb: 6 }}>
          Camera Service
        </Typography>
        <Box>
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
        </Box>

        {/* Disclaimer Section */}
        <Paper sx={{ mt: 6, p: 4, maxWidth: 700, mx: 'auto', backgroundColor: 'background.paper' }} elevation={3}>
          <Typography variant="h5" gutterBottom>Disclaimers</Typography>
          <List dense>
            <ListItem>
              <ListItemText
                primary="Diagnostics Fee"
                secondary="The diagnostic fee is a non-refundable fee that contributes towards the final repair cost. Upon payment of the repair invoice, the customer signifies approval of the additional repair services."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Repair Warranty"
                secondary="All repairs come with a 90-day limited warranty. This warranty only includes repairs tied to the service provided. To file a claim, notify us within the warranty period."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Pick-up"
                secondary="Upon notification, customers have 90 days to pick up their camera or lens. Failure to do so will result in relinquishing ownership. Shipping services are available."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Drop-Off Or Shipping"
                secondary="The customer is responsible for shipping or dropping off your camera and/or lens to us."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Serviceability"
                secondary="We may advise the customer that their equipment is Beyond Economical Repair and will not be repaired."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Return Shipping"
                secondary="For mail-in orders, the return shipping is included in the Diagnostics Fee."
              />
            </ListItem>
          </List>
        </Paper>

        {/* FAQ Section */}
        <Paper sx={{ mt: 6, p: 4, maxWidth: 700, mx: 'auto', backgroundColor: 'background.paper' }} elevation={3}>
          <Typography variant="h5" gutterBottom>Frequently Asked Questions</Typography>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Why does it take so long?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Camera repair and diagnostics are a time-consuming process, we work as fast as we can to get your gear back to you.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>I'm in a hurry and need my gear back ASAP!</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                There is a rush option available to skip the diagnostics queue. However, immediate fixability and the cost to repair may vary depending on the problem with your camera or lens.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Can you fix my camera?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Most cameras and lenses can be repaired, however 
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>How will you contact me?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We like texting for communication, but email is totally fine too if that's your preference.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Paper>
      </Container>
    </Box>
  );
};

export default CameraService; 