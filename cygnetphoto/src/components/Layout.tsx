import type { ReactNode } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const theme = useTheme();

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh',
        width: '100vw',
        maxWidth: '100%',
        overflowX: 'hidden',
        backgroundColor: theme.palette.background.default,
      }}
    >
      <AppBar position="static" color="default" elevation={1} sx={{ width: '100%' }}>
        <Container maxWidth="xl" sx={{ width: '100%' }}>
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                flexGrow: 1,
                textDecoration: 'none',
                color: 'inherit',
                fontWeight: 700,
              }}
            >
              Cygnet Photo
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                component={RouterLink}
                to="/"
                color="inherit"
                sx={{ fontWeight: 500 }}
              >
                Home
              </Button>
              <Button
                component={RouterLink}
                to="/gallery"
                color="inherit"
                sx={{ fontWeight: 500 }}
              >
                Gallery
              </Button>
              <Button
                component={RouterLink}
                to="/blog"
                color="inherit"
                sx={{ fontWeight: 500 }}
              >
                Blog
              </Button>
              <Button
                component={RouterLink}
                to="/about"
                color="inherit"
                sx={{ fontWeight: 500 }}
              >
                About
              </Button>
              <Button
                component={RouterLink}
                to="/contact"
                color="inherit"
                sx={{ fontWeight: 500 }}
              >
                Contact
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container
        component="main"
        maxWidth="xl"
        sx={{
          flex: 1,
          py: 4,
          width: '100%',
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        {children}
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: theme.palette.background.paper,
          borderTop: `1px solid ${theme.palette.divider}`,
          width: '100%',
        }}
      >
        <Container maxWidth="xl" sx={{ width: '100%' }}>
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Cygnet Photo. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout; 