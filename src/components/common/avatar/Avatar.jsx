
import React from "react";

import { Link } from "react-router-dom";

import { Avatar } from "@mui/material";
import { useTheme } from "@emotion/react";

import avatar from "../../../assets/images/avatar1.png";

function MyAvatar() {
  const theme = useTheme();
  return (
    <>
    <Link to="/">
      <Avatar
        alt="Remy Sharp"
        src={avatar}
        sx={{
          width: 45,
          height: 45,
          ml: 5,
          [theme.breakpoints.down("sm")]: {
            m: 0,
          },
        }}
      />
      </Link>
    </>
  );
}

export default MyAvatar;
