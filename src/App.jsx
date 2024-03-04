import { useState } from "react";
import FitnessContextProvider from "./context/FitnessContextProvider";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/exercise/:id",
    element: <ExerciseDetail />,
  },
]);

function App() {
  return (
    <>
      <FitnessContextProvider>
        <Navbar />
        <RouterProvider router={router} />
        <Footer />
      </FitnessContextProvider>
    </>
  );
}

export default App;
