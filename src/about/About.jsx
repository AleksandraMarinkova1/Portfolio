import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import myImage from "../assets/me.jpeg";

const About = () => {
  return (
    <section id="about">
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h5" color="text.secondary">
          Get To Know
        </Typography>

        <Typography variant="h3" fontWeight="bold">
          About Me
        </Typography>
      </Box>

      <Box
        className="container about__container"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 6, md: 10 },
          maxWidth: "1200px",
          margin: "0 auto",
          px: 2,
        }}
      >
        {/* Profile Image */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={myImage}
            alt="Me"
            sx={{
              width: { xs: 220, md: 320 },
              height: { xs: 220, md: 320 },
              objectFit: "cover",
              borderRadius: "50%",
              border: "6px solid",
              borderColor: "primary.main",
              boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
            }}
          />
        </Box>

        {/* Content */}
        <Box sx={{ flex: 2 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 3,
              mb: 4,
            }}
          >
            {/* Degree */}
            <Card
              elevation={5}
              sx={{
                borderRadius: 4,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                },
              }}
            >
              <CardContent sx={{ textAlign: "center", py: 4 }}>
                <Typography variant="h6" fontWeight="bold">
                  🎓 Degree
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography variant="body2">
                  Faculty of Computer Science and Engineering
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ mt: 1, fontStyle: "italic" }}
                >
                  University of Ss. Cyril and Methodius
                </Typography>

                <Typography
                  variant="caption"
                  color="primary"
                  display="block"
                  sx={{ mt: 2, fontWeight: 600 }}
                >
                  Oct 2020 – Present
                </Typography>
              </CardContent>
            </Card>

            {/* AWS */}
            <Card
              elevation={5}
              sx={{
                borderRadius: 4,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                },
              }}
            >
              <CardContent sx={{ textAlign: "center", py: 4 }}>
                <Typography variant="h6" fontWeight="bold">
                  ☁️ Certification
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography variant="body2">
                  AWS Certified Cloud Practitioner
                </Typography>

                <Typography
                  variant="caption"
                  color="primary"
                  display="block"
                  sx={{ mt: 2, fontWeight: 600 }}
                >
                  Jul 2024 – Jul 2027
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              lineHeight: 2,
              fontSize: "1.05rem",
              textAlign: "justify",
            }}
          >
            Experienced <strong>Full-Stack Developer</strong> with over{" "}
            <strong>3 years</strong> of experience building scalable web
            applications using <strong>React</strong>,{" "}
            <strong>TypeScript</strong>, <strong>Node.js</strong>, and{" "}
            <strong>PostgreSQL</strong>. Passionate about developing responsive,
            modern, and user-friendly interfaces while collaborating in agile
            environments. Continuously learning new technologies and always
            focused on writing clean, maintainable, and high-quality code.
          </Typography>
        </Box>
      </Box>
    </section>
  );
};

export default About;