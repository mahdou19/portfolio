import React from "react";

import { CardActionArea, CardActions, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import GitHubIcon from "@mui/icons-material/GitHub";

import { Colors } from "../../style/theme/index.jsx";

function CardProject({ projects }) {
  const theme = useTheme();

  return (
    <Grid
      sx={{ flexGrow: 1, m: 0, p: 0 }}
      container
      spacing={2}
      alignItems="center"
    >
      <Grid
        container
        columns={{ xs: 3, sm: 8, md: 12 }}
        alignItems="center"
        direction="row"
        justifyContent="center"
      >
        {projects.map((project, index) => (
          <Grid xs={2} sm={4} md={4}>
            <Card
              key={index}
              sx={{
                maxWidth: 345,
                textAlign: "center",
                mb: 2,
                [theme.breakpoints.down("md")]: {
                  width: "100%",
                  p: 0,
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={project.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.desc}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ justifyContent: "center" }}>
                <GitHubIcon
                  onClick={() => {
                    window.location.href = project.link;
                  }}
                  sx={{
                    fontSize: 40,
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: Colors.white,
                      color: Colors.green,
                    },
                  }}
                />
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default CardProject;
