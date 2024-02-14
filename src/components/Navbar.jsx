import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <div className='navbar'>
            <div className='left-section'>
                <a className='blog-title'>The Bal Blog</a>
            </div>

            <div className='right-section'>
                {/* <a href="/" style={{marginRight: "20px"}}>Home</a> */}
                <Link to="/" style={{marginRight: "20px"}}>Homa</Link>
                {/* <a href="/create" className='new-blog-button'>New Blog</a> */}
                <Link to="/create" className='new-blog-button'>New Blog</Link>
            </div>

        </div>
    </div>
  )
}

