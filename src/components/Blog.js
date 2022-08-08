import '../styles/blog-style.css';
import React, { useState } from 'react';
import {Post} from './Post'

function Blog() {
    const[choose,setChoose] = useState('choose')
  
    return (
    <main className='Blog'>
      <div className="App">
        <div className='logo'>
          <div className='buttons'>
            <div className={choose} onClick={()=>setChoose('choose level')}>Newbies</div> <div className='choose'>Beginers</div> <div className='choose'>Advanced</div>
          </div>
        </div>
        <div className='Posts'>
          <Post></Post>
          <Post></Post>
        </div>
      </div>
    </main>
    );
  }
  
  export default Blog;