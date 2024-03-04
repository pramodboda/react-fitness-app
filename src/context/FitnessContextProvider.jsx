import React, { useState } from "react";

import FitnessContext from "./FitnessContext";

export default function FitnessContextProvider({ children }) {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState([]);

  return (
    <FitnessContext.Provider
      value={{ exercises, setExercises, bodyPart, setBodyPart }}
    >
      {children}
    </FitnessContext.Provider>
  );
}
