import React, {useState} from 'react'
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
                   <Link to = '/Newbies'><Newbies/></Link>
                   <Link to = '/Beginners'><Beginners/></Link>
                   <Link to = '/Advanced'><Advanced/></Link>
                </div>
            </div>
        </main>
    )
}

export default Main