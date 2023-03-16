
import trashIcon from "../../../img/trash.png"
import { busquedaSector } from "../../../JS/busquedaPorIconFunction"


export default function Sector({ filtroSector, busquedas, setBusqueda }) {

    const eliminarBusqueda = () => {
        busquedaSector(filtroSector, busquedas, setBusqueda)
    }

    return (
        <div className='filter-sector'>

            <h3 className="filter-h3">Sector:</h3>

            {
                filtroSector.length > 0 &&

                <div className='box-filter'>
                    <span>{filtroSector}</span>
                    <img src={trashIcon} alt={''} className='icon-trash' onClick={eliminarBusqueda} />
                </div>

            }

        </div>
    )
}
