import React, { Fragment, useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@material-ui/core";

import { Link } from "react-router-dom";

import { Colors } from "../../../style/theme/index.jsx";

import { pages } from "../../../data/data.js";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: Colors.white,
  },
}));
export default function NavBarMobile() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List sx={{ marginTop: "20px" }}>
          {pages.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon onClick={() => setOpenDrawer(false)}>
                <ListItemText sx={{ color: "white", mb: "10px" }}>
                  <Link to={page.path} className={classes.link}>
                    {page.title}
                  </Link>
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </Fragment>
  );
}
