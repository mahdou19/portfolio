import React from 'react'
import CardProject from './CardProject.jsx'
import { Container } from '@mui/system'
import { Box } from '@mui/material'

function Projects() {
  return (
    <Container sx={{p:0}}>
      <Box>
      <CardProject/>
      </Box>
    </Container>
  )
}

export default Projects