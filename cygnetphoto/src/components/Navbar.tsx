import { AppBar, Toolbar, Button, Box, useTheme, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme as useCustomTheme } from '../context/ThemeContext';
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
  const theme = useTheme();
  const { isDarkMode } = useCustomTheme();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Services', path: '/services' },
    { label: 'Blog', path: '/blog' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <AppBar 
      position="static"
      sx={{ 
        bgcolor: 'background.default',
        boxShadow: 'none',
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <Stack spacing={2} sx={{ py: 2 }}>
        {/* Logo */}
        <Box
          component={RouterLink}
          to="/"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            height: 80,
            transition: 'height 0.3s ease-in-out'
          }}
        >
          <Box
            component="img"
            src="/images/logo/image.png"
            alt="Cygnet Photo Logo"
            sx={{
              height: '100px',
              width: '225px',
              transition: 'all 0.3s ease-in-out'
            }}
          />
        </Box>

        {/* Navigation Links and Theme Toggle */}
        <Toolbar 
          sx={{ 
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 48,
            px: 2,
            transition: 'all 0.3s ease-in-out'
          }}
        >
          <Box 
            sx={{ 
              display: 'flex', 
              gap: 2,
              alignItems: 'center',
              position: 'relative',
              width: '100%',
              maxWidth: '800px',
              justifyContent: 'center'
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={RouterLink}
                to={item.path}
                sx={{
                  color: isDarkMode ? 'text.primary' : 'text.primary',
                  '&:hover': {
                    bgcolor: isDarkMode ? 'action.hover' : 'action.hover',
                  },
                  height: 40,
                  px: 2,
                  transition: 'all 0.3s ease-in-out'
                }}
              >
                {item.label}
              </Button>
            ))}
            <Box 
              sx={{ 
                display: 'flex',
                alignItems: 'center',
                height: 40,
                position: 'absolute',
                right: 0,
                transition: 'all 0.3s ease-in-out'
              }}
            >
              <ThemeToggle />
            </Box>
          </Box>
        </Toolbar>
      </Stack>
    </AppBar>
  );
};

export default Navbar; 