
import "./filters.css"


import Apto from "./Apto";
import Sector from "./Sector";
import IngredientesFilter from "./IngredientesFilter";


export default function Filters({ busquedas, setBusqueda }) {


    return (
        <div className="busquedas">

            <Sector
                filtroSector={busquedas.busquedasSector}
                busquedas={busquedas} setBusqueda={setBusqueda}

            />
            <Apto
                filtroApto={busquedas.busquedasApto}
                busquedas={busquedas} setBusqueda={setBusqueda}
            />


            <IngredientesFilter
                filtroIngredientes={busquedas.busquedasIngredientes}
                busquedas={busquedas} setBusqueda={setBusqueda}
            />

        </div>
    );
}
