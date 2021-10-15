import { useState } from "react"
import { WholeBeerCard } from "../compliteBeerCard/CompliteCard"
import "./style.css"



export  const OneBeerCard = ({props}) =>{

    const [visible, setVisible] = useState(false)

    return (
        <>
            <div className="cardWrapper" onClick={()=>{setVisible(true)}}>
                
                <div className="infowrapper" >
                    <div className="name">
                        {props.name}
                    </div>
                    
                    <div className="imgWrapper" >
                        <img src={props.img} alt=""/>
                    </div >
                    
                    <div className="abv"><b>ABV </b> {props.abv}%</div>
                </div>
            </div>

            {visible && ( <WholeBeerCard
                id = {props.id}
                setVisible = {setVisible}
            /> )}
        </>
    )
}

