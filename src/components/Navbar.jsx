import React from 'react'

export default function Navbar() {
  return (
    <div>
        <div className='navbar'>
            <div className='left-section'>
                <a className='blog-title'>The Bal Blog</a>
            </div>

            <div className='right-section'>
                <a style={{marginRight: "20px"}}>Home</a>
                <a className='new-blog-button'>New Blog</a>
            </div>

        </div>
    </div>
  )
}

