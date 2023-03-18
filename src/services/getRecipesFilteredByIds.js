import axios from "axios"
const url = "http://localhost:3001/api/recetas/filterId/"


export async function getRecipesFilteredById(stringIds) {


    let url2 = `${url}${stringIds}`

    try {
        const res = await axios.get(url2)
        const recipes = await res.data
        return recipes
    }
    catch (error) {
        return error
    }

}
