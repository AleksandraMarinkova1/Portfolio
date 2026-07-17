import React, { useRef } from "react";
import { Box, Typography, Paper, TextField, Button, Link } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Contacts = () => {
  const form = useRef();

  return (
    <section id="contacts">
      <Box
        sx={{
          py: 10,
          px: 2,
        }}
      >
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ mb: 1 }}
        >
          Get In Touch
        </Typography>

        <Typography
          variant="h3"
          align="center"
          fontWeight="bold"
          sx={{ mb: 8 }}
        >
          Contact Me
        </Typography>

        <Box
          sx={{
            maxWidth: "1100px",
            mx: "auto",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 5,
            alignItems: "stretch",
          }}
        >
          {/* LEFT SIDE */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
            }}
          >
            <Paper
              elevation={6}
              sx={{
                width: "100%",
                borderRadius: 4,
                p: 5,
                // Отстрането: textAlign: "center"
                display: "flex",
                flexDirection: "column",
                alignItems: "center", // Ова ги центрира сите деца хоризонтално
                justifyContent: "center",
                transition: ".3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                },
              }}
            >
              <MailOutlineIcon
                sx={{
                  fontSize: 40,
                  color: "primary.main",
                  mb: 2,
                  // Иконата сега ќе биде центрирана од alignItems: "center" на Paper
                }}
              />

              <Typography variant="h5" fontWeight="bold">
                Email
              </Typography>

              <Typography
                color="text.secondary"
                sx={{
                  mt: 2,
                  wordBreak: "break-word",
                  textAlign: "center", // Додадено за текстот да остане центриран
                }}
              >
                marinkova_aleksandra@yahoo.com
              </Typography>

              <Link
                href="mailto:marinkova_aleksandra@yahoo.com"
                underline="none"
                sx={{
                  mt: 3,
                  fontWeight: 600,
                  fontSize: "1rem",
                }}
              >
                Send a Message →
              </Link>
            </Paper>
          </Box>

          {/* RIGHT SIDE */}
          <Box sx={{ flex: 2 }}>
            <Paper
              elevation={6}
              sx={{
                borderRadius: 4,
                p: { xs: 3, md: 5 },
              }}
            >
              <Box
                ref={form}
                component="form"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                }}
              >
                <TextField label="Full Name" name="name" fullWidth required />

                <TextField
                  label="Email Address"
                  name="email"
                  type="email"
                  fullWidth
                  required
                />

                <TextField
                  label="Message"
                  name="message"
                  multiline
                  rows={6}
                  fullWidth
                  required
                />

                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    mt: 2,
                    py: 1.7,
                    fontWeight: "bold",
                    borderRadius: 3,
                    textTransform: "none",
                    fontSize: "1rem",
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Contacts;