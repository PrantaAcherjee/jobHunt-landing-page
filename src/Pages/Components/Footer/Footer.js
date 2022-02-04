import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';

const Footer = () => {
    return (           
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 12, md: 12 }}>
           
            <Grid item xs={4} sm={4} md={4}>
               <Typography variant='h5'>JOB HUNTING</Typography>
               <Typography style={{textAlign:'justify',marginTop:'5px',marginLeft:'20px'}}>
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quia delectus culpa perspiciatis molestias animi mollitia aperiam non saepe.Sed.
               </Typography>
               <br />
               <Typography>Get Touch On Social</Typography>
               <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'5px'}}>
                   <div style={{margin:'10px',height:'20px',width:'20px',color:'blue',}}><i style={{fontSize:'30px'}} class="fab fa-facebook"></i></div>
                   <div style={{margin:'10px',height:'20px',width:'20px',color:'darkCyan'}}><i style={{fontSize:'30px'}} class="fab fa-twitter"></i></div>
                   <div style={{margin:'10px',height:'20px',width:'20px',color:'red'}}><i style={{fontSize:'30px'}} class="fab fa-youtube"></i></div>
               </div>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <Typography variant='h5'>QUICK START</Typography>
                <Link style={{textDecoration:'none'}}>HOME</Link><br />
                <Link style={{textDecoration:'none' }}>ABOUT</Link><br />
                <Link style={{textDecoration:'none' }}>STUDIO</Link><br />
                <Link style={{textDecoration:'none'}}>TRAINING</Link>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <Typography variant='h5'>
                NEWS LETTER
                </Typography>              
                <form>
                <TextField id="standard-basic" label="Standard" variant="standard" /><br />
                <TextField id="standard-basic" label="Standard" variant="standard" /><br />
                <button type='submit'>Submit</button>
                </form>             
            </Grid>
        
        </Grid>
      </Box>   
    );
};

export default Footer;