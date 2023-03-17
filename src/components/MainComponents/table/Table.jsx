import "./table.css"


import { useEffect, useState } from "react"
import RecetaTable from "./recetaTable"
import setDataFiltradaFunction from "../../../JS/setDataFiltradaFunction"

function Table({ busquedas, recetasAcordion, setRecetasAcordion, dataFiltrada, setDataFiltrada }) {


  const [elementoEliminado, setElementoEliminado] = useState(false)

  useEffect(() => {
    setDataFiltradaFunction(busquedas, setDataFiltrada)
  }, [busquedas])


  useEffect(() => {
    if (elementoEliminado === true) {
      setDataFiltradaFunction(busquedas, setDataFiltrada)
      setElementoEliminado(false)
    }
  }, [elementoEliminado])



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
                  setElementoEliminado={setElementoEliminado}
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

