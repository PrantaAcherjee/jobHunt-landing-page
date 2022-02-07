import { Grid,Paper,Typography, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Card = () => {
const [data,setData]=useState([]);
const [displayData,setDisplayData]=useState([]);
useEffect(()=>{
    fetch(`./FakeData.json`)
    .then(res => res.json())
    .then(data => {
    setData(data)
    setDisplayData(data)
    });
},[])
const handleSearchBtn=(e)=>{
const searchText=e.target.value;
const matchedData=data.filter(pd=>pd.title.toLowerCase().includes(searchText.toLowerCase()));
// console.log(matchedData.length)
setDisplayData(matchedData)
}
    return (
        <div style={{marginTop:'60px',    marginBottom:'100px',height:'100vh'}}>          
          
           <Typography style={{marginBottom:'15px',color:'darkCyan'}} variant='h4'>Welcome to Job Hunt</Typography>
           <TextField
           style={{width:'50%',marginBottom:'20px'}}
           placeholder='Search your dream job....'
           type='text'
           onChange={handleSearchBtn}
           />
           <br />
           <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

           {
               displayData.map(pd=><Grid key={pd.id} item xs={2} sm={4} md={4}> 
                                
                   <Paper style={{padding:'15px'}} elevation={3}>
                        <Typography style={{color:'#482880',fontSize:'23px'}}>
                      Position: {pd.title}
                        </Typography>                  
                        <Typography style={{color:'#4a148c',fontSize:'18px'}}>
                        Salary: 
                       {pd.salary}
                        </Typography>                  
                        <Typography style={{color:'#4a148c',fontSize:'16px'}}>
                      Nice to have: {pd.basics}
                    </Typography>                          </Paper>

               </Grid>)
           } 
           </Grid>
        </div>
    );
};

export default Card;