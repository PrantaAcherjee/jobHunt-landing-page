import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link, Typography } from '@mui/material';
import MailchimpForm from './../../MailchimpForm';

const Footer = () => {
    
     
    return (           
        <div>
            <Box  sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 12, md: 12 }}>
           
            <Grid item xs={4} sm={4} md={4}>
               <Typography style={{color:'#424242'}} variant='h5'>JOB HUNTING</Typography>
               <Typography style={{textAlign:'justify',marginTop:'5px',marginLeft:'20px',color:'#616161'}}>
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quia delectus culpa perspiciatis molestias animi mollitia aperiam non saepe.Sed.
               </Typography>
               <br />
               <Typography style={{color:'blue'}}>Get Touch On Social</Typography>
               <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'5px'}}>
                   <div style={{margin:'10px',height:'20px',width:'20px',color:'blue',}}><i style={{fontSize:'30px'}} class="fab fa-facebook"></i></div>
                   <div style={{margin:'10px',height:'20px',width:'20px',color:'darkCyan'}}><i style={{fontSize:'30px'}} class="fab fa-twitter"></i></div>
                   <div style={{margin:'10px',height:'20px',width:'20px',color:'red'}}><i style={{fontSize:'30px'}} class="fab fa-youtube"></i></div>
               </div>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <Typography style={{color:'#424242'}} variant='h5'>QUICK START</Typography>
                <Link style={{textDecoration:'none',color:'#455a64'}}>HOME</Link><br />
                <Link style={{textDecoration:'none',color:'#455a64'}}>ABOUT</Link><br />
                <Link style={{textDecoration:'none',color:'#455a64' }}>STUDIO</Link><br />
                <Link style={{textDecoration:'none',color:'#455a64'}}>TRAINING</Link>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <Typography style={{color:'#424242',paddingLeft:'2px'}} variant='h6'>
                GET NEWS LETTER FOR FUTURE UPDATES
                </Typography>

        {/* letter form */}
          <MailchimpForm></MailchimpForm>
                 
     </Grid>
        
        </Grid>
        <p style={{color:'gray',marginTop:'30px'}}>&copy; Job Hunt. All Right Reserved</p>
      </Box>
        </div>   
    );
};

export default Footer;

 