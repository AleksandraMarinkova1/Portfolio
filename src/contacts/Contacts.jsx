import React, { useRef } from 'react';
import { Box, Typography, Grid, Paper, TextField, Button, Link } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

const Contacts = () => {
  const form = useRef();

  return (
    <Box id="contacts" sx={{ py: 6, backgroundColor: '#0a0a23', color: '#fff' }}>
      <Typography variant="h5" align="center" sx={{ color: '#aaa' }}>
        Get in touch
      </Typography>
      <Typography variant="h3" align="center" sx={{ mb: 4 }}>
        Contact Me
      </Typography>

      <Box className="container" sx={{ maxWidth: '1000px', mx: 'auto', px: 3 }}>
        <Grid container spacing={4}>
          {/* Contact Option */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                backgroundColor: '#1e1e2f',
                color: '#fff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
                textAlign: 'center',
              }}
            >
              <MailIcon size={32} color="#4db5ff" />
              <Typography variant="h6">Email</Typography>
              <Typography variant="body2">marinkova_aleksandra@yahoo.com</Typography>
              <Link
                href="mailto:marinkova_aleksandra@yahoo.com"
                underline="none"
                sx={{ mt: 1, color: '#4db5ff', fontWeight: 'bold' }}
              >
                Send a message
              </Link>
            </Paper>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={10} sx={{width:'50%'}}>
            <Box
              ref={form}
              component="form"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                backgroundColor: '#1e1e2f',
                p: 3,
                borderRadius: 2
              }}
            >
              <TextField
                label="Your Full Name"
                name="name"
                required
                fullWidth
                variant="filled"
                InputProps={{ style: { color: 'white' } }}
                InputLabelProps={{ style: { color: '#aaa' } }}
              />
              <TextField
                label="Your Email"
                name="email"
                type="email"
                required
                fullWidth
                variant="filled"
                InputProps={{ style: { color: 'white' } }}
                InputLabelProps={{ style: { color: '#aaa' } }}
              />
              <TextField
                label="Your Message"
                name="message"
                required
                multiline
                rows={5}
                fullWidth
                variant="filled"
                InputProps={{ style: { color: 'white' } }}
                InputLabelProps={{ style: { color: '#aaa' } }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  mt: 2,
                  backgroundColor: '#4db5ff',
                  fontWeight: 'bold',
                  '&:hover': { backgroundColor: '#3a97d3' },
                }}
              >
                Send Message
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contacts;
