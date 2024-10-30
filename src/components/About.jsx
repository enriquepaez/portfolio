import { useNavigate } from 'react-router';
import ProfilePicture from '../assets/foto.png';
import { Avatar, Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

function About() {

  const navigate = useNavigate();
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const pdfUrl = 'https://drive.google.com/uc?export=download&id=1nhhWM75BcbEjzIIiZfa0547Zx-ArLE5i';

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = pdfUrl;
    link.download = 'Enrique-Paez-CV.pdf';
    link.click();
  };

  return (
    <Box my={6}>
      <Box display="flex" alignItems="center" textAlign="center" flexDirection={isMobile ? 'column' : 'row'}>
        <Avatar 
          alt="Profile Picture" 
          src={ProfilePicture} 
          sx={{ width: 100, height: 100, border: '3px solid black' }}
        />
        <Typography variant="h4" ml={isMobile ? 0 : 2} mt={isMobile ? 2 : 0}>
          Hi, I’m Enrique Páez
        </Typography>
      </Box>

      <Box py={4}>
        <Typography variant={isMobile ? 'body2' : 'body1'} paragraph>
          A <strong>Full-Stack Developer</strong> with a solid foundation in both backend and frontend technologies. After working in various fields, I decided to shift my career towards technology.
        </Typography>
        <Typography variant={isMobile ? 'body2' : 'body1'} paragraph>
          I’m currently pursuing a <strong>Bachelor's Degree in Computer Engineering</strong> while completing intensive training programs in software development. I am proficient in languages such as <strong>Java</strong>, <strong>JavaScript</strong>, <strong>Python</strong>, and <strong>SQL</strong>, and have experience with frameworks and tools including <strong>ReactJS</strong>, <strong>NodeJS</strong>, <strong>ExpressJS</strong>, <strong>Spring</strong>, and <strong>Hibernate</strong>.
        </Typography>
        <Typography variant={isMobile ? 'body2' : 'body1'} paragraph>
          In addition to my software development experience, I have a background in technical support, where I developed <strong>strong communication skills</strong> and a <strong>customer-focused approach</strong>. My internship as a Back-End Developer at Tragsatec allowed me to apply my knowledge in developing interfaces for data retrieval and visualization.
        </Typography>
        <Typography variant={isMobile ? 'body2' : 'body1'} paragraph>
          I am comfortable working in <strong>Agile</strong> and <strong>collaborative environments</strong> and have experience with various databases, including <strong>MongoDB</strong>, <strong>MySQL</strong>, and <strong>PostgreSQL</strong>.
        </Typography>
        <Typography variant={isMobile ? 'body2' : 'body1'} paragraph>
          I am committed to continuous learning and look forward to contributing my skills to challenging projects while growing as a developer within a dynamic team. I am open to remote work and flexible schedules, always focused on delivering high-quality results.
        </Typography>
      </Box>

      <Box
        display="flex"
        flexDirection={isMobile ? 'column' : 'row'}
        justifyContent="space-around"
        alignItems="center"
        width="100%"
      >
        <Button
          onClick={() => navigate("/projects")}
          variant='outlined'
          color='black'
          sx={{
            padding: '12px 24px',
            my: 2,
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: '#f5f5f5',
              transform: 'scale(1.05)',
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)'
            },
          }}
        >
          Go to my projects
        </Button>
        <Button
          onClick={handleDownload}
          variant='contained'
          sx={{
            backgroundColor: 'black',
            padding: '12px 24px',
            my: 2,
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: '#333',
              transform: 'scale(1.05)',
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          <DownloadIcon sx={{ marginRight: 1 }} />
          Download CV
        </Button>
      </Box>
    </Box>
  )
}

export default About