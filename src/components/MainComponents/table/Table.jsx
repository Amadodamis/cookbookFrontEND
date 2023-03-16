import "./table.css"

import { useLoaderData } from "react-router-dom"
import { useEffect } from "react"

import RecetaTable from "./recetaTable"



function Table({ busquedas, recetasAcordion, setRecetasAcordion, dataFiltrada, setDataFiltrada }) {

  let allRecipes = useLoaderData()

  
    useEffect(() => {
      setDataFiltrada(allRecipes)
      //filterRecipes(busquedas, dataFiltrada, setDataFiltrada, allRecipes)
    }, [])
  

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

