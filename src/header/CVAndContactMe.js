import React from 'react'
import { Container, Typography, Button,Box } from '@mui/material';
import CV from '../assets/Aleksandra Marinkova CV.pdf'

const CVAndContactMe = () => {


  
    return (
      <Box sx={{ display:'flex'}}>
      <Box sx={{ gap:'5',paddingRight:'28px'}}>
        <a href={CV} download="Aleksandra Marinkova CV.pdf">
        <Button variant="text" style={{paddingRight:'4px',border:'1px solid blue'}} >
          Download CV
        </Button>
        </a>
        </Box>
        <Button variant="contained" >
          Contact Me
        </Button>
        </Box>
      
    );
  }

export default CVAndContactMe;