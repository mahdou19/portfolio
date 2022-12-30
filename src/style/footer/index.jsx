import { makeStyles } from "@material-ui/core";

import { Colors } from "../theme/index.jsx";

export const useStyles = makeStyles((theme) => ({
  footerContainer: {
    margin: 0,
    width: "100%",
   
    background: Colors.footer,
    [theme.breakpoints.down("sm")]: {
      minHeight: "15vh",
    },
  },
  footerLine: {
    display: "flex",
    margin: 0,
    width: "100%",
    height: "auto",
    minHeight: "15vh",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      minHeight: "15vh",
    },
  },
  iconFooter: {
    marginRight: "25px",
    marginLeft: "25px",
    color: Colors.white,
    cursor: "pointer",
  },
}));
