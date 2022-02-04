 import React from 'react';
 import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

 const Header = () => {
   return (
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant='h5'>JOB HUNT</Typography>
           
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             
          </Typography>
          <Button color="inherit">Jobs</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
   );
 };
 
 export default Header;