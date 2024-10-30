import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <footer style={{ width: '100%', position: 'relative' }}>
      <Box
        sx={{
          backgroundColor: 'black',
          color: 'white',
          py: 3,
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row', 
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >

        <Typography variant="body1" mb={isMobile ? 2 : 0}>
          Enrique Páez Pozo
        </Typography>

        <Box display="flex" gap={2} mb={isMobile ? 2 : 0}>
          <a 
            href="https://linkedin.com/in/enrique-paez" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              transition: 'transform 0.3s ease, color 0.3s ease',
              color: 'white',
            }}
          >
            <LinkedInIcon fontSize='large' 
              sx={{
                '&:hover': {
                  transform: 'scale(1.2)',
                  color: '#0077B5',
                },
              }} 
            />
          </a>
          <a 
            href="https://github.com/enriquepaez" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              transition: 'transform 0.3s ease, color 0.3s ease',
              color: 'white',
            }}
          >
            <GitHubIcon fontSize='large' 
              sx={{
                '&:hover': {
                  transform: 'scale(1.2)',
                  color: '#333',
                },
              }} 
            />
          </a>
        </Box>

        <Typography variant="body1">
          enrique.paezpozo@gmail.com
        </Typography>
      </Box>
    </footer>
  );
}

export default Footer;
