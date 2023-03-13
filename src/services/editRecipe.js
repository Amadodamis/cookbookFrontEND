import axios from "axios"
const url = "http://localhost:3001/api/recetas/"



export default function editRecipe(id, nuevaReceta, dataFiltrada, setDataFiltrada) {

    let url2 = `${url}${id}`

    axios.put(url2, nuevaReceta)
        .then(res => {
            console.log(res.data)
            editRecipeFrontEnd(dataFiltrada, setDataFiltrada, id, nuevaReceta)

        })
        .catch(err => { console.log(err) })

}



function editRecipeFrontEnd(dataFiltrada, setDataFiltrada, id, nuevaReceta) {
    let nuevoArray = dataFiltrada.filter(receta => receta._id !== id)

    setDataFiltrada([...nuevoArray, nuevaReceta])
}
