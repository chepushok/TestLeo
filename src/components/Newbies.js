import React, {useState} from 'react'

const Newbies = ()=>{

    let [isVis, setVis] = useState('sidetext-hide')
    let [bolka, setBolka] = useState(false)

    return (
        <>
        <div className='beginners-block center'>
            <span className='begin-span' onMouseEnter={()=>{setBolka(true);setVis('sidetext')}} onMouseLeave={()=>{setVis('sidetext-hide')}} ></span>
        </div>
        <div className='upper-box' onMouseEnter={()=>bolka?setVis(isVis + ' hover'):setVis('sidetext-hide')} onMouseLeave={()=>{setVis('sidetext-hide');setBolka(false)}}>
            <span className={isVis}>IDE SETTING</span>
            <span className={isVis}>SETUP GUIDES</span>
        </div>
        <div className='down-box' onMouseEnter={()=>bolka?setVis(isVis + ' hover'):setVis('sidetext-hide')} onMouseLeave={()=>{setVis('sidetext-hide');setBolka(false)}}>
            <span className={isVis}>SETUP GUIDES</span>
            <span className={isVis}>IDE SETTING</span>
        </div>
        </>
    )
}
export default Newbies