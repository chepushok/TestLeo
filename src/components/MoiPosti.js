import React from 'react'
import Data from './Data'

const MoiPosti = () =>{
    console.log('jopa')
    return(
        <>
            {Data.map((item,index)=>{
                return (
                    <div className='content'>

                        <div className='content-page'>
                            <h1 className='page-name'>
                                <div className='title'>{item.title}</div> <div className='dashes'>//</div>
                            </h1>
                            <div className='post-text'>
                                {item.post} 
                            </div>
                            
                        </div>
                    </div>
                )
            })}
      </>
    )
}

export default MoiPosti