import { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home";
import ExerciseDetail from './pages/ExerciseDetail';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/exercise/:id", element:<ExerciseDetail/>
  },
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navbar/>
<RouterProvider router={router} />
<Footer/>
    </>
  )
}

export default App
