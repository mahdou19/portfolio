import { createTheme } from "@mui/material";

export const Colors = {
  white: "#fff",
  black: "#000",
  primary: "#2e1534",
  secondary: "#063970",
  green: "#005a6a",
};
const theme = createTheme({
  palette: {
    primary: {
      main: Colors.white,
    },
    secondary: {
      main: Colors.white,
    },
  },
});
export default theme;
