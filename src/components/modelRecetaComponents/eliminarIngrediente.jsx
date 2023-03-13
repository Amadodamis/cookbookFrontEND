import iconTrash from "../../img/trash.png"
import eliminarIngredienteFunction from "../../JS/eliminarIngFunction";

function EliminarIngrediente({ ingredientesArray, ing, setingredientesArray }) {

    const eliminar = (e) => {
        let ingredienteAEliminar = e.target.name;
        let nuevoArray = eliminarIngredienteFunction(ingredienteAEliminar,ingredientesArray)
        setingredientesArray(nuevoArray)
    }


    return (
        <div className='container-icon-trash-elim'>
            <img src={iconTrash} alt={"trash-icon"} className={'trashicon'} name={ing} onClick={eliminar} />
        </div>
    )
}

export default EliminarIngrediente