import '../styles/blog-style.css';
import React, { useState } from 'react';
import {Post} from './Post'
import {PostRU} from './PostRU'
import { BrowserRouter as Router, Link } from "react-router-dom";

function BlogNewb() {
    const[post,setPost] = useState(<><Post/><Post/><Post/></>)
  
    return (
    <div className='Blog'>
      <div className="App">
        <div className='logo'>
          <div className='buttons'>
            <Link to='/Newbies'><div className='choose'>Newbies</div></Link> <Link to='/Beginners'><div className='choose level'>Beginners</div></Link> <Link to='/Advanced'><div className='choose'>Advanced</div></Link>
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