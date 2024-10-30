import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Toolbar>
        <Box
          sx={{
            display: 'flex',
            flexGrow: 1,
            justifyContent: 'space-around',
            alignItems: 'center'
            }}
          >
          <Typography variant="h6">
            My Portfolio
          </Typography>
          <Box>
            <Button 
              component={Link} 
              to="/" 
              color="inherit" 
              sx={{ 
                mx: 1,
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: '#f5f5f5',
                  transform: 'scale(1.1)',
                  textDecoration: 'underline'
                },
              }}
            >
              About
            </Button>
            <Button 
              component={Link} 
              to="/projects" 
              color="inherit" 
              sx={{ 
                mx: 1,
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: '#f5f5f5',
                  transform: 'scale(1.1)',
                  textDecoration: 'underline'
                },
              }}
            >
              Projects
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
