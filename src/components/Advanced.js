import React, {useState} from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";


const Newbies = ()=>{

    let [isVisA, setVisA] = useState('sidetext-hide')
    let [bolkaA, setBolkaA] = useState(false)
    let [begHoverA, setBegHoverA] = useState(`begin-span`)

    return (
        <>
        <div className='advanced-block advanced-pad'>
            <span className={begHoverA} onMouseEnter={()=>{setBolkaA(true);setVisA('sidetext');;setBegHoverA('begin-span-hover')}} onMouseLeave={()=>{setVisA('sidetext-hide');setBegHoverA('advanced-span')}} >ADVANCED</span>
        </div>
        <div className='upper-boxN' onMouseEnter={()=>bolkaA?(setVisA(isVisA + ' hover'),setBegHoverA('begin-span-hover')):setVisA('sidetext-hide')} onMouseLeave={()=>{setVisA('sidetext-hide');setBolkaA(false);setBegHoverA('begin-span')}}>
            <span className={isVisA}>IDE SETTING</span>
            <span className={isVisA}>SETUP GUIDES</span>
        </div>
        <div className='down-boxN' onMouseEnter={()=>bolkaA?setVisA((isVisA + ' hover'),setBegHoverA('begin-span-hover')):setVisA('sidetext-hide')} onMouseLeave={()=>{setVisA('sidetext-hide');setBolkaA(false);setBegHoverA('begin-span')}}>
            <span className={isVisA}><Link to='/beginners'>SETUP GUIDES </Link></span>
            <span className={isVisA}>IDE SETTING</span>
        </div>
        </>
    )
}
export default Newbies