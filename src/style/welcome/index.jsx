import { Colors } from "../theme/index.jsx";

import { makeStyles } from "@material-ui/core";

import background from "../../assets/images/image2.jpg";

export const useStyles = makeStyles((theme) => ({
  welcomeContainer: {
    margin: 0,
    width: "100%",
    minHeight: "90vh",
    height: "auto",
    background: `linear-gradient(to bottom right,#04303140, #00606473),url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  welcomeHeader: {
    padding: "50px",
    width: "100%",
    minHeight: "90vh",
    height: "auto",
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
    color: Colors.white,
    [theme.breakpoints.down("xs")]: {
      padding: "35px",
      fontFamily: "Bungee Inline",
    },
  },
  welcomeTitle: {
    textAlign: "center",
  },
  welcomeDescription: {
    textAlign: "center",
    paddingLeft: "10em",
    paddingRight: "10em",
    [theme.breakpoints.down("md")]: {
      padding: "10px",
    },
  },
}));
