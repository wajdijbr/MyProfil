import { Box, Button, Paper } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Projects",
    href: "/projects",
  },
];

const styles = {
  Button: {
    margin: "auto",

    top: 5,
    boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.3)",
  },
  Paper: {
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "space-around",
    position: "relative",
    top: 30,
  },
};
const ButtonC = () => {
  const [activeNavItem, setActiveNavItem] = useState(0);

  const handleNavItemClick = (index) => {
    setActiveNavItem(index);
  };
  // console.log(button);

  return (
    <>
      <Paper elevation={0} style={styles.Paper}>
        {navItems.map((navItem, index) => {
          const isActive = index === activeNavItem;
          const buttonStyle = {
            textShadow: isActive
              ? "0 0 10px #304cc9, 0 0 20px #304cc9, 0 0 30px #304cc9, 0 0 40px #304cc9, 0 0 50px #304cc9, 0 0 60px #304cc9, 0 0 70px #304cc9"
              : "none",
            color: "aliceblue",
            fontFamily: '"Bruno Ace", "cursive"',
            textDecoration: "none",
          };
          const buttonStyleBg = {
            backgroundColor: isActive ? "#304cc9" : "#b43958",
            borderRadius: "15px",
            paddingLeft: "5px",
            paddingRight: "5px",
            paddingTop: "10px",
            boxShadow: isActive
              ? "0 0 10px #304cc9, 0 0 10px #304cc9, 0 0 10px #304cc9,0 0 10px #304cc9"
              : "none",
            paddingBottom: "35px",
          };
          return (
            <div style={buttonStyleBg} key={index}>
              <Link
                style={buttonStyle}
                onClick={() => handleNavItemClick(index)}
                to={navItem.href}
              >
                {navItem.title}
              </Link>
            </div>
          );
        })}
      </Paper>
    </>
  );
};

export default ButtonC;
