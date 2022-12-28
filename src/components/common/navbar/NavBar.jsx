import React, { Fragment } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Button,
  Divider,
  Grid,
  Tab,
  Tabs,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Colors } from "../../../style/theme/index.jsx";
import NavBarMobile from "./NavbarMobile.jsx";
import { Stack } from "@mui/system";
import MyAvatar from "../avatar/Avatar.jsx";


const pages = [{title : "HOME", path: "/"},{title : "PROJETS", path: "/projects"},{title : "EXPERIENCES", path: "/experiences"}];
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
                     
                    <Button variant="outlined" size="medium" href={page.path}>
                    {page.title}
                  </Button>
                  ))}
                  </Stack>
                  
                  {/* <Tab label="HOME" sx={{ color: "white"}}/>
                  <Divider orientation="vertical" flexItem />
                  <Tab label="PROJECTS" sx={{ color: "white"}}/>
                  <Divider orientation="vertical" flexItem />
                  <Tab label="EXPERIENCES" sx={{ color: "white"}}/> */}
               
              </Grid>
            </>
            
          )}
          
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Fragment>
  );
}
