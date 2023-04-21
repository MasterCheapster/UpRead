import React from 'react'
import Post from './Post'
import { useEffect,useState} from 'react';
import axios from 'axios';
import { useAutoAnimate } from '@formkit/auto-animate/react';

export default function Menu() {

    const [parent] = useAutoAnimate({duration:1000});
    const [posts,setPosts]=useState([
        {
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
            url:'https://images.pexels.com/photos/15735888/pexels-photo-15735888.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
            },
            {
            id: 2,
            title: "qui est esse",
            body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
            url:'https://images.pexels.com/photos/4573481/pexels-photo-4573481.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
            },
            {
            id: 3,
            title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut",
            url:'https://images.pexels.com/photos/4738517/pexels-photo-4738517.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
            },
            {
            id: 4,
            title: "eum et est occaecati",
            body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
            url:'https://images.pexels.com/photos/15199055/pexels-photo-15199055.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
            }
    ]);

 
   if(posts===null)
   return(null)
   else
   return (
    <div className='menu' ref={parent}>
    <h1>Other posts you may like</h1>
    {
      posts.map((post,index)=>{
        return (
        <div className='post' key={post.id}>
        <img src={post.url} alt="" />
        <h2>{post.title}</h2>
        <button>Read More</button>
        </div>

        )})
    }
    </div>
  )
}
