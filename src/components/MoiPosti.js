import React, { useState,useRef, useEffect } from 'react'
import Data from './Data'
import {motion} from 'framer-motion'
import { AiOutlineArrowDown } from 'react-icons/ai';
import { useSearchParams } from 'react-router-dom';

const textAnimation ={
    hidden: {
        opacity:0,
        y:20,
    },
    visible: {
        opacity:1,
        y:0,

    },
}


const MoiPosti = () =>{
    const myRef = useRef()
    const [fullPost,changeFullPost] = useState('post')
    const [check, setCheck] = useState(false)
    const addToRefs = (el) => {
        // console.log(el)
    }

    return(
        <>
            {Data.map((item,index)=>{
                return (
                    <div  className={'content'}>
                        <div ref={addToRefs} className='content-page'>
                            <h1 className='page-name'>
                                <div className='title'>{item.title}</div> <div className='dashes'>//</div>
                            </h1>
                            <div  className={'post-text'} >
                                <div className={'text'}>
                                    {item.post}
                                </div>
                                <button className='more' onClick={()=>{changeFullPost(item.postFull)}}>
                                    More
                                </button>
                            </div>

                            
                        </div>
                    </div>
                )
            })}
      </>
    )
}

export default MoiPosti