
import "./filters.css"
import trashIcon from "../../../img/trash.png"
import eliminarbusquedaFunction from "../../../JS/eliminarbusquedaFunction"

function Filters({ busquedas, setBusqueda }) {

    const eliminarBusqueda = (e) => {
        eliminarbusquedaFunction(e.target.name, busquedas, setBusqueda)
    }

    return (
        <div className="busquedas">
            {busquedas.length ?
                (
                    busquedas.map((item, i) => (
                        <div className="box-item" key={i} >
                            <p className="text-box">{item}</p>
                            <div className="container-trash">
                                <img className="icon-trash" src={trashIcon} alt={"trash-icono"} name={item} onClick={eliminarBusqueda} />
                            </div>
                        </div>
                    ))
                )
                :
                (
                    <div className="box-item"  >
                        <p className="text-box">Sin filtros</p>
                    </div>
                )
            }
        </div>
    );
}

export default Filters;