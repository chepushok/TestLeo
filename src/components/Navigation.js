import React from 'react'
import Data from './Data'

const Navigation = () => { 
    return (
        Data.map((item,index) => {
            return (
                <div className={`section${index}`}>
                    {item.title}
                </div>
            )
        })
    )
}
        

export default Navigation