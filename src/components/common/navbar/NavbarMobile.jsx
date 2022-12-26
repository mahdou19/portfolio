import React, { Fragment, useState } from "react";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";



const pages = ["HOME", "PROJETS", "EXPERIENCES"];

export default function NavBarMobile() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List  sx={{ marginTop: "18px"}}>
          {pages.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText sx={{color: "white"}}>
                  {page}
                  <Divider sx={{ width: "180px" , m: 1}} />
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
