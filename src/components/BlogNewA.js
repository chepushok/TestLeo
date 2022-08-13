import '../styles/blog-style.css';
import React, { useState } from 'react';
import {Post} from './Post'
import {PostRU} from './PostRU'
import { BrowserRouter as Router, Link } from "react-router-dom";
import MoiPosti from './MoiPosti'
import Navigation from './Navigation';
import SmoothAppearance from './SmoothAppearance.js'
import {motion} from 'framer-motion'

function BlogNewb() {
    const[post,setPost] = useState(<><Post/></>)


    return (
      <div className='mains'>

        {/* NAVBAR */}
        <div className='navbar-con'>
          <div className='navbar'>
            <div className='logoALEO'>
              Leo.<span>guides</span>
            </div>
            <div className='nav-buttons'>
              <div className='selection'><span>NEWBIES</span></div>
              <div><span>BEGINNER</span></div>
              <div><span>ADVANCED</span></div>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className='content-con'>
          <div className='sderzhivatel'>
            <MoiPosti/>
          </div>
          <div className='content-navigation'>
            <Navigation/>
          </div>
        </div>
      </div>
    );
  }

export default BlogNewb;
