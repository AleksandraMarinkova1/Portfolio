import React from "react";
import { Container, Typography, Button, Box, Grid } from '@mui/material';
// import CVAndContactMe from './header/CVAndContactMe';
// import me from '../../portfolio/src/assets/me.jpeg'
import CVAndContactMe from "./CVAndContactMe";
import me from '../../src/assets/me.jpeg'


const Header = () => {
    return (
  <header id="home">
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          textAlign: 'center',
          backgroundColor: '#f0f0f0',
        }}
      >
        <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2}>
          <Grid item>
            <Typography variant="h5" sx={{ fontWeight: 400 }}>
              Hello, I'm
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
              Aleksandra Marinkova
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" sx={{ fontWeight: 300, color: 'gray' }}>
             FullStack Developer
            </Typography>
          </Grid>
          <Grid item>
            <CVAndContactMe />
          </Grid>
          <Grid item>
            <Box mt={3}>
              <a href="#contacts" className="scroll__down">
              <Typography
                  variant="body1"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    color: '#000',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    transform: 'rotate(-90deg)', // Rotates the text
                    whiteSpace: 'nowrap',
                    height: 'auto',
                    width: 'auto',
                    cursor: 'pointer',
                    marginLeft:'300%',
                    '&:hover': {
                      color: '#007bff', // Change color on hover
                    },
                  }}
                >
                  Scroll Down
                </Typography>
                <img
              src={me}
              alt="me"
              style={{
                width: '150px', // Adjust the width as needed
                height: 'auto', // Maintain aspect ratio
                borderRadius: '50%', // Optional: makes the image circular
              }}
            />
              </a>
             
            </Box>
          </Grid>
        </Grid>
      </Container>
    </header>
    );
}
export default Header;