import axios from "axios"
const url = "http://localhost:3001/api/recetas/"

export default function deleteRecipe(id) {

    let url2 = `${url}${id}`

    axios.delete(url2)
        .then(res => console.log(res))
        .catch(err => { console.log(err) })

}