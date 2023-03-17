import axios from "axios"
const url = "http://localhost:3001/api/recetas/"



export default function editRecipe(id, nuevaReceta, updateDataFiltrada, setUpdateDataFiltrada) {

    let url2 = `${url}${id}`

    axios.put(url2, nuevaReceta)
        .then(res => {
            console.log(res.data)
            //front end
            setUpdateDataFiltrada(true)

        })
        .catch(err => { console.log(err) })

}




