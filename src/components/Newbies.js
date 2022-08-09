import React, {useState} from 'react'



const Newbies = ()=>{

    let [isVisN, setVisN] = useState('sidetext-hide')
    let [bolkaN, setBolkaN] = useState(false)
    let [begHoverN, setBegHoverN] = useState(`begin-span`)

    return (
        <>
        <div className='newbies-block newbies-pad'>
            <span className={begHoverN} onMouseEnter={()=>{setBolkaN(true);setVisN('sidetext');;setBegHoverN('begin-span-hover')}} onMouseLeave={()=>{setVisN('sidetext-hide');setBegHoverN('begin-span')}} >NEWBIES</span>
        </div>
        <div className='upper-boxN' onMouseEnter={()=>bolkaN?(setVisN(isVisN + ' hover'),setBegHoverN('begin-span-hover')):setVisN('sidetext-hide')} onMouseLeave={()=>{setVisN('sidetext-hide');setBolkaN(false);setBegHoverN('begin-span')}}>
            <span className={isVisN}>IDE SETTING</span>
            <span className={isVisN}>SETUP GUIDES</span>
        </div>
        <div className='down-boxN' onMouseEnter={()=>bolkaN?setVisN((isVisN + ' hover'),setBegHoverN('begin-span-hover')):setVisN('sidetext-hide')} onMouseLeave={()=>{setVisN('sidetext-hide');setBolkaN(false);setBegHoverN('begin-span')}}>
            <span className={isVisN}>SETUP GUIDES</span>
            <span className={isVisN}>IDE SETTING</span>
        </div>
        </>
    )
}
export default Newbies