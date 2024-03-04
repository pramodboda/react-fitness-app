import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
export default function ExerciseCard({ exercise }) {
  return (
    <>
      <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
        <Card sx={{ minWidth: 200 }}>
          <CardMedia
            component="img"
            sx={{ height: 300 }}
            image={exercise.gifUrl}
            alt={exercise.name}
            title="green iguana"
          />

          <CardActions>
            <Stack direction="row" spacing={1} s>
              <Chip
                label={exercise.bodyPart}
                size="small"
                color="primary"
                sx={{
                  textTransform: "capitalize",
                  background: "#eceff1",
                  color: "#1e1e1e",
                }}
              />
              <Chip
                label={exercise.target}
                size="small"
                color="success"
                sx={{
                  textTransform: "capitalize",
                  background: "#eceff1",
                  color: "#1e1e1e",
                }}
              />
            </Stack>
          </CardActions>
          <CardContent>
            <Typography textTransform="capitalize" gutterBottom>
              {exercise.name}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </>
  );
}
