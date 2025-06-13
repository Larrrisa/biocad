import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontSize: 16,
    h2: {
      fontSize: 32,
      fontWeight: 600,
      [`@media (max-width:600px)`]: {
        fontSize: 20,
      },
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          fontSize: "16px",
          backgroundColor: "#f0f0f0",
          textTransform: "uppercase",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "16px",
        },
      },
    },
  },
});

export default theme;
