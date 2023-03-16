import trashIcon from "../../../img/trash.png"

import { busquedaApto } from "../../../JS/busquedaPorIconFunction"

export default function Apto({ filtroApto, busquedas, setBusqueda }) {


    const eliminarApto = (e) => {
        
        let icon = e.target.name
        busquedaApto(icon, busquedas, setBusqueda)
    }


    return (
        <div className='filter-sector'>

            <h3 className="filter-h3">Apto:</h3>

            {
                filtroApto.length > 0 &&

                filtroApto.map((apto, i) => (

                    <div className='box-filter' key={i}>
                        <span>{apto}</span>
                        <img src={trashIcon} alt={''} className='icon-trash' name={apto} onClick={eliminarApto} />
                    </div>
                ))
            }

        </div>
    )
}
