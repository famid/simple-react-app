import React, { useEffect, useState } from 'react'
import { BlogList } from './BlogList';
import useFetch from '../useFetch';

export default function Home() {

  // const { blogs, isPending, error } = useFetch('http://localhost:3000/blogs');
  const { error, isPending, data: blogs } = useFetch('http://localhost:3000/blogss');
  return (
    <div className='home'>
       { error && <div>{ error }</div> }
        <p>{isPending && 'Loading....'}</p>
        
        {blogs && <BlogList blogs={blogs}/>}
    </div>
  )
}
