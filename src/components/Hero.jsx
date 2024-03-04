import react from "react";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';



const Hero = () => {
   return(<><div>
    

    <Box sx={{ width: "100%" }}>
    
      <Stack  sx={{ width: "100%", border:"1px solid red" }}
  direction={{ xs: 'column', sm: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 4 }}
>
<Stack
  direction={{ xs: 'column', sm: 'column' }}
  spacing={{ xs: 1, sm: 2, md: 4 }}
><h1>Fitness Club</h1>
<p>Sweat, Eat, Work and Repeat</p>
 <Button variant="contained">Explore Exercises</Button></Stack>
 
<img src="https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Hero" />
  
</Stack>
    </Box>
    </div></>)
}

export default Hero;





