import React from "react";

import { Button } from "@mui/material";

import DownloadIcon from "@mui/icons-material/Download";

function ButtonDownload() {
  return (
    <Button
      variant="contained"
      endIcon={<DownloadIcon />}
      sx={{
        mx: "auto",
        mt: 5,
        width: "25vh",
        justifyContent: "center",
        alignItems: "center",
      }}
      href="https://drive.google.com/file/d/1ktWViQbKHy-lEf-WXNTg3Uh93Mm0488Y/view?usp=sharing"
    >
      Télécharger mon CV
    </Button>
  );
}

export default ButtonDownload;
