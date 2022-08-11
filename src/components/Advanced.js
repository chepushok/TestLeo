import React, {useState} from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";

const Newbies = ()=>{

    let [isVisA, setVisA] = useState('sidetext-hide')
    let [bolkaA, setBolkaA] = useState(false)
    let [begHoverA, setBegHoverA] = useState(`begin-span`)

    return (
        <div className='advanced-con'>
            <div className='wrapper'>
                <div className='upper-boxA' onMouseEnter={()=>bolkaA?(setVisA(isVisA + ' hover'),setBegHoverA('begin-span-hover')):setVisA('sidetext-hide')} onMouseLeave={()=>{setVisA('sidetext-hide');setBolkaA(false);setBegHoverA('begin-span')}}>
                    <span className={isVisA}>IDE SETTING</span>
                    <span className={isVisA}>SETUP GUIDES</span>
                </div>
            </div>
            <div className='advanced-block advanced-pad'>
            <Link to ='/Advanced'><span className={begHoverA} onMouseEnter={()=>{setBolkaA(true);setVisA('sidetext');;setBegHoverA('begin-span-hover')}} onMouseLeave={()=>{setVisA('sidetext-hide');setBegHoverA('advanced-span')}} >ADVANCED</span></Link>
            </div>
            <div className='wrapper'>
                <div className='down-boxA' onMouseEnter={()=>bolkaA?setVisA((isVisA + ' hover'),setBegHoverA('begin-span-hover')):setVisA('sidetext-hide')} onMouseLeave={()=>{setVisA('sidetext-hide');setBolkaA(false);setBegHoverA('begin-span')}}>
                    <span className={isVisA}>SETUP GUIDES</span>
                    <span className={isVisA}>IDE SETTING</span>
                </div>
            </div>
        </div>
    )
}
export default Newbies