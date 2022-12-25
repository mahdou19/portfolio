import React, { Fragment } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid, Tab, Tabs } from "@mui/material";

export default function NavBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <CssBaseline />
      <AppBar sx={{ bgcolor: "#005a6a" }}>
        <Toolbar>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Tabs
              value={value}
              onChange={handleChange}
              centered
              indicatorColor="secondary"
              textColor="primary"
            >
              <Tab label="HOME" />
              <Tab label="PROJECTS" />
              <Tab label="EXPERIENCES" />
            </Tabs>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Fragment>
  );
}
