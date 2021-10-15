import React, { useState } from "react"
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons'
import "./style.css"


export const CollapsedText =({str})=>{
    const[collapsed,setCollapsed] =useState(true)

    return (
        (str.length <= 100) ?

            <div className="description">{str}</div>:
    
            collapsed ?
    
            <div className="collapsed">
                {str.slice(0 , 90)}...
                
                <button
                    onClick={()=>setCollapsed(!collapsed)}
                    className="collapseBtn"
                >        
                    more <CaretDownOutlined />;        
                </button>

            </div> :
    
            <div className="extended">
                 {str}
                <button onClick={()=>setCollapsed(!collapsed)} className="collapseBtn"><CaretUpOutlined /> </button>
            </div> 
    )
}