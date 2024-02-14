import React, { useState } from 'react'

function Create() {
    const [title, setTitle] = useState('Enter Title');
  return (
    <div className='create'>
        <h2>Add a New Blog</h2>
        <form action="">
            <label>Blog title:</label>
            <input 
                type="text"
                required
                value={title} 
            />
            <label>Blog body:</label>
            <textarea
                required
            ></textarea>
            <label>Blog author:</label>
            <select>
                <option value="mario">mario</option>
                <option value="yoshi">yoshi</option>
            </select>
            <button>Create Blog</button>
        </form>
    </div>
  )
}

export default Create;