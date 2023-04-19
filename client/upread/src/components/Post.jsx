import React from 'react'
import { Link } from 'react-router-dom'
import "animate.css/animate.min.css";
// import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Post(props) {

    const {id,url,title,thumbnailUrl}=props.data;

  return (
    // <AnimationOnScroll animateIn="animate__fadeIn">
    <div className='post' key={id}>
          <div className='img'>
          <img src={url} alt=''/>
          </div>
          <div className='content'>
          <Link to={`/post/${id}`}>
          <h1>{title}</h1>
          </Link>
          <p>{thumbnailUrl}</p>
          <button>Read More</button>
          </div>
          </div>
          // </AnimationOnScroll>
  )
}
