import axios from "axios"
import { parseArrayToString, parseSectorToString } from "../JS/parseArrayToString"

const url = "http://localhost:3001/api/recetas/filter/"


export async function getRecipesFiltered(busquedas) {


    let sector = parseSectorToString(busquedas.busquedasSector)
    let apto = parseArrayToString(busquedas.busquedasApto)
    let ingredientes = parseArrayToString(busquedas.busquedasIngredientes)

    let string = sector + apto + ingredientes

    let url2 = `${url}${string}`

    try {
        const res = await axios.get(url2)
        const recipes = await res.data
        return recipes
    }
    catch (error) {
        return error
    }

}
