import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, ImageListItem, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import HtmlLogo from '../assets/tech/html-logo.png'
import CssLogo from '../assets/tech/css-logo.png'
import JsLogo from '../assets/tech/js-logo.png'
import ReactLogo from '../assets/tech/react-logo.png'
import MongodbLogo from '../assets/tech/mongodb-logo.png'
import NodeLogo from '../assets/tech/node-logo.png'
import ExpressLogo from '../assets/tech/express-logo.png'
import BootstrapLogo from '../assets/tech/bootstrap-logo.png'
import MuiLogo from '../assets/tech/mui-logo.png'
import Adopta1 from '../assets/projects/adoptaunvalencia1.png'
import Adopta2 from '../assets/projects/adoptaunvalencia2.png'
import Adopta3 from '../assets/projects/adoptaunvalencia3.png'
import Platemate1 from '../assets/projects/platemate1.png'
import Platemate2 from '../assets/projects/platemate2.png'
import Platemate3 from '../assets/projects/platemate3.png'
import Watchlistr1 from '../assets/projects/watchlistr1.png'
import Watchlistr2 from '../assets/projects/watchlistr2.png'
import Watchlistr3 from '../assets/projects/watchlistr3.png'


const projects = [
  {
    title: 'Adopta un Valenciano',
    description: 'This is a collaborative project designed to support individuals affected by the DANA in Valencia. Our platform connects those in need with volunteers offering temporary shelter, food, and hygiene facilities. By uniting efforts, we aim to provide meaningful assistance and a sense of hope during difficult times.',
    images: [Adopta1, Adopta2, Adopta3],
    technologies: [ReactLogo, NodeLogo, ExpressLogo, MongodbLogo, JsLogo],
    link: 'https://adoptaunvalenciano.es/', 
    githubFront: 'https://github.com/adoptaunvalencia/acoge-ayuda',
    githubBack: 'https://github.com/adoptaunvalencia/backend'
  },
  {
    title: 'Platemate',
    description: 'Dynamic recipe-sharing platform that empowers users to upload their own culinary creations, explore and save favorites from other users, and efficiently plan their weekly meals. The application also provides personalized shopping lists, making cooking and meal prep easier and more enjoyable.',
    images: [Platemate1, Platemate2, Platemate3],
    technologies: [ReactLogo, NodeLogo, ExpressLogo, MongodbLogo, JsLogo, MuiLogo],
    link: 'https://platemate-app.netlify.app',
    githubFront: 'https://github.com/enriquepaez/platemate-client',
    githubBack: 'https://github.com/enriquepaez/platemate-server'
  },
  {
    title: 'WatchListr',
    description: 'Web application designed to help users track their favorite TV series. It allows you to manage series you want to watch, those currently in progress, and those you have already finished. The user-friendly interface ensures a seamless experience, making it easy to organize your viewing habits.',
    images: [Watchlistr1, Watchlistr2, Watchlistr3],
    technologies: [ReactLogo, NodeLogo, ExpressLogo, MongodbLogo, JsLogo, BootstrapLogo],
    link: 'https://watchlistrih.netlify.app',
    githubFront: 'https://github.com/r-ruizfer/WatchListR-FrontEnd',
    githubBack: 'https://github.com/r-ruizfer/WatchListR-BackEnd'
  },
];

function Projects() {

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Box py={8}>
      <Typography variant='h4' align="center" pb={8} gutterBottom>
        My Projects
      </Typography>

      <Box display='flex' flexDirection='column' gap={8}>
        {projects.map((project, index) => (
           <Paper
              key={index}
              elevation={3}
              sx={{
                p: 4,
                maxWidth: isMobile ? '280px' : 'auto'
              }}
            >
            <Typography variant="h4">
              {project.title}
            </Typography>

            <Typography variant="body2" color="text.secondary" py={2}>
              {project.description}
            </Typography>

            <Slider {...carouselSettings}>
              {project.images.map((image, idx) => (
                <Box key={idx} display="flex" justifyContent="center">
                  <img src={image} alt={`Project ${index + 1} Screenshot ${idx + 1}`} style={{ width: '100%', maxHeight: '450px', objectFit: 'scale-down' }} />
                </Box>
              ))}
            </Slider>

            <Box
              display="flex"
              justifyContent="center"
              gap={2}
              marginTop={1}
              flexWrap="wrap"
              py={4}
              textAlign="center"
            >
              {project.technologies.map((tech, index) => (
                <ImageListItem
                  key={index}
                  sx={{
                    width: isMobile ? '30px' : '40px',
                  }}
                >
                  <img
                    src={tech}
                    alt='Tech Image'
                  />
                </ImageListItem>
              ))}
            </Box>

            <Box
              display="flex"
              flexDirection={isMobile ? 'column' : 'row'}
              justifyContent="space-around"
            >
              <Button
                variant='outlined'
                color='black'
                component="a"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to website
              </Button>

              <Box display="flex" mt={1} gap={1} flexDirection={isMobile ? 'column' : 'row'}>
                <Button 
                  variant='contained' 
                  sx={{ backgroundColor: 'black' }} 
                  component="a"
                  href={project.githubFront}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon sx={{ marginRight: 1 }} />
                  Client repo
                </Button>

                {project.githubBack ? (
                  <Button 
                    variant='contained' 
                    sx={{ backgroundColor: 'black' }} 
                    component="a"
                    href={project.githubBack}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon sx={{ marginRight: 1 }} />
                    Server repo
                  </Button>
                ) : null}
              </Box>
            </Box>
            
          </Paper>
        ))}
      </Box>
    </Box>
  );
}

export default Projects