

export const Header =({conditions, setConditions})=> {
    const btnTypes = ['all','pizza', 'steak']
    const {pickedBtn, sort} = conditions

    return(
    <>
        <div className="top">
        <div className="top-boards">
            {
                btnTypes.map(type=>
                    <div
                     key={type}
                     className={pickedBtn === type ? 'btn pickedBtn': 'btn'}
                     onClick={()=> 
                        setConditions(prev=>({...prev, pickedBtn: type , page: 0 })) 
                     }
                    >{type}</div>                    
                )
            }
            <div className="grow"></div> 
            <div>
                sort by: 

                <select 
                 onChange={(e)=>{
                    setConditions(prev=>({...prev, sort: e.target.value , page: 0 }))
                 }}
                 value = {sort}
                >
                    <option value=""></option>
                    <option value="abv ascending">abv ascending</option>
                    <option value="abv descending">abv descending</option>
                    <option value="name ascending">name ascending</option>
                    <option value="name descending">name descending</option>
                </select>   
            </div>            
        </div>
        </div>
    </>        
    )
}


