import trashIcon from "../../../img/trash.png"

export default function IngredientesFilter({ filtroIngredientes }) {
    return (
        <div className='container-filter-ingredientes'>
            <h3 className="filter-h3">Ingredientes</h3>
            <div className='cnt-flt-ingredientes'>
                {
                    filtroIngredientes.length > 0 &&

                    filtroIngredientes.map((ingrediente, i) => (

                        <div className='box-filter' key={i}>
                            <span>{ingrediente}</span>
                            <img src={trashIcon} alt={''} className='icon-trash' />
                        </div>
                    ))
                }
            </div>


        </div>
    )
}
