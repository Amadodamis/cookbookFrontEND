import deleteRecipe from '../../../services/deleteRecipe'
import deleteIcon from "../../../img/trash.png"

export default function DeleteIconTable({ id, setElementoEliminado }) {

    const borrarReceta = () => {

        if (window.confirm("Desea borrar la receta?")) {
            deleteRecipe(id)
            setElementoEliminado(true)
        }

    }

    return (
        <div className="container-icon-td">
            <img src={deleteIcon} alt={"add-icon"} className="icon-td" onClick={borrarReceta} />
        </div>
    )
}
