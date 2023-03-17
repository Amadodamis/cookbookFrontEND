import "./table.css"

import { useLoaderData } from "react-router-dom"
import { useEffect } from "react"
import RecetaTable from "./recetaTable"
import { getRecipesFiltered } from "../../../services/getRecipesFiltered"

function Table({ busquedas, recetasAcordion, setRecetasAcordion, dataFiltrada, setDataFiltrada }) {

  const allRecipes = useLoaderData()


  useEffect(() => {

    if (busquedas.busquedasIngredientes.length < 1 && busquedas.busquedasSector == "" && busquedas.busquedasApto.length < 1) {
      console.log("all recipes")
      setDataFiltrada(allRecipes)
    }
    else {
      console.log("filtradas")
      let nuevaData = getRecipesFiltered(busquedas)
      nuevaData.then(
        (recetas) => {
          setDataFiltrada(recetas)
        })

    }
  }, [busquedas])


  let title = <div className="thead"><h1 className="th">Recetas</h1></div>
  let noRecipes = <p className="no-recipes-text"><i>No existen recetas</i></p>

  return (
    <div className="table">

      {title}

      <div className="tbody">

        {
          dataFiltrada.length ?
            (
              dataFiltrada.map((item, i) => (
                <RecetaTable key={i}
                  receta={item} i={i}
                  allRecipes={dataFiltrada} setDataFiltrada={setDataFiltrada}
                  recetasAcordion={recetasAcordion} setRecetasAcordion={setRecetasAcordion}


                />
              ))
            )
            :

            (noRecipes)

        }

      </div>

    </div>

  );
}

export default Table

