import React from "react";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { useState } from "react";
import img from "./assets/pic.jpg";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import bg from "./assets/bg.jpg";
import { Card, CardMedia, Typography } from "@mui/material";

import Skills from "./components/Skills";
import ButtonC from "./components/ButtonC";
import ProfilService from "./components/ProfilService";
import Projects from "./pages/Projects";

const AppRouter = () => {
  const styles = {
    paper: {
      maxWidth: 750,
      minHeight: 392,
      margin: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage: `url(${bg})`,
      color: "white",
      boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.3)",
    },
    Grid: {
      display: "flex",
    },
  };
  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          display: "relative",
        }}
      >
        <Grid item xs={12} sm={12} md={7} lg={7}>
          <Grid container sx={{ display: "flex", justifyContent: "center" }}>
            <Grid item xs={12}>
              <ButtonC />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                justifyContent: "flex-end",
                display: "relative",
                zIndex: 2,
              }}
            >
              <Paper style={styles.paper} elevation={24}>
                <Routes>
                  <Route id="0" exact path="/" element={<Home />} />
                  <Route id="1" exact path="/contact" element={<Contact />} />
                  <Route id="2" exact path="/about" element={<About />} />
                  <Route id="3" exact path="/projects" element={<Projects />} />
                </Routes>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default AppRouter;
