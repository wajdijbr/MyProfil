import React, { useState } from "react";
import ImageListItem from "@mui/material/ImageListItem";

const styles = {
  div: {
    // display: "flex,",
    // justifyContent: "center",
    // alignContent: "center",
    textAlign: "center",
  },
  imageListItem: {
    width: 450,
    marginButtom: "2rem",
    marginTop: "2rem",
  },
  img: {
    width: 500,
    overflow: "hidden",
  },
};

const ImgShow = ({ proj }) => {
  const [project, setProject] = useState(proj);
  console.log(project);
  return (
    <div style={styles.div}>
      {project.map((e) => {
        return (
          <ImageListItem style={styles.imageListItem} key={e.index}>
            <img src={e} style={styles.img} alt={e.label} loading="lazy" />
          </ImageListItem>
        );
      })}
    </div>
  );
};

export default ImgShow;
