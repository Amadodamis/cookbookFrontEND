import "./table.css"

import { useLoaderData } from "react-router-dom"
import { useEffect } from "react"

import filterRecipes from "../../../JS/filterRecipes"
import RecetaTable from "./recetaTable"



function Table({ busquedas, recetasAcordion, setRecetasAcordion, dataFiltrada, setDataFiltrada }) {

  let allRecipes = useLoaderData()

  useEffect(() => {
    filterRecipes(busquedas, dataFiltrada, setDataFiltrada, allRecipes)
  }, [busquedas])
  
  


  return (
    <div className="table">

      <div className="thead">
        <p className="th">Recetas</p>
      </div>

      <div className="tbody">

        {
          dataFiltrada.length ?
            (
              dataFiltrada.map((item, i) => (
                <RecetaTable key={i}
                  receta={item} i={i}
                  dataFiltrada={dataFiltrada} setDataFiltrada={setDataFiltrada}
                  recetasAcordion={recetasAcordion} setRecetasAcordion={setRecetasAcordion}
                  

                />
              ))
            )
            :
            (
              <p>
                <i>No existen recetas</i>
              </p>
            )}

      </div>

    </div>

  );
}

export default Table

