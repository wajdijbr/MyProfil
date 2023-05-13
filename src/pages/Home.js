import React, { useEffect, useState } from "react";
import img from "../assets/pic.jpg";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import bg from "../assets/bg.jpg";
import { Card, CardMedia, Typography } from "@mui/material";

import IconComponent from "../components/IconComponent";
import ButtonC from "../components/ButtonC";
import Skills from "../components/Skills";
import Skeleton from "@mui/material/Skeleton";
import { makeStyles } from "@mui/material/styles";
import { ProfilService } from "../components/ProfilService";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [profilData, setProfilData] = useState();

  useEffect(() => {
    ProfilService.getDatas().then((data) => {
      setProfilData(data);

      setIsLoading(false);
    });
  }, []);
  return (
    <>
      {isLoading ? (
        <Grid sx={{ width: "700px" }}>
          <Skeleton variant="text" />
          <Skeleton variant="circle" width={700} height={40} />
          <Skeleton variant="rect" width={700} height={118} />
        </Grid>
      ) : (
        <Grid
          container
          wrap="wrap-reverse"
          justifyContent="space-between"
          sx={{ p: "1rem" }}
        >
          <Grid item xs={12} sm={12} md={8} lg={8}>
            {" "}
            <Typography textAlign="left" fontSize="25px" sx={{ mt: "5rem" }}>
              {profilData[0].job}
            </Typography>
            <p className="font-name">
              {profilData[0].FirstName} {profilData[0].LastName}
            </p>
            <Typography textAlign="left">{profilData[0].home}</Typography>
            <IconComponent />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Card sx={{ maxWidth: "auto" }}>
              <CardMedia
                sx={{ height: 350 }}
                image={img}
                title="Wajdi Jabeur"
              />
            </Card>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Home;
