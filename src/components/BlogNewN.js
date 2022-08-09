import '../styles/blog-style.css';
import React, { useState } from 'react';
import {Post} from './Post'
import {PostRU} from './PostRU'

function BlogNewN() {
    const[choose,setChoose] = useState('choose')
    const[post,setPost] = useState(<><Post/><Post/><Post/></>)
  
    return (
    <div className='Blog'>
      <div className="App">
        <div className='logo'>
          <div className='buttons'>
            <div className={choose} onClick={()=>setChoose('choose level')}>Newbies</div> <div className='choose'>Beginers</div> <div className='choose'>Advanced</div>
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
  export default BlogNewN;