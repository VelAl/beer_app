import "./style.css"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { foodFiltring, sortBeer } from "../../functions/filters"
import { actions } from "../../store/actions"
import { beerSelector } from "../../store/reduser"
import { OneBeerCard } from "../oneBeerCard/OneBeerCard"
import { Header } from "../header"
import { Pagination } from '@material-ui/core'


export const Body = () => {
    const dispatch = useDispatch()
    const beer = useSelector(beerSelector)

    const [conditions, setConditions] = useState({
        pickedBtn: 'all',
        sort: '',
        page: 0,
    })

    const foodPairingBeer = foodFiltring(beer,conditions.pickedBtn)
    const sortedBeer = sortBeer(foodPairingBeer, conditions.sort)
    

    useEffect(()=>{
        dispatch(actions.getBeer())
    },[])


    return (
        <div>
            <Header
                conditions={conditions}
                setConditions={setConditions}
            />
            
            <div>
                <div className="beerWrapper">
                    {
                        sortedBeer.slice(conditions.page, conditions.page+10).map( beer =>  (
                            <OneBeerCard
                                key={beer.id}
                                props = {beer}
                            />)
                        )
                    }          
                </div>
                <div >
                    <Pagination
                     className='pagination' 
                     count={ Math.ceil(sortedBeer.length / 10) }
                     variant="outlined"
                     shape="rounded"
                     page={conditions.page/10 +1}
                     onChange={( _, skip)=>{
                        setConditions(prev=>({...prev, page: skip*10 - 10}))
                     }}
                    />
                </div>
            </div>
        </div>
    )

}