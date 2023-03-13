
import deleteRecipe from '../../../services/deleteRecipe'
import deleteIcon from "../../../img/trash.png"
import deleteRecipeFrontEnd from "../../../JS/deleteRecipeFrontEnd"

export default function DeleteIconTable({ id, dataFiltrada, setDataFiltrada }) {

    const borrarReceta = () => {
        if (window.confirm("Do you really want to leave?")) {
            deleteRecipe(id)
            deleteRecipeFrontEnd(id, dataFiltrada, setDataFiltrada)
        }
    }

    return (
        <div className="container-icon-td">
            <img src={deleteIcon} alt={"add-icon"} className="icon-td" onClick={borrarReceta} />
        </div>
    )
}
