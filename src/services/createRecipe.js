import axios from "axios"
const url = "http://localhost:3001/api/recetas"

export default function createRecipe(nuevaReceta, updateDataFiltrada, setUpdateDataFiltrada) {

    axios.post(url, nuevaReceta)
        .then(res => {
            console.log(res.data)
            //frontend
            setUpdateDataFiltrada(true)
        }

        )
        .catch(err => { console.log(err) })
}