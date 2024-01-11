import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Navbar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{background:'#607d8b' , boxShadow:'none' , padding : '1% 3%'}}>
        <Toolbar>
          
          <Typography variant="h5"  fontWeight={700} fontFamily={'DM Sans'} component="div" sx={{ flexGrow: 1 }}>
            DreamBuilders Charity 
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}