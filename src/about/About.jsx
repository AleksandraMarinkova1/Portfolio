import React from 'react';
import { Box, Typography, Card, CardContent,Divider } from '@mui/material';
import myImage from '../assets/me.jpeg'

const About = () => {
  return (
    <section id="about">
      <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
        <Typography variant="h5" color="textSecondary">
          Get To Know
        </Typography>
        <Typography variant="h4" fontWeight="bold">
          About Me
        </Typography>
      </Box>

      <Box className="container about__container" sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', gap: 4 }}>
        
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <img src={myImage} alt="Me" style={{ borderRadius: '50%', width: '200px', height: '200px', objectFit: 'cover' }} />
        </Box>

        
        <Box sx={{ flex: 2 }}>
          <Box sx={{ display: 'flex', gap: 4, justifyContent: 'space-between', marginBottom: 4 }}>
            
           
            <Card sx={{ width: '50%' }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Degree</Typography>
                <Typography variant="body2" color="textSecondary">
                Faculty of Computer Science and Engineering) <br />
                  <i>University of Ss.Cyril and Methodius</i>
                 <i> <b> 01/10/2020 – Current </b></i>
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ width: '50%' }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Certifications</Typography>
                <Typography variant="body2" color="textSecondary">Amazon Web Services (AWS)  01/07/2024 – 01/07/2027 </Typography>
              </CardContent>
            </Card>

         

          </Box>

          <Typography variant="body1" color="textSecondary">
          • Software development engineer with 1 year and 10 months of experience in the software development
industry. <Divider/>
• Experienced in frontend web and backend development, mainly using Javascript frameworks(React) with
backend experience with node.js, OOP, databases. <Divider/>
• Currently focused on becoming a better and complete full stack developer, learning AWS and keeping up to
date with newer trends, technologies and coding best practices.<Divider/>
• Enjoy working in teams, meeting and working with people, sharing experiences and ideas.Constantly working
on improving myself in every aspect of my programming journey.<Divider/>
          </Typography>
        </Box>

      </Box>
    </section>
  );
};

export default About;
