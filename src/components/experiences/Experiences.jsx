import React from "react";

import { Box, useTheme } from "@mui/material";

import ExperienceTimeline from "./ExperienceTimeline.jsx";

import Footer from "../common/footer/Footer.jsx";
import Title from "../common/title/Title.jsx";

function Experiences() {
  const currentPath = window.location.pathname;
  const theme = useTheme();

  return (
    <Box
      sx={{
        [theme.breakpoints.down("sm")]: {
          px: 0,
        },
      }}
    >
      <Title title={"EXPERIENCES"} theme={theme} />
      <Box sx={{ minHeight: "55vh", height: "auto" }}>
        <ExperienceTimeline />
      </Box>
      {currentPath === "/experiences" && <Footer />}
    </Box>
  );
}

export default Experiences;
