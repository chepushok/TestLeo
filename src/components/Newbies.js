import React, {useState} from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";


const Newbies = ()=>{

    let [isVisN, setVisN] = useState('sidetext-hide')
    let [bolkaN, setBolkaN] = useState(false)
    let [begHoverN, setBegHoverN] = useState(`begin-span`)

    return (
        <div className='newbies-con'>
            <div className='wrapper'>
                <div className='upper-boxN' onMouseEnter={()=>bolkaN?(setVisN(isVisN + ' hover'),setBegHoverN('begin-span-hover')):setVisN('sidetext-hide')} onMouseLeave={()=>{setVisN('sidetext-hide');setBolkaN(false);setBegHoverN('begin-span')}}>
                    <span className={isVisN}>IDE SETTING</span>
                    <span className={isVisN}>SETUP GUIDES</span>
                </div>
                <div className='newbies-block newbies-pad'>
                    <Link to='/Newbies'><span className={begHoverN} onMouseEnter={()=>{setBolkaN(true);setVisN('sidetext');;setBegHoverN('begin-span-hover')}} onMouseLeave={()=>{setVisN('sidetext-hide');setBegHoverN('begin-span')}} >NEWBIES</span></Link>
                </div>
                <div className='wrapper'>
                    <div className='down-boxN' onMouseEnter={()=>bolkaN?setVisN((isVisN + ' hover'),setBegHoverN('begin-span-hover')):setVisN('sidetext-hide')} onMouseLeave={()=>{setVisN('sidetext-hide');setBolkaN(false);setBegHoverN('begin-span')}}>
                        <span className={isVisN}>SETUP GUIDES</span>
                        <span className={isVisN}>IDE SETTING</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Newbies