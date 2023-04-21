import React,{useEffect, useState} from 'react';
import Post from '../Post';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import { useAutoAnimate } from '@formkit/auto-animate/react'

export default function Home() {
 
  const [posts,setPosts]=useState(null);
  const [parent] = useAutoAnimate({duration:1000});

  useEffect(()=>{

  setTimeout(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos').then((response)=>{
        setPosts(response.data);
      })
  },500)
   
    
  },[])

  if(posts===null) return (
     <div className="home" ref={parent}>
      <CircularProgress color='success' style={{margin:'150px'}}/>
      </div>
    )

  else
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
