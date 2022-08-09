import '../styles/blog-style.css';
import React, { useState } from 'react';
import {Post} from './Post'
import {PostRU} from './PostRU'

function BlogNewb() {
    const[post,setPost] = useState(<><Post/><Post/><Post/></>)
  
    return (
    <div className='Blog'>
      <div className="App">
        <div className='logo'>
          <div className='buttons'>
            <div className='choose'>Newbies</div> <div className='choose level'>Beginers</div> <div className='choose'>Advanced</div>
          </div>
        </div>
        <div className='Posts'>
          <div className='langbuttons'>
            <button onClick={()=> setPost(<><PostRU/><PostRU/><PostRU/></>)}>RU</button>
            <button onClick={()=> setPost(<><Post/><Post/><Post/></>)}>EN</button>
          </div>
        {post}
        </div>
      </div>
    </div>
    );
  }
  export default BlogNewb;