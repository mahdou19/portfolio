import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { useStyles } from "../../../style/skills/index.jsx";

function Skills() {
    const theme = useTheme()
  const classes = useStyles();
  return (
    <Box className={classes.skillContainer} sx={{ mt: 4 }}>
      <Box className={classes.skillHeader}>
        <Typography
          variant="h2"
          gutterBottom
          className={classes.skillTitle}
          sx={{ fontWeight: 400, fontSize: "2.5em", fontFamily: 'Bungee Inline', [theme.breakpoints.down('sm')]: {
            fontFamily: 'Bangers',
            fontWeight: 400,
          }}}
        >
          COMPETENCES
        </Typography>
        <Typography variant="h3" gutterBottom>
          h3. Heading
        </Typography>
      </Box>
    </Box>
  );
}

export default Skills;
