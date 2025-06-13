import { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Snackbar,
  Alert,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
}));

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setSnackbar({
      open: true,
      message: 'Thank you for your message! We will get back to you soon.',
      severity: 'success',
    });
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Contact Us
      </Typography>

      <Grid container spacing={4}>
        {/* Contact Info and Map */}
        <Grid item xs={12} md={5}>
          <StyledPaper elevation={3}>
            <Typography variant="h5" gutterBottom>
              Contact Information
            </Typography>
            <Typography variant="body1" paragraph>
              Email: info@cygnetphoto.com
            </Typography>
            <Typography variant="body1" paragraph>
              Location: Lakeland, Florida, United States
            </Typography>
            <Typography variant="body1" paragraph>
              Business Hours: Mon – Fri: 9:00 AM – 6:00 PM EST
            </Typography>
          </StyledPaper>
          <StyledPaper elevation={3} sx={{ mt: 2, p: 0, overflow: 'hidden' }}>
            <iframe
              title="Location"
              src="https://www.google.com/maps?q=Lakeland,Florida,United+States&output=embed"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </StyledPaper>
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} md={7}>
          <StyledPaper elevation={3}>
            <Typography variant="h5" gutterBottom>
              Send Us a Message
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </StyledPaper>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact; 