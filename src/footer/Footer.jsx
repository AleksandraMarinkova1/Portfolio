import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Stack,
  Link as MuiLink,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "My Projects", href: "#myprojects" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        py: 6,
        backgroundColor: "#1a1a1a", // Потемна нијанса за подобар контраст
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", mb: 3, letterSpacing: "2px" }}
      >
        ALEKSANDRA
      </Typography>

      <Stack
        direction="row"
        justifyContent="center"
        spacing={{ xs: 2, md: 4 }}
        sx={{ mb: 3 }}
      >
        {links.map((link) => (
          <MuiLink
            key={link.name}
            href={link.href}
            underline="none"
            sx={{
              color: "#aaa",
              "&:hover": { color: "#fff" },
              transition: "0.3s",
            }}
          >
            {link.name}
          </MuiLink>
        ))}
      </Stack>

      <Stack direction="row" justifyContent="center" spacing={2} sx={{ mb: 3 }}>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/aleksandra-marinkova-964ba3235/"
          target="_blank"
          sx={{
            color: "#aaa",
            "&:hover": { color: "#0077b5", transform: "scale(1.1)" },
          }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://github.com/AleksandraMarinkova1?tab=repositories"
          target="_blank"
          sx={{
            color: "#aaa",
            "&:hover": { color: "#fff", transform: "scale(1.1)" },
          }}
        >
          <GitHubIcon />
        </IconButton>
      </Stack>

      <Typography variant="body2" sx={{ color: "#666", fontSize: "0.8rem" }}>
        &copy; {new Date().getFullYear()} Aleksandra Marinkova. Built with React
        & MUI.
      </Typography>
    </Box>
  );
};

export default Footer;
