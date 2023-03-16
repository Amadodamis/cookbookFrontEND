import trashIcon from "../../../img/trash.png"
import { eliminarIngredienteFilter } from "../../../JS/busquedaPorIconFunction";


export default function IngredientesFilter({ filtroIngredientes, busquedas, setBusqueda }) {


    const eliminarIngrediente = (e) => {
        let ingredienteAeliminar = e.target.name;
        eliminarIngredienteFilter(ingredienteAeliminar, busquedas, setBusqueda)
        
    }

    return (
        <div className='container-filter-ingredientes'>
            <h3 className="filter-h3">Ingredientes</h3>
            <div className='cnt-flt-ingredientes'>
                {
                    filtroIngredientes.length > 0 &&

                    filtroIngredientes.map((ingrediente, i) => (

                        <div className='box-filter' key={i}>
                            <span>{ingrediente}</span>
                            <img src={trashIcon} alt={'icon-trash'} className='icon-trash' name={ingrediente} onClick={eliminarIngrediente} />
                        </div>
                    ))
                }
            </div>


        </div>
    )
}
