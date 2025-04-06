import React from "react";
import { Container, Typography, Box, Grid } from '@mui/material';
import CVAndContactMe from "./CVAndContactMe";
import me from '../../src/assets/me.jpeg'
import HeaderSocials from "./HeaderSocials";


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
          backgroundColor: '#ebe8e8',
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
                  position:'absolute',
                  right:'-1.1rem',
                  bottom:'5rem',
                  transform:'rotate(90deg)',
                  fontWeight:'300px',
                  fontSize:'1.6rem'
                  }}
                >
                  Scroll Down
                </Typography>
                <img
              src={me}
              alt="me"
              style={{
                width: '180px',
                height: 'auto',
                borderRadius: '7%',
              }}
            />
              </a>
             
            </Box>
          </Grid>
          <Grid item>
            <HeaderSocials/>
          </Grid>
        </Grid>
      </Container>
    </header>
    );
}
export default Header;