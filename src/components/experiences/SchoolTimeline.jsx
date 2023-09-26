import React from "react";

import { useTheme, Typography } from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

import { Colors } from "../../style/theme/index.jsx";

function SchoolTimeline() {
  const theme = useTheme();
  return (
    <div>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          Sept 2019 - Juil 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector
            sx={{ background: Colors.green, color: Colors.white }}
          />
          <TimelineDot
            color="primary"
            sx={{ background: Colors.green, color: Colors.white }}
          >
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector
            sx={{ background: Colors.green, color: Colors.white }}
          />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            sx={{
              [theme.breakpoints.down("sm")]: {
                fontSize: "15px",
                fontWeight: "bold",
              },
            }}
          >
            Lycée DIDEROT PARIS
          </Typography>
          <Typography>BTS SNIR</Typography>
        </TimelineContent>
      </TimelineItem>
    </div>
  );
}

export default SchoolTimeline;
