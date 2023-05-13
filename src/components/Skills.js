import React, { useState } from "react";
import Box from "@mui/material/Box";
import { FaCss3, FaCode, FaJava, FaHtml5, FaJs } from "react-icons/fa";
import { styled } from "@mui/material/styles";

import "../assets/css/Skills.css";
import { Grid, Typography } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#304cc9" : "#304cc9",
  },
}));

const Skills = () => {
  return (
    <Box
      sx={{
        maxWidth: 300,
        // backgroundColor: "grey",
        textAlign: "center",
      }}
    >
      <Typography color="secondary" fontSize="25px">
        Skills
      </Typography>

      <Grid container>
        <Grid item container xs={12} sm={21} md={12} lg={12}>
          <Grid item className="container" xs={2} sm={2} md={2} lg={2}>
            <FaJs size={28} className="icon" />
          </Grid>
          <Grid item xs={7} sm={7} md={7} lg={7}>
            <Box sx={{ flexGrow: 1 }}>
              <br />
              <BorderLinearProgress
                variant="determinate"
                value={80}
                sx={{ ml: "1rem" }}
              />
            </Box>
          </Grid>
        </Grid>

        <Grid item container xs={12} sm={21} md={12} lg={12}>
          <Grid className="container" item xs={2} sm={2} md={2} lg={2}>
            <FaJava size={28} className="icon" />
          </Grid>
          <Grid item xs={7} sm={7} md={7} lg={7}>
            <Box sx={{ flexGrow: 1 }}>
              <br />
              <BorderLinearProgress
                variant="determinate"
                value={60}
                sx={{ ml: "1rem" }}
              />
            </Box>
          </Grid>
        </Grid>

        <Grid item container xs={12} sm={21} md={12} lg={12}>
          <Grid className="container" item xs={2} sm={2} md={2} lg={2}>
            <FaHtml5 size={28} className="icon" />
          </Grid>
          <Grid item xs={7} sm={7} md={7} lg={7}>
            <Box sx={{ flexGrow: 1 }}>
              <br />
              <BorderLinearProgress
                variant="determinate"
                value={80}
                sx={{ ml: "1rem" }}
              />
            </Box>
          </Grid>
        </Grid>

        <Grid item container xs={12} sm={21} md={12} lg={12}>
          <Grid className="container" item xs={2} sm={2} md={2} lg={2}>
            <FaCss3 size={28} className="icon" />
          </Grid>
          <Grid item xs={7} sm={7} md={7} lg={7}>
            <Box sx={{ flexGrow: 1 }}>
              <br />
              <BorderLinearProgress
                variant="determinate"
                value={70}
                sx={{ ml: "1rem" }}
              />
            </Box>
          </Grid>
        </Grid>

        <Grid item container xs={12} sm={21} md={12} lg={12}>
          <Grid className="container" item xs={2} sm={2} md={2} lg={2}>
            <FaCode size={28} className="icon" />
          </Grid>
          <Grid item xs={7} sm={7} md={7} lg={7}>
            <Box sx={{ flexGrow: 1 }}>
              <br />
              <BorderLinearProgress
                variant="determinate"
                value={70}
                sx={{ ml: "1rem" }}
              />
            </Box>
          </Grid>
        </Grid>

        {/* <Grid item container       
 xs={12} sm={21} md={12} lg={12}>
          <Grid  className="container" item xs={2} sm={2} md={2} lg={2}>
            <TbSql size={28} className="icon" />
          </Grid>
         <Grid item xs={7} sm={7} md={7} lg={7}>
            <Box sx={{ flexGrow: 1 }}>
              <br />
              <BorderLinearProgress
                variant="determinate"
                value={70}
                sx={{ ml: "1rem" }}
              />
            </Box>
          </Grid>
        </Grid> */}

        {/* <Grid item container           
 xs={12} sm={21} md={12} lg={12}>
          <Grid  className="container" item xs={2} sm={2} md={2} lg={2}>
            <AiOutlineApi size={28} className="icon" />
          </Grid>
          <Grid item xs={7} sm={7} md={7} lg={7}>
            <Box sx={{ flexGrow: 1 }}>
              <br />
              <BorderLinearProgress
                variant="determinate"
                value={70}
                sx={{ ml: "1rem" }}
              />
            </Box>
          </Grid>
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default Skills;
