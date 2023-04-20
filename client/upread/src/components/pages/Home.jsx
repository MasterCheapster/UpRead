import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Post from '../Post';
import axios from 'axios';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Home() {
 
  const [posts,setPosts]=useState([]);

  useEffect(()=>{
    
      axios.get('https://jsonplaceholder.typicode.com/photos').then((response)=>{
        setPosts(response.data);
  })
   
    
  },[])

  if(posts===null) return (
    <div style={{width:'100vw',height:'100vh'}}>
    <Stack width='100px' height='100px' spacing={1}>
    <Skeleton variant="circular" width={40} height={40} />
    <Skeleton variant="rectangular" width={210} height={60} />
    <Skeleton variant="rounded" width={210} height={60} />
  </Stack>
  </div>
  )
  
  return (
    <div className='home'>
    <div className='posts'>
    {
      posts.map((post,index)=>{
        return (
       
          index<10 && <Post data={post}/>
  
        )
      })
    }
    </div>
    </div>
  )
}
