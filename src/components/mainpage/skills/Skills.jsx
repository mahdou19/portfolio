import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { useStyles } from "../../../style/skills/index.jsx";


const skills = [ {title : "Front-End", skill: ["React JS", "HTML", "CSS"]}]

function Skills() {
    const theme = useTheme()
  const classes = useStyles();
  return (
    <Box className={classes.skillContainer} sx={{ mt: 4 }}>
      <Box className={classes.skillHeader} sx={{  [theme.breakpoints.down('sm')]: {
            fontFamily: 'Bangers',
            fontSize: "1.5em",
            justifyContent: 'center',
            alignItems: "center"
          }}}>
        <Typography
          variant="h2"
          gutterBottom
          className={classes.headerTitle}
          sx={{ fontWeight: 400, fontSize: "2.5em", fontFamily: 'Bungee Inline', [theme.breakpoints.down('sm')]: {
            fontFamily: 'Bangers',
            fontWeight: 400,
          }}}
        >
          COMPETENCES
        </Typography>
        <Typography variant="h3" gutterBottom className={classes.skillTitle}  sx={{  [theme.breakpoints.down('sm')]: {
            fontFamily: 'Bangers',
            fontSize: "2em",
         
          }}}>
          Front-End
        </Typography>
        <Typography variant="h6" gutterBottom className={classes.skillSubTitle} sx={{ ml: 10,fontWeight: 400, fontSize: "1.5em", [theme.breakpoints.down('sm')]: {
          
            fontSize: "1em",
            m:0,
            textAlign: "center"
          }}}>
            React Js, HTML, React JS, HTML, CSS
        </Typography>
      </Box>
    </Box>
  );
}

export default Skills;
