import react, { useContext } from "react";

import FitnessContext from "../context/FitnessContext";

import Hero from "../components/Hero";
import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";

const Home = () => {
  const { setExercises, bodyParts, setBodyParts } = useContext(FitnessContext);
  return (
    <>
      <Hero />
      <SearchExercises
        setExercises={setExercises}
        bodyParts={bodyParts}
        setBodyParts={setBodyParts}
      />
      <Exercises
        setExercises={setExercises}
        bodyParts={bodyParts}
        setBodyParts={setBodyParts}
      />
    </>
  );
};

export default Home;
