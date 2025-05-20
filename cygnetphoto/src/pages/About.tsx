import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Container,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

const About = () => {
  const photographers = [
    {
      name: 'Photographer 1',
      role: 'Lead Photographer',
      bio: 'With over 10 years of experience in professional photography, I specialize in capturing the perfect moments that tell your unique story. My passion for photography began when I received my first camera at the age of 15, and since then, I\'ve been dedicated to creating beautiful, timeless images.',
      image: '/images/photographer1.jpg',
    },
    {
      name: 'Photographer 2',
      role: 'Senior Photographer',
      bio: 'I bring a fresh perspective to every shoot, combining technical expertise with creative vision. My background in fine arts allows me to approach each project with a unique artistic sensibility, ensuring that every photograph is not just a picture, but a work of art.',
      image: '/images/photographer2.jpg',
    },
  ];

  return (
    <Box>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mt: 4 }}>
          About Us
        </Typography>

        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Capturing Life's Beautiful Moments
        </Typography>

        <Typography variant="body1" paragraph sx={{ mt: 4, mb: 6 }}>
          Welcome to Cygnet Photo, where we transform ordinary moments into extraordinary memories. 
          Our team of professional photographers is dedicated to capturing the essence of your special 
          moments with creativity, passion, and technical excellence. Whether it's a wedding, portrait 
          session, or commercial project, we approach each assignment with the same level of dedication 
          and attention to detail.
        </Typography>

        <Typography variant="h4" gutterBottom sx={{ mt: 6, mb: 4 }}>
          Our Team
        </Typography>

        <Grid container spacing={4}>
          {photographers.map((photographer) => (
            <Grid item xs={12} md={6} key={photographer.name}>
              <StyledCard>
                <CardMedia
                  component="img"
                  height="400"
                  image={photographer.image}
                  alt={photographer.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {photographer.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    gutterBottom
                  >
                    {photographer.role}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {photographer.bio}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8, mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            Our Approach
          </Typography>
          <Typography variant="body1" paragraph>
            At Cygnet Photo, we believe that great photography is more than just taking pictures – 
            it's about creating an experience. We work closely with our clients to understand their 
            vision and bring it to life through our lens. Our approach combines technical expertise 
            with artistic vision, ensuring that every photograph tells a story and evokes emotion.
          </Typography>
          <Typography variant="body1" paragraph>
            We pride ourselves on our attention to detail, from the initial consultation to the final 
            delivery of your images. Our goal is to exceed your expectations and provide you with 
            photographs that you'll treasure for years to come.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About; 