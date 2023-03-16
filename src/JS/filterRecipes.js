import checkData from "./busqueda";

export default function filterRecipes(busquedas, dataFiltrada, setDataFiltrada, allRecipes) {


    if (busquedas.length === 0) {
        setDataFiltrada(allRecipes)
    }
    else {
        let nuevoArray = allRecipes.filter(receta => checkData(receta, busquedas))
        setDataFiltrada(nuevoArray)
    }

}