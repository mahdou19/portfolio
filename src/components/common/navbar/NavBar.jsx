import React, { Fragment } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Divider,
  Grid,
  Tab,
  Tabs,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Colors } from "../../../style/theme/index.jsx";
import NavBarMobile from "./NavbarMobile.jsx";

const pages = ["HOME", "PROJETS", "EXPERIENCES"];
export default function NavBar() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <CssBaseline />
      <AppBar sx={{ bgcolor: Colors.green }}>
        <Toolbar>
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
                <Tabs
                  value={value}
                  onChange={handleChange}
                  centered
                  indicatorColor="secondary"
                  textColor="primary"
                  
                >
                  {pages.map((page, index) => (
                    <Tab label={page} sx={{ color: "white" }} />
                  ))}
                  
                  {/* <Tab label="HOME" sx={{ color: "white"}}/>
                  <Divider orientation="vertical" flexItem />
                  <Tab label="PROJECTS" sx={{ color: "white"}}/>
                  <Divider orientation="vertical" flexItem />
                  <Tab label="EXPERIENCES" sx={{ color: "white"}}/> */}
                </Tabs>
              </Grid>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Fragment>
  );
}
