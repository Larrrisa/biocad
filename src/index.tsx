import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";

import App from "./App";
import theme from "./theme";

import "./styles/global.css";

const root = createRoot(document.getElementById("root")!);
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
