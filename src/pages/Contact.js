import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import img from "../assets/pic.jpg";
import bg from "../assets/bg.jpg";
import "../assets/css/Contact.css";
import { ProfilService } from "../components/ProfilService";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  Alert,
  Box,
  Button,
  Card,
  CardMedia,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import IconComponent from "../components/IconComponent.js";
import "../App.css";
import Skeleton from "@mui/material/Skeleton";

const Contact = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [profilData, setProfilData] = useState();
  const form = useRef();
  const SendSuccess = () => {
    return (
      <Alert severity="success">This is a success alert — check it out!</Alert>
    );
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hjuumqr",
        "template_st76pl4",
        form.current,
        "OFSWMJEBjG6i887sY"
      )
      .then(
        (result) => {
          alert("Message sent");
        },
        (error) => {
          alert("error, please try again !");
        }
      );
  };

  useEffect(() => {
    ProfilService.getDatas().then((data) => {
      setProfilData(data);

      setIsLoading(false);
    });
  }, []);

  const styles = {
    box: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "0.5rem",
    },
    form: {
      textAlign: "center",
      // marginLeft: "3rem",
    },
    grid: {
      textAlign: "center",
      // backgroundColor: "red",
    },
  };
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
          <Grid
            // style={styles.grid}
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
          >
            <Typography
              sx={{ textAlign: "center", fontSize: "30px" }}
              color="secondary"
            >
              Contact
            </Typography>{" "}
            <form style={styles.form} ref={form} onSubmit={sendEmail}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <input
                  type="text"
                  name="user_name"
                  className="input"
                  placeholder="Full Name"
                  required
                ></input>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <input
                  type="text"
                  name="user_email"
                  className="input"
                  placeholder="E-mail"
                  required
                ></input>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <input
                  type="text"
                  name="subject"
                  className="input"
                  placeholder="Subject"
                ></input>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <input
                  // style={styles.textMultiline}
                  type="text"
                  name="message"
                  className="input-multiline"
                  placeholder="Description..."
                ></input>
              </Grid>
              <Box style={styles.box}>
                <Button
                  className="btn"
                  variant="contained"
                  color="secondary"
                  type="submit"
                  value="Send"
                  onClick={SendSuccess}
                >
                  Send
                </Button>
              </Box>{" "}
            </form>
          </Grid>
          <Grid item style={styles.grid} xs={12} sm={12} md={6} lg={6}>
            <Typography
              sx={{ pt: "1.5rem", textAlign: "center", fontSize: "30px" }}
              color="secondary"
            >
              Info
            </Typography>{" "}
            <Typography sx={{ pt: "1.5rem", textAlign: "center" }}>
              {profilData[0].Phone}
            </Typography>
            <Typography sx={{ pt: "1rem", textAlign: "center" }}>
              {profilData[0].Adress}
            </Typography>
            <Link
              href="https://github.com/wajdijbr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography sx={{ pt: "1.5rem", textAlign: "center" }}>
                Github
              </Typography>
            </Link>
            <Link
              href="https://www.behance.net/wajdijaber"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography sx={{ pt: "1rem", textAlign: "center" }}>
                Behance
              </Typography>
            </Link>
            <IconComponent />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Contact;

{
  /* <TextField
// inputProps={{ style: styles.textField }} 
color="secondary"
style={styles.textField}
label="Name"
id="Name"
size="small"
required
/>
<TextField
color="secondary"
style={styles.textField}
label="Email"
id="Email"
size="small"
required
/>
<TextField
color="secondary"
style={styles.textField}
label="Subject"
id="subject"
size="small"
required
/>
<TextField
color="secondary"
style={styles.textField}
id="description_subject"
label="Description"
multiline
rows={4}
size="small"
required
/>
<Box style={styles.box}>
<Button variant="contained" color="secondary">
  Send
</Button>
</Box> */
}
