import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Avatar, Grid, Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Behance from "../assets/behnace.png";
const IconComponent = () => {
  return (
    <Grid
      container
      sx={{ mt: "1rem", textAlign: "center", justifyContent: "center" }}
    >
      <Link
        color="inherit"
        href="https://www.facebook.com/dex69ter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon sx={{ m: "5px", color: "#3b5998" }} />
      </Link>

      <Link
        color="inherit"
        href="https://twitter.com/WajdiJabeur"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterIcon sx={{ m: "5px", color: "#1DA1F2" }} />
      </Link>
      <Link
        color="inherit"
        href="https://www.instagram.com/wajdijbr/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon
          sx={{
            m: "5px",
            borderRadius: "25%",

            backgroundImage: "linear-gradient(45deg, #405de6, #e1306c)",
          }}
        />
      </Link>
      <Link
        color="inherit"
        href="https://www.linkedin.com/in/wajdi-jabeur-b011b7205"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon sx={{ m: "5px", color: "#0A66C2" }} />
      </Link>
    </Grid>
  );
};

export default IconComponent;
