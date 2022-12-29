
import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';

import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

import { useTheme } from '@mui/material';
import { useStyles } from '../../style/experiences/index.jsx';
import { Colors } from '../../style/theme/index.jsx';

function ExperienceTimeline() {

    const theme = useTheme()
    const classes = useStyles()
  return (
    <Timeline position="alternate" sx={{ [theme.breakpoints.down("sm")]: {
        px: 0,
      },}}>
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        align="right"
        variant="body2"
        color="text.secondary"
      >
        Depuis Oct 2021
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector sx={{background: Colors.green, color: Colors.white}}/>
        <TimelineDot sx={{background: Colors.green, color: Colors.white}} >
          <WorkIcon />
        </TimelineDot>
        <TimelineConnector sx={{background: Colors.green, color: Colors.white}}/>
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" component="span"  sx={{ [theme.breakpoints.down('sm')]: {
            fontSize: "15px",
            fontWeight: "bold"
        }}}>
          Développeur Full Stack
        </Typography>
        <Typography>Alternant Chez 42C</Typography>
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        variant="body2"
        color="text.secondary"
      >
        Oct 2022 - sept 2023
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector sx={{background: Colors.green, color: Colors.white}}/>
        <TimelineDot color="icon" sx={{background: Colors.green, color: Colors.white}}>
          <SchoolIcon />
        </TimelineDot>
        <TimelineConnector sx={{background: Colors.green, color: Colors.white}}/>
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2, }}>
        <Typography variant="h6" component="span" sx={{ [theme.breakpoints.down('sm')]: {
            fontSize: "15px", 
            fontWeight: "bold"
        }}}>
          ESTIAM PARIS
        </Typography>
        <Typography>Master I - WMD</Typography>
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        variant="body2"
        color="text.secondary"
      >
        Oct 2021 - sept 2022
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector sx={{background: Colors.green, color: Colors.white}}/>
        <TimelineDot color="primary" sx={{background: Colors.green, color: Colors.white}}>
          <SchoolIcon />
        </TimelineDot>
        <TimelineConnector sx={{background: Colors.green, color: Colors.white}}/>
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" component="span" sx={{ [theme.breakpoints.down('sm')]: {
            fontSize: "15px", 
            fontWeight: "bold"
        }}}>
          ESTIAM PARIS
        </Typography>
        <Typography>Bachelor III - DAD</Typography>
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        align="right"
        variant="body2"
        color="text.secondary"
      >
        Oct 20 - Nov 20
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector sx={{background: Colors.green, color: Colors.white}}/>
        <TimelineDot sx={{background: Colors.green, color: Colors.white}}>
          <WorkIcon />
        </TimelineDot>
        <TimelineConnector sx={{background: Colors.green, color: Colors.white}} />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" component="span" sx={{ [theme.breakpoints.down('sm')]: {
            fontSize: "15px",
            fontWeight: "bold"
        }}}>
          Developpeur Web
        </Typography>
        <Typography>Stagiaire Chez CIT</Typography>
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        variant="body2"
        color="text.secondary"
      >
        Sept 2019 - Juil 2021
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector sx={{background: Colors.green, color: Colors.white}}/>
        <TimelineDot color="primary" sx={{background: Colors.green, color: Colors.white}}>
          <SchoolIcon />
        </TimelineDot>
        <TimelineConnector sx={{background: Colors.green, color: Colors.white}}/>
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" component="span" sx={{ [theme.breakpoints.down('sm')]: {
            fontSize: "15px",
            fontWeight: "bold"
        }}}>
          Lycée DIDEROT PARIS
        </Typography>
        <Typography>BTS SNIR</Typography>
      </TimelineContent>
    </TimelineItem>
   
    
  </Timeline>
  )
}

export default ExperienceTimeline