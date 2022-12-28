import React, { Fragment, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import { Button, Grid, useMediaQuery, useTheme } from "@mui/material";
import { Colors } from "../../../style/theme/index.jsx";
import NavBarMobile from "./NavbarMobile.jsx";
import { Stack } from "@mui/system";
import MyAvatar from "../avatar/Avatar.jsx";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { pages } from "../../../data/data.js";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const theme = useTheme();
  const { pathname } = useLocation();

  const [active, setActive] = useState("");

  const matches = useMediaQuery(theme.breakpoints.down("md"));

  

  return (
    <Fragment>
      <CssBaseline />
      <AppBar sx={{ bgcolor: Colors.green }}>
        <Toolbar>
          <MyAvatar />
          {matches ? (
            <>
              <NavBarMobile />
            </>
          ) : (
            <>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Stack spacing={2} direction="row">
                  {pages.map((page, index) => (
                    <Link to={page.path} className={classes.link}>
                      <Button variant="outlined" size="medium">
                        {page.title}
                      </Button>
                    </Link>
                  ))}
                </Stack>

              </Grid>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Fragment>
  );
}
