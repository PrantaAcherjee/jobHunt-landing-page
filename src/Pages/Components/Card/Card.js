import { Grid,CardContent,Typography, TextField } from '@mui/material';
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
console.log(matchedData.length)
setDisplayData(matchedData)
}
    return (
        <div style={{marginTop:'50px',    marginBottom:'50px'}}>          
          
           <Typography style={{marginBottom:'15px'}} variant='h5'>Welcome to Job Hunt</Typography>
           <TextField
           style={{width:'50%'}}
           placeholder='Search your dream job....'
           type='text'
           onChange={handleSearchBtn}
           />
           <br />
           <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

           {
               displayData.map(pd=><Grid key={pd.id} item xs={2} sm={4} md={4}> 
                                
                   <CardContent variant="outlined">
                        <Typography>
                      Position: {pd.title}
                        </Typography>                  
                        <Typography>
                     Salary: 
                       {pd.salary}
                        </Typography>                  
                        <Typography>
                      Have to nice: {pd.basics}
                    </Typography>                          </CardContent>

               </Grid>)
           } 
           </Grid>
        </div>
    );
};

export default Card;