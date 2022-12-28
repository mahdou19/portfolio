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
import { Link } from "react-router-dom";
import { pages } from "../../../data/data.js";
import { makeStyles } from "@material-ui/core";
import { Colors } from "../../../style/theme/index.jsx";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: Colors.white
  },
 
}));
export default function NavBarMobile() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(true);

  return (
    <Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List  sx={{ marginTop: "20px"}}>
          {pages.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon onClick={()=> setOpenDrawer(false)}>
                <ListItemText sx={{color: "white", mb: "10px"}}>
                      <Link to={page.path} className={classes.link}>
                      {page.title}
                   </Link>
                  {/* <Divider sx={{ width: "100px" , m: 1}} /> */}
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
