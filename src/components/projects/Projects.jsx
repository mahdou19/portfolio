import React from 'react'
import CardProject from './CardProject.jsx'
import { Container } from '@mui/system'
import { Box, Typography, useTheme } from '@mui/material'
import { useStyles } from '../../style/skills/index.jsx'

function Projects() {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <Container sx={{p:0}}>
          <Box
        className={classes.skillHeader}
        sx={{
          mt: 2,
          [theme.breakpoints.down("sm")]: {
            fontFamily: "Bangers",
            fontSize: "1em",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          className={classes.headerTitle}
          sx={{
            my: 3,
            fontWeight: 400,
            fontSize: "2.5em",
            fontFamily: "Bungee Inline",
            [theme.breakpoints.down("sm")]: {
              fontFamily: "Bangers",
              fontWeight: 400,
            },
          }}
        >
          PROJETS
        </Typography>
      </Box>
      <Box >
      <CardProject/>
      </Box>
    </Container>
  )
}

export default Projects