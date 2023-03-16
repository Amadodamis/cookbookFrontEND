import axios from "axios"
const url = "http://localhost:3001/api/recetas"

export async function loader() {
    try {
        const res = await axios.get(url)
        const recipes = await res.data
        return recipes
    }
    catch (error) {
        return error
    }

}


