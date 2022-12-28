import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { useStyles } from "../../../style/skills/index.jsx";
import { type } from "@testing-library/user-event/dist/type/index.js";

const skills = [
  { title: "Front-End", skill: ["React JS", "HTML", "CSS", "MaterialUI", "NPM"] },
  { title: "Back-End", skill: ["NodeJS", "NestJS", "ExpressJS", "MongoDB", "MySQL", "AWS"] },
  { title: "Langage", skill: ["JavaScript", "Python", "TypeScript"] },
];

function Skills() {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <Box className={classes.skillContainer} sx={{ mt: 4 }}>
      <Box
        className={classes.skillHeader}
        sx={{
          [theme.breakpoints.down("sm")]: {
            fontFamily: "Bangers",
            fontSize: "1.5em",
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
            mb: 5,
            fontWeight: 400,
            fontSize: "2.5em",
            fontFamily: "Bungee Inline",
            [theme.breakpoints.down("sm")]: {
              fontFamily: "Bangers",
              fontWeight: 400,
            },
          }}
        >
          COMPETENCES
        </Typography>
        {skills.map((skill) => {
          return (
            <>
              <Typography
                variant="h5"
                gutterBottom
                className={classes.skillTitle}
                sx={{
                    fontSize: "2em",
                    mb: 0,
                    fontFamily: "Bungee Inline",
                  [theme.breakpoints.down("sm")]: {
                    fontFamily: "Bangers",
                    fontSize: "2em",
                    
                  },
                }}
              >
                {skill.title}
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                className={classes.skillSubTitle}
                sx={{
                px: 10,
                  fontWeight: 400,
                  fontSize: "1.5em",
                  [theme.breakpoints.down("sm")]: {
                    px: 7,
                    fontSize: "1em",
                    mb: 2,
                    textAlign: "center",
                  },
                }}
              >
                {skill.skill.join(" - ")}
              </Typography>
            </>
          );
        })}
      </Box>
    </Box>
  );
}

export default Skills;
