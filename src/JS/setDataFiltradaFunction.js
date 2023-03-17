import { getRecipesFiltered } from "../services/getRecipesFiltered"
import { loader } from "../services/getRecipes"



export default function setDataFiltradaFunction(busquedas, setDataFiltrada) {


    if (busquedas.busquedasIngredientes.length < 1 && busquedas.busquedasSector === "" && busquedas.busquedasApto.length < 1) {
        let nuevaData = loader()
        nuevaData.then(
            (recetas) => {
                setDataFiltrada(recetas)
            })

        setDataFiltrada(nuevaData)

    }

    else {
        let nuevaData = getRecipesFiltered(busquedas)
        nuevaData.then(
            (recetas) => {
                setDataFiltrada(recetas)
            })

    }
}