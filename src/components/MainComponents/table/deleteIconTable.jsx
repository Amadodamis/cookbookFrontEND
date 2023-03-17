import deleteRecipe from '../../../services/deleteRecipe'
import deleteIcon from "../../../img/trash.png"

export default function DeleteIconTable({ id, setUpdateDataFiltrada }) {

    const borrarReceta = () => {

        if (window.confirm("Desea borrar la receta?")) {
            deleteRecipe(id)
            setUpdateDataFiltrada(true)
        }

    }

    return (
        <div className="container-icon-td">
            <img src={deleteIcon} alt={"add-icon"} className="icon-td" onClick={borrarReceta} />
        </div>
    )
}
