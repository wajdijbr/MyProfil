import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import img from "../assets/pic.jpg";
import bg from "../assets/bg.jpg";
import { Button, Card, CardMedia, Typography } from "@mui/material";

import IconComponent from "../components/IconComponent";
import ButtonC from "../components/ButtonC";
import "../assets/css/Contact.css";

const About = () => {
  const handleDownload = () => {
    const fileUrl =
      "https://docs.google.com/document/d/e/2PACX-1vRaOUlS3lBpUxHG76bYPl3bosPAANsdSiC6InuKeyzOTkeCQDAz1Eq9CqpZhrcNzw/pub"; // Replace with the URL of the file you want to download
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Cv_JABEUR_Wajdi.pdf"; // Replace with the desired file name
    link.target = "_blank"; // Open in a new tab
    link.rel = "noopener noreferrer";
    link.click();
  };
  const styles = {
    paper: {
      maxWidth: 700,
      margin: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage: `url(${bg})`,
      position: "relative",
      color: "white",
      boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.3)",
    },
    typography: {
      fontSize: 12,
    },
  };
  return (
    <>
      <Grid
        container
        wrap="wrap-reverse"
        justifyContent="space-between"
        sx={{ p: "1rem" }}
      >
        <Grid item xs={12} sm={12} md={8} lg={8}>
          {" "}
          <Typography style={styles.typography}>
            Hi, I'm JABEUR WAJDI,
          </Typography>
          <Typography
            sx={{ fontSize: 23, marginBottom: "2rem" }}
            color="secondary"
          >
            JABEUR WAJDI
          </Typography>
          <Typography style={styles.typography}>
            {" "}
            a freelance web developer with a passion for creating engaging,
            responsive, and user-friendly websites and web applications. I have
            honed my skills in various programming languages and frameworks such
            as HTML, CSS, JavaScript, Java and React.
          </Typography>
          <Typography style={styles.typography}>
            I specialize in collaborating with clients to deliver customized web
            solutions that meet their unique needs and achieve their business
            goals. As a freelancer, I offer flexible and affordable services,
            and I'm committed to delivering high-quality work that exceeds my
            clients' expectations. Let's bring your project to life!
          </Typography>
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <IconComponent />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Button
                className="btn"
                variant="contained"
                color="secondary"
                onClick={handleDownload}
              >
                Download CV
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Card sx={{ maxWidth: "auto" }}>
            <CardMedia sx={{ height: 350 }} image={img} title="Wajdi jabeur" />
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
