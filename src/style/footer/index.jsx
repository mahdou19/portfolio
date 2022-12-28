import { makeStyles } from "@material-ui/core";

import { Colors } from "../theme/index.jsx";

export const useStyles = makeStyles((theme) => ({
  footerContainer: {
    margin: 0,
    width: "100%",
    height: "auto",
    minHeight: "30vh",
    background: Colors.footer,
    [theme.breakpoints.down("sm")]: {
      minHeight: "25vh",
    },
  },
  footerLine: {
    display: "flex",
    margin: 0,
    width: "100%",
    height: "auto",
    minHeight: "30vh",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      minHeight: "25vh",
    },
  },
  iconFooter: {
    marginRight: "25px",
    marginLeft: "25px",
    color: Colors.white,
    cursor: "pointer",
  },
}));
