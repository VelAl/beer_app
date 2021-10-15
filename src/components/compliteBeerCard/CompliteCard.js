import { useState, useEffect } from "react"
import { getOneBeer } from "../../functions/workWithApi"
import { CollapsedText } from "../collapsedText/CollapsedText"
import "./style.css"

export const WholeBeerCard = ({id, setVisible})=> {

    const[beerData, setBeerData] = useState({
        img: '',
        name: '',
        tag: '',
        abv: 0,
        descr: '',
        foodpairing: '',
    })

    useEffect(()=>{
        getOneBeer(id)
        .then(setBeerData)
    },[id])

    return (
        <div className="overlay" onClick={()=>setVisible(false)            }>
            <div className="card" onClick={(e)=>e.stopPropagation()}>
                <div className="nam">
                    <div>{beerData.name}</div>
                    <button onClick={()=>{setVisible(false)}}>X</button>
                </div>
                <div>{beerData.tag}</div>

                <div className="imageDiv">
                    <img src={beerData.img} alt=""/>
                    <div className="ABV"><b>{beerData.abv}% ABV</b></div>
                </div>

                <CollapsedText
                    str={beerData.descr}
                />
                
                <div className='foodpairing'>foodpairing:</div>
                <CollapsedText
                    str={beerData.foodpairing}
                /> 
            </div >
        </div>    
    )
}