import React from "react";
import { useStyles } from "../../../style/welcome/index.jsx";
import { Box, Typography, useTheme } from "@mui/material";
import ButtonDownload from "../../common/button/ButtonDownload.jsx";

function Welcome() {

  const theme = useTheme()
  const classes = useStyles();
  return (
    <Box className={classes.welcomeContainer}>
      <Box className={classes.welcomeHeader}>
        <Typography variant="h3" className={classes.welcomeTitle} sx={{mb:5, fontFamily: 'Bungee Inline', [theme.breakpoints.down('sm')]: {
            fontFamily: 'Bangers',
            fontWeight: 400,
            
          },}}>
          Developpeur Web FullStack
        </Typography>
        <Typography variant="h6" className={classes.welcomeDescription} >
          Je m'appelle Mamadou SALL , j’ai 26 ans et je suis Développeur Web Full Stack. Je suis alternant en Master I à l'école ESTIAM de Paris en WMD (Web & Mobile Development) et chez 42 Consulting depuis Octobre 2021, j'ai une solide formation en informatique et une expérience professionnelle en développement Web.J'ai travaillé sur de nombreux projets, en utilisant différents langages de programmation et technologies.
        </Typography>
        <ButtonDownload />
      </Box>
      
    </Box>
  );
}

export default Welcome;
