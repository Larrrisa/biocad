import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontSize: 16,
    h2: {
      fontSize: 32,
      fontWeight: 600,
      "@media (max-width:600px)": {
        fontSize: 20,
      },
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          fontSize: 16,
          backgroundColor: "#f0f0f0",
          textTransform: "uppercase",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: 16,
          "&.Mui-focused": {
            color: "#1976d2",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& fieldset": {
            borderColor: "#e0e0e0",
          },
          "&:hover fieldset": {
            borderColor: "#1976d2",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#1976d2",
          },
        },
      },
    },
  },
});
export default theme;
