import { Button } from "@mui/material";
import React from "react";
import DownloadIcon from '@mui/icons-material/Download';

function ButtonDownload() {
  return (
    <Button variant="contained" endIcon={<DownloadIcon />} sx={{mx:"auto", mt:5,width: "17vh", justifyContent:"center", alignItems:"center"}}>
      Télécharger mon CV
    </Button>
  );
}

export default ButtonDownload;
