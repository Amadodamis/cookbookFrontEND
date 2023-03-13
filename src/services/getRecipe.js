import axios from "axios"
const url = "http://localhost:3001/api/recetas/"

export async function loader({ params }) {
    
    let urlId=`${url}${params.id}`


    try {
        const res = await axios.get(urlId)
        const recipe = await res.data
        return recipe
    }
    catch (error) {
        console.log(error)
    }

}