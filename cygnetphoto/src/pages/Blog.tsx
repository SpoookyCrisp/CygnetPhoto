import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Container,
  Chip,
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

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Art of Wedding Photography',
      excerpt: 'Discover the secrets behind capturing perfect wedding moments and creating timeless memories.',
      image: '/images/blog1.jpg',
      date: 'March 15, 2024',
      category: 'Wedding',
    },
    {
      id: 2,
      title: 'Mastering Portrait Photography',
      excerpt: 'Learn essential techniques for creating stunning portraits that capture the essence of your subjects.',
      image: '/images/blog2.jpg',
      date: 'March 10, 2024',
      category: 'Portrait',
    },
    {
      id: 3,
      title: 'Photography Equipment Guide',
      excerpt: 'A comprehensive guide to choosing the right equipment for different types of photography.',
      image: '/images/blog3.jpg',
      date: 'March 5, 2024',
      category: 'Equipment',
    },
  ];

  return (
    <Box>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mt: 4 }}>
          Photography Blog
        </Typography>

        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Tips, Tricks, and Stories from Our Photographers
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {blogPosts.map((post) => (
            <Grid item xs={12} md={4} key={post.id}>
              <StyledCard>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={post.image}
                    alt={post.title}
                  />
                  <CardContent>
                    <Box sx={{ mb: 2 }}>
                      <Chip
                        label={post.category}
                        size="small"
                        sx={{ mr: 1 }}
                      />
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        component="span"
                      >
                        {post.date}
                      </Typography>
                    </Box>
                    <Typography gutterBottom variant="h5" component="h2">
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {post.excerpt}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </StyledCard>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="body1" color="text.secondary">
            More blog posts coming soon...
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Blog; 