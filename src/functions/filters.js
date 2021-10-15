
export const foodFiltring = (arr, food)=> {
    if (food === 'all') return arr
    return arr.filter(beer=>beer.food_pairing.join(' ').includes(food))
}


export const sortBeer = (arr, type)=> {
    let newArr =[...arr]

    newArr.sort((a,b) => {
        switch (type) {
            case 'abv ascending': return a.abv - b.abv
            case 'abv descending': return b.abv - a.abv
            case 'name ascending': return a.name.toLowerCase() > b.name.toLowerCase() ?  1 : -1
            case 'name descending': return a.name.toLowerCase() < b.name.toLowerCase() ?  1 : -1
            default: return 0
        }
    })

    return newArr 
}