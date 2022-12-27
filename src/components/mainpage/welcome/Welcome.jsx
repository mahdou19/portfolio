import React from "react";
import { useStyles } from "../../../style/welcome/index.jsx";
import { Box } from "@mui/material";

function Welcome() {
  const classes = useStyles();
  return (
    <Box className={classes.welcomeHeader}>
      <Box className={classes.welcomeContainer}></Box>
    </Box>
  );
}

export default Welcome;
