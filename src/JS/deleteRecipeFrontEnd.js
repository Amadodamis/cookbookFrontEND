export default function deleteRecipeFrontEnd(id, dataFiltrada, setDataFiltrada) {
    let nuevoArray = dataFiltrada.filter(receta => receta._id !== id)
    setDataFiltrada(nuevoArray)
}