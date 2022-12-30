import React from "react";

import { Box, Typography, useTheme } from "@mui/material";

import ExperienceTimeline from "./ExperienceTimeline.jsx";
import { useStyles } from "../../style/skills/index.jsx";
import Footer from "../common/footer/Footer.jsx";

function Experiences() {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <Box
      sx={{
        [theme.breakpoints.down("sm")]: {
          px: 0,
        },
      }}
    >
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
            my: 3,
            fontWeight: 400,
            fontSize: "2.5em",
            fontFamily: "Bungee Inline",
            [theme.breakpoints.down("sm")]: {
              fontFamily: "Bangers",
              fontWeight: 400,
            },
          }}
        >
          EXPERIENCES
        </Typography>
      </Box>
      <Box sx={{ mb: 5 , minHeight: "55vh", height: "auto"}}>
        <ExperienceTimeline />
      </Box>
      <Footer />
    </Box>
  );
}

export default Experiences;
