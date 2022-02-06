import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Card = () => {
const [data,setData]=useState([]);
useEffect(()=>{
    fetch(`./FakeData.json`)
    .then(res => res.json())
    .then(data => setData(data));
},[])
    return (
        <div>          
          
           <Typography style={{marginTop:'20px',marginBottom:'20px'}} variant='h4'>We will show here our job card</Typography>
           <h4>data : {data.length}</h4> 
        </div>
    );
};

export default Card;