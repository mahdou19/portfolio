import React from "react";

import { Box, Typography } from "@mui/material";

import { useStyles } from "../../../style/skills/index.jsx";

function Title({ title, theme }) {

  const classes = useStyles();

  return (
    <Box
      className={classes.skillHeader}
      sx={{
        mt: 2,
        [theme.breakpoints.down("sm")]: {
          fontFamily: "Bangers",
          fontSize: "1em",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Typography
        variant="h2"
        gutterBottom
        className={classes.headerTitle}
        sx={{
          fontWeight: 400,
          fontSize: "2.5em",
          fontFamily: "Bungee Inline",
          [theme.breakpoints.down("sm")]: {
            fontFamily: "Bangers",
            fontWeight: 400,
          },
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}

export default Title;
