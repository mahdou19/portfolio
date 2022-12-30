import { createTheme } from "@mui/material";

export const Colors = {
  white: "#fff",
  black: "#000",
  primary: "#2e1534",
  secondary: "#063970",
  green: "#005a6a",
  footer: `linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,90,106,1) 100%)`,
};
const theme = createTheme({
  palette: {
    primary: {
      main: Colors.white,
    },
    secondary: {
      main: Colors.white,
    },
    icon: {
      main: Colors.green,
    },
  },
  overrides: {
    MuiGrid: {
      item: {
        paddingLeft: 0,
      },
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: 250,
          background: Colors.green,
          borderRadius: "0px 100px 0px 0px",
          borderRight: `1px solid ${Colors.white}`,
        },
      },
    },
  },
});
export default theme;
