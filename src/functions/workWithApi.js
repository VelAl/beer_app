import axios from "axios"
import { actions } from "../store/actions"




const getBeerPerPage = async (page = 1)=> {
    const response = await axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${80}`)
    let newData = response.data.map(beer =>(
        {
            id: beer.id,
            name: beer.name,
            img: beer.image_url,
            abv: beer.abv,
            tag: beer.tagline,
            food_pairing: beer.food_pairing
        }
    ))
    return newData
}

export const getAllBeer = async (dispatch)=> {
    let data = []
    let length = 80
    let page = 1

    while (length === 80) {
        const beer = await getBeerPerPage(page)
        page = page + 1
        data = [...data,...beer]
        length = beer.length
    }
    dispatch(actions.setBeer(data))
}


export const getOneBeer = async(beerId) => {
    let {data} = await axios.get(`https://api.punkapi.com/v2/beers/${beerId}`)
    const [beer] = data
    

    return ({
        img: beer.image_url,
        name: beer.name,
        tag: beer.tagline,
        abv: beer.abv,
        descr: beer.description,
        foodpairing: beer.food_pairing,
    }) 
}