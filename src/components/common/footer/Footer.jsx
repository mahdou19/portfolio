import React from "react";

import { Box } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

import { useStyles } from "../../../style/footer/index.jsx";

function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.footerContainer}>
      <Box className={classes.footerLine}>
      <GitHubIcon onClick={() => { window.location.href = 'https://github.com/' }} sx={{ fontSize: 40 }} className={classes.iconFooter}/>
      <LinkedInIcon onClick={() => { window.location.href = 'https://www.linkedin.com/login' }} className={classes.iconFooter} sx={{ fontSize: 40 }}/>
      <EmailIcon onClick={() => { window.location = 'mailto:yourmail@domain.com' }} className={classes.iconFooter} sx={{ fontSize: 40 }}/>
      </Box>
    </Box>
  );
}

export default Footer;
