
import "./filters.css"
import { useEffect } from "react";


import Apto from "./Apto";
import Sector from "./Sector";
import IngredientesFilter from "./IngredientesFilter";

//import eliminarbusquedaFunction from "../../../JS/eliminarbusquedaFunction"

export default function Filters({ busquedas}) {


    return (
        <div className="busquedas">

            <Sector
                filtroSector={busquedas.busquedasSector}
                
            />
            <Apto
                filtroApto={busquedas.busquedasApto}
            />


            <IngredientesFilter
                filtroIngredientes={busquedas.busquedasIngredientes}
            />

        </div>
    );
}
