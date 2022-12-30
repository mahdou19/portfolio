import { makeStyles } from "@material-ui/core";

import { Colors } from "../theme/index.jsx";

export const useStyles = makeStyles((theme) => ({
  skillContainer: {
    marginTop: "20px",
    padding: 0,
    width: "100%",
    height: "auto",
    minHeight: "55vh",
    background: Colors.white,
    [theme.breakpoints.down("sm")]:{
      marginBottom: "30px",
    }
  
  },
  skillHeader: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexFlow: "column wrap",
    color: Colors.green,
    textAlign: "center",
  },
  headerTitle: {
    textAlign: "center",
    textDecoration: "underline",
  },

  skillSubTitle: {
    color: Colors.black,
  },
}));
