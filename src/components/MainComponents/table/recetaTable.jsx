import { addDeleteAccordion } from "../../../JS/acordionFunctions"
import DeleteIconTable from "./deleteIconTable"
import styleTable from "../../../JS/styleRecetaTable"

function RecetaTable({ i, nombreReceta, id, recetasAcordion, setRecetasAcordion, setUpdateDataFiltrada }) {

    const agregarRecetaAcordion = () => {
        addDeleteAccordion(recetasAcordion, setRecetasAcordion, id)
    }

    return (
        <div className="tr-table">
            <div className="td">

                <p className={styleTable(recetasAcordion,id)} onClick={agregarRecetaAcordion} >
                    {
                        `${i + 1}) ${nombreReceta}`
                    }
                </p>

                <DeleteIconTable
                    id={id} setUpdateDataFiltrada={setUpdateDataFiltrada}
                />

            </div>
        </div>
    )
}

export default RecetaTable