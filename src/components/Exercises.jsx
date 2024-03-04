import react, { useEffect, useState, useContext } from "react";
import FitnessContext from "../context/FitnessContext";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";

// import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
const Exercises = () => {
  const { exercises, setExercises, bodyPart } = useContext(FitnessContext);
  return (
    <>
      <Box id="exercises">
        <Typography variant="h4" mb="46px">
          Showing Results
        </Typography>
        <Stack
          direction="row"
          sx={{ gap: { lg: "110px", xs: "50px" } }}
          flexWrap="wrap"
        >
          {exercises
            ? exercises.map((exercise, index) => (
                <ExerciseCard key={index} exercise={exercise} />
              ))
            : ""}
        </Stack>
      </Box>
      <div>Exercises</div>
    </>
  );
};

export default Exercises;
