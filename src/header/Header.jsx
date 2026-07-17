import React from "react";
import { Container, Typography, Box, Stack } from "@mui/material";
import CVAndContactMe from "./CVAndContactMe";
import me from "../../src/assets/me.jpeg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header id="home">
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)", // Нежен градиент
          position: "relative",
          overflow: "hidden",
          px: 2,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "500px",
            height: "500px",
            background: "linear-gradient(to right, #6366f1, #a855f7)",
            filter: "blur(100px)",
            opacity: 0.15,
            borderRadius: "50%",
            top: "-100px",
            right: "-100px",
          }}
        />

        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems="center"
            justifyContent="space-between"
            spacing={8}
          >
            <Stack
              spacing={2}
              textAlign={{ xs: "center", md: "left" }}
              sx={{ maxWidth: "600px" }}
            >
              <Typography
                variant="h6"
                sx={{ color: "#6366f1", fontWeight: 600, letterSpacing: "2px" }}
              >
                WELCOME TO MY PORTFOLIO
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: "3rem", md: "4.5rem" },
                  lineHeight: 1.1,
                }}
              >
                Hi, I'm <br />
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(to right, #6366f1, #a855f7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Aleksandra
                </Box>
              </Typography>
              <Typography variant="h5" sx={{ color: "#666", fontWeight: 300 }}>
                FullStack Developer specialized in building scalable web
                applications with modern technologies.
              </Typography>
              <Box sx={{ pt: 2 }}>
                <CVAndContactMe />
              </Box>
            </Stack>

            <Box sx={{ position: "relative" }}>
              <Box
                component="img"
                src={me}
                alt="Aleksandra"
                sx={{
                  width: { xs: "280px", md: "400px" },
                  height: { xs: "350px", md: "500px" },
                  objectFit: "cover",
                  borderRadius: "20px",
                  boxShadow: "0 30px 60px rgba(0,0,0,0.2)",
                  position: "relative",
                  zIndex: 2,
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  top: "20px",
                  right: "-20px",
                  width: "100%",
                  height: "100%",
                  border: "4px solid #6366f1",
                  borderRadius: "20px",
                  zIndex: 1,
                }}
              />
            </Box>
          </Stack>
        </Container>

        <Box sx={{ position: "absolute", left: "3rem", bottom: "3rem" }}>
          <HeaderSocials />
        </Box>
      </Box>
    </header>
  );
};

export default Header;
