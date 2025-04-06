import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const SkillCard = ({ title, level }) => (
  <Paper elevation={3} sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2, backgroundColor: '#1e1e2f', color: '#fff' }}>
    <CheckBoxIcon size={24} color="#4db5ff" />
    <Box>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body2" sx={{ color: '#aaa' }}>{level}</Typography>
    </Box>
  </Paper>
);

const Experience = () => {
  return (
    <Box id="experience" sx={{ py: 6, backgroundColor: '#0a0a23', color: '#fff' }}>
      <Typography variant="h5" align="center" sx={{ color: '#aaa' }}>
        The skills I have
      </Typography>
      <Typography variant="h3" align="center" sx={{ mb: 4 }}>
        My Experience
      </Typography>

      <Box className="container" sx={{ maxWidth: '1100px', margin: '0 auto', px: 2 }}>
        <Grid container spacing={4}>
    
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Frontend Development
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}><SkillCard title="HTML" /></Grid>
              <Grid item xs={12}><SkillCard title="CSS"/></Grid>
              <Grid item xs={12}><SkillCard title="JavaScript"/></Grid>
              <Grid item xs={12}><SkillCard title="Bootstrap" /></Grid>
              <Grid item xs={12}><SkillCard title="ReactJs"/></Grid>
            </Grid>
          </Grid>

      
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Backend Development
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}><SkillCard title="Spring Boot" /></Grid>
              <Grid item xs={12}><SkillCard title="MySQL" /></Grid>
              <Grid item xs={12}><SkillCard title="Node.js" /></Grid>
              <Grid item xs={12}><SkillCard title="Azure" /></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Experience;
