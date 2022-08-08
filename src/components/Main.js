import React, {useState} from 'react'
import '../styles/styles.css'
import Beginners from './Beginners'
import Newbies from './Newbies'

const Main = () => {

    return (
        <main>
            <div className='middle-con'>
                <div className='block-con'>
                    <Newbies/>
                    <Beginners/>

                    <div className='advanced-block advanced-pad'>
                        <span className='hov'>ADVANCED</span>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main