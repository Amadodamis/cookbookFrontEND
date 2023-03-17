
import { useRef } from "react"

import { deleteAcordion, estaFunction, addAcordion } from "../../../JS/acordionFunctions"

import DeleteIconTable from "./deleteIconTable"


function RecetaTable({ i, receta, recetasAcordion, setRecetasAcordion, dataFiltrada, setDataFiltrada, elementoEliminado, setElementoEliminado }) {



    const text = useRef(null)

    const agregarRecetaAcordion = (e) => {


        let estaLaReceta = estaFunction(recetasAcordion, receta.receta)

        estaLaReceta ?
            deleteAcordion(receta, recetasAcordion, setRecetasAcordion, text)
            :
            addAcordion(receta, recetasAcordion, setRecetasAcordion, text)

    }


    return (
        <div className="tr-table">
            <div className="td">

                <p className="text-table-recetas" onClick={agregarRecetaAcordion} ref={text}>
                    {
                        `${i + 1}) ${receta.receta}`
                    }
                </p>

                <DeleteIconTable
                    id={receta._id} setElementoEliminado={setElementoEliminado}
                />

            </div>
        </div>
    )
}

export default RecetaTable


/*





*/