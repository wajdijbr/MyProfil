import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material";
import AppRouter from "./AppRouter";
import { BrowserRouter } from "react-router-dom";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Bruno Ace", "cursive"].join(","),
    },
    palette: {
      primary: {
        main: "#304cc9",
      },
      secondary: {
        main: "#b43958",
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
