import "./table.css"


import { useEffect, useState } from "react"
import RecetaTable from "./recetaTable"
import setDataFiltradaFunction from "../../../JS/setDataFiltradaFunction"

function Table({ busquedas, recetasAcordion, setRecetasAcordion, dataFiltrada, setDataFiltrada, updateDataFiltrada, setUpdateDataFiltrada }) {



  useEffect(() => {
    setDataFiltradaFunction(busquedas, setDataFiltrada)
  }, [busquedas])


  useEffect(() => {
    if (updateDataFiltrada === true) {
      setDataFiltradaFunction(busquedas, setDataFiltrada)
      setUpdateDataFiltrada(false)
    }
  }, [updateDataFiltrada])



  let title = <div className="thead"><h1 className="th">Recetas</h1></div>
  let noRecipes = <p className="no-recipes-text"><i>No existen recetas</i></p>

  return (
    <div className="table">

      {title}

      <div className="tbody">

        {
          dataFiltrada.length ?
            (
              dataFiltrada.map((receta, i) => (
                <RecetaTable key={i}
                  id={receta._id} nombreReceta={receta.receta} i={i}
                  setUpdateDataFiltrada={setUpdateDataFiltrada}
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

