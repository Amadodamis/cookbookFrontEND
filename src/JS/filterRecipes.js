import checkData from "./busqueda";

export default function filterRecipes(busquedas, dataFiltrada, setDataFiltrada, allRecipes) {


    if (busquedas.length === 0) {
        sortRecipes(allRecipes, setDataFiltrada)
    }
    else {
        let nuevoArray = allRecipes.filter(receta => checkData(receta, busquedas))
        sortRecipes(nuevoArray, setDataFiltrada)
    }

}


function sortRecipes(dataFiltrada, setDataFiltrada) {

    const arraySorted = dataFiltrada.sort(function (a, b) {
        if (a.receta.toLowerCase() < b.receta.toLowerCase()) { return -1; }
        if (a.receta.toLowerCase() > b.receta.toLowerCase()) { return 1; }
        return 0;
    })
    setDataFiltrada(arraySorted)
}
