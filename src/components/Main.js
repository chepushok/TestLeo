import React, {useState} from 'react'
import '../styles/styles.css'
import Beginners from './Beginners'
const Main = () => {

    return (
        <main>
            <div className='middle-con'>
                <div className='block-con'>
                    <div className='newbies-block newbies-pad' >
                        <span>NEWBIES</span>
                    </div>

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