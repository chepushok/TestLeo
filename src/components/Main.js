import React from 'react'
import '../styles/styles.css'
import Beginners from './Beginners'
import Newbies from './Newbies'
import Advanced from './Advanced'
import { BrowserRouter as Router, Link } from "react-router-dom";

const Main = () => {
    return (
        <main>
            <div className='middle-con'>
                <div className='block-con'>
                    <Newbies/>
                    <Beginners/>
                    <Advanced/>
                </div>
            </div>
        </main>
    )
}

export default Main