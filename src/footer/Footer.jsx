import React from 'react';
import { Box, Typography, IconButton, Grid } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <>
     <Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',       
    alignItems: 'center',            
    width: '100%',
    height: '60vh',                   
    py: 4,                              
    backgroundColor: '#333',
    color: '#fff',
    position: 'relative'
  }}
>
  
  <Typography variant="h6" className="footer__logo" sx={{ fontWeight: 'bold', color: '#fff' }}>
    ALEKSANDRA
  </Typography>

  <Box sx={{ mt: 2 }}>
    <Grid container spacing={2} justifyContent="center">
      <Grid item>
        <a href="#home" style={{ textDecoration: 'none', color: '#fff' }}>Home</a>
      </Grid>
      <Grid item>
        <a href="#about" style={{ textDecoration: 'none', color: '#fff' }}>About</a>
      </Grid>
      <Grid item>
        <a href="#experience" style={{ textDecoration: 'none', color: '#fff' }}>Experience</a>
      </Grid>
      <Grid item>
        <a href="#myprojects" style={{ textDecoration: 'none', color: '#fff' }}>My Projects</a>
      </Grid>
    </Grid>
  </Box>

  
  <Box sx={{ mt: 2 }}>
    <IconButton
      color="inherit"
      href="https://www.linkedin.com/in/aleksandra-marinkova-964ba3235/"
      target="_blank"
    >
      <LinkedInIcon />
    </IconButton>
    <IconButton
      color="inherit"
      href="https://github.com/AleksandraMarinkova1?tab=repositories"
      target="_blank"
    >
      <GitHubIcon />
    </IconButton>
  </Box>
</Box>


<Box sx={{ textAlign: 'center', mt: 2 }}>
  <Typography variant="body2" color="inherit">
    &copy; Aleksandra Marinkova. All rights reserved.
  </Typography>
</Box>

    </>
  );
};

export default Footer;
