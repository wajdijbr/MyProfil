import React, { useState, useEffect } from "react";
import Skills from "../components/Skills";
import { DataService } from "../services/DataService";
import { Button, Grid, List } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import Skeleton from "@mui/material/Skeleton";

import Typography from "@mui/material/Typography";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ImgShow from "../components/ImgShow";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import bg from "../assets/bg.jpg";
import "../assets/css/Project.css";

const styles = {
  div: {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: "1rem",
    marginButtom: "25px",
    justifyContent: "center",
    // width: 700,
  },

  dialog: {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    padding: "2rem",

    color: "white",
  },
  headerFooter: {
    backgroundColor: "#b43958",
    color: "white",
  },
};

const Projects = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [proj, setProj] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = (project) => {
    setProj(project);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    DataService.getDatas().then((data) => {
      setData(data);
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
        <Grid container style={styles.div}>
          <Grid item>
            <Typography color="secondary" fontSize="30px">
              Projects
            </Typography>
          </Grid>

          <Grid container style={styles.div}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <List style={styles.list}>
                {data.map((project) => {
                  return (
                    <>
                      <ListItemButton
                        sx={{ justifyContent: "flex-end" }}
                        component="a"
                        onClick={() => handleClick(project)}
                        key={project.id}
                        className="list-project"
                      >
                        <ListItemText
                          primary={project.label}
                          className="list-item"
                        />
                      </ListItemButton>
                    </>
                  );
                })}
              </List>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Skills />
            </Grid>
          </Grid>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle style={styles.headerFooter}>{proj.label}</DialogTitle>
            <DialogContent
              style={styles.dialog}
              className="scrollable-container"
            >
              <Typography>{proj.desc}</Typography>
              <ImageList
                sx={{
                  width: "auto",
                  height: "auto",
                  // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
                  transform: "translateZ(0)",
                  // backgroundColor: "red",
                }}
                rowHeight={200}
                gap={1}
              >
                <ImgShow proj={proj.img} />
              </ImageList>
            </DialogContent>
            <DialogActions style={styles.headerFooter}>
              <Button onClick={handleClose}>Close</Button>
            </DialogActions>
          </Dialog>
        </Grid>
      )}
    </>
  );
};

export default Projects;
