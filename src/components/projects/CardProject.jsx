import React from 'react'
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import GitHubIcon from "@mui/icons-material/GitHub";

function CardProject() {
  const theme = useTheme();
  return (
    <Grid sx={{ flexGrow: 1, m:0 }} container spacing={2} >
     <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 8, md: 12 }}  alignItems="center" direction="row"
  justifyContent="center">
      {[0, 1, 2].map((value) => (
         <Grid item xs={2} sm={4} md={4} >
        <Card sx={{ maxWidth: 345, textAlign: "center"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{justifyContent: "center"}}>
      <GitHubIcon
          onClick={() => {
            window.location.href = "https://github.com/";
          }}
          sx={{ fontSize: 40 }}
       
        />
      </CardActions>
    </Card>
    </Grid>
     ))}
    </Grid>
    </Grid>
  )
}

export default CardProject