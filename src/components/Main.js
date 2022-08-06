import React, {useState} from 'react'
import '../styles/styles.css'
const Main = () => {

    let [isVis, setVis] = useState('sidetext-hide')
    let [bolka, setBolka] = useState(false)
    
    return (
        <main>
            <div className='middle-con'>
                <div className='block-con'>
                    <div className='newbies-block newbies-pad' >
                        <span>NEWBIES</span>
                    </div>
                    <div className='beginners-block center'>
                    <div onMouseEnter={()=>{bolka?setVis('sidetext'):setVis('sidetext-hide')}} onMouseLeave={()=>{setVis('sidetext-hide'); setTimeout(()=>setBolka(false),4000)}} >
                        <span className={isVis}>IDE SETTING</span>
                        <span className={isVis}>SETUP GUIDES</span>
                    </div>
                        <span className='begin-span' onMouseEnter={()=>{setBolka(false);setVis('sidetext');setBolka(true)}} onMouseLeave={()=>{setVis('sidetext-hide')}} >BEGINNERS</span>
                    <div className='beginners-sidetext' >
                        <span className={isVis}>SETUP GUIDES</span>
                        <span className={isVis}>IDE SETTING</span>
                    </div>
                    </div>
                    <div className='advanced-block advanced-pad'>
                        <span>ADVANCED</span>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main