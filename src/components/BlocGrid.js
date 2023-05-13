import React, { useState } from "react";
import img from "../assets/pic.jpg";
import Model from "./Model";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import bg from "../assets/bg.jpg";
import { Card, CardMedia, Typography } from "@mui/material";

import Skills from "./Skills";
import ButtonC from "./ButtonC";
const BlocGrid = () => {
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
        <Grid item xs={7}>
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
                <Model />
              </Paper>
            </Grid>
            <Grid item sx={{ position: "relative", zIndex: 1 }}>
              <Skills />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default BlocGrid;
