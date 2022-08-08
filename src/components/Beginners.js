import React, {useState} from 'react'

const Beginners = ()=>{

    let [isVisB, setVisB] = useState('sidetext-hide')
    let [bolkaB, setBolkaB] = useState(false)
    let [begHover, setBegHover] = useState(`begin-span`)

    return (
        <>
        <div className='beginners-block center'>
            <span className={begHover} onMouseEnter={()=>{setBolkaB(true);setVisB('sidetext');setBegHover('begin-span-hover')}} onMouseLeave={()=>{setVisB('sidetext-hide');setBegHover('begin-span')}} >BEGINNERS</span>
        </div>
        <div className='upper-box' onMouseEnter={()=>bolkaB?(setVisB(isVisB + ' hover'),setBegHover('begin-span-hover')):setVisB('sidetext-hide')} onMouseLeave={()=>{setVisB('sidetext-hide');setBolkaB(false);setBegHover('begin-span')}}>
            <span className={isVisB}>IDE SETTING</span>
            <span className={isVisB}>SETUP GUIDES</span>
        </div>
        <div className='down-box' onMouseEnter={()=>bolkaB?setVisB((isVisB + ' hover'),setBegHover('begin-span-hover')):setVisB('sidetext-hide')} onMouseLeave={()=>{setVisB('sidetext-hide');setBolkaB(false);setBegHover('begin-span')}}>
            <span className={isVisB}>SETUP GUIDES</span>
            <span className={isVisB}>IDE SETTING</span>
        </div>
        </>
    )
}
export default Beginners