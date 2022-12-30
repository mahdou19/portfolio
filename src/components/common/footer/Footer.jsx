import React from "react";

import { Alert, Box, Divider, Typography } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

import { useStyles } from "../../../style/footer/index.jsx";
import { Colors } from "../../../style/theme/index.jsx";

function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.footerContainer}>
      <Box className={classes.footerLine}>
        <GitHubIcon
          onClick={() => {
            window.location.href = "https://github.com/";
          }}
          sx={{ fontSize: 40 }}
          className={classes.iconFooter}
        />
        <LinkedInIcon
          onClick={() => {
            window.location.href = "https://www.linkedin.com/login";
          }}
          className={classes.iconFooter}
          sx={{ fontSize: 40 }}
        />
        <EmailIcon
          onClick={() => {
            window.location = "mailto:yourmail@domain.com";
          }}
          className={classes.iconFooter}
          sx={{ fontSize: 40 }}
        />
      </Box>
      <Box sx={{textAlign: "center"}} >
          <Typography sx={{color: Colors.white, pb: 2}}>  © 2023 - Mamadou SALL </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
