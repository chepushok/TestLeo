import React from 'react'
import Data from './Data'
import {motion} from 'framer-motion'
import { AiOutlineArrowDown } from 'react-icons/ai';

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
    return(
        <>
            {Data.map((item,index)=>{
                return (
                    <motion.div initial='hidden' whileInView='visible' viewport={{amount: 0.35, once:true}} variants={textAnimation} className={'content' + ' ' + '.element-animation'}>
                        <div className='content-page'>
                            <h1 className='page-name'>
                                <div className='title'>{item.title}</div> <div className='dashes'>//</div>
                            </h1>
                            <div className={'post-text'} >
                                <div className='text'>
                                {item.post}
                                </div> 

                                <div className='more'>
                                    More
                                </div>
                            </div>

                            
                        </div>
                    </motion.div>
                )
            })}
      </>
    )
}

export default MoiPosti