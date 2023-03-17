import axios from "axios"
const url = "http://localhost:3001/api/recetas"

export default function createRecipe(nuevaReceta, dataFiltrada, setDataFiltrada) {

    axios.post(url, nuevaReceta)
        .then(res => {
            console.log(res.data)
            //frontend
            //setDataFiltrada([...dataFiltrada,res.data])
        }

        )
        .catch(err => { console.log(err) })
}