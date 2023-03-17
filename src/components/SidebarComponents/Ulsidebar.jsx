//import de components*******************
import IconLupaSidebar from "./IconLupaSidebar"
import Icons from "./Icons"

import { dataIconsSector, dataIconsApto } from "../../JS/models/iconsSideBarModel"
import { busquedaApto, busquedaSector } from "../../JS/busquedaPorIconFunction"

export default function Ulsidebar({ ocultarSide, busquedas, setBusqueda }) {

    return (

        <ul className="ul-sidebar">

            <IconLupaSidebar
                busquedas={busquedas} setBusqueda={setBusqueda}
                ocultarSide={ocultarSide}
            />

            {
                dataIconsSector.map((item, i) => (

                    <Icons key={i}
                        src={item.src} alt={item.alt} name={item.name}
                        busquedas={busquedas} setBusqueda={setBusqueda}
                        functionBusqueda={busquedaSector}
                    />

                ))
            }

            {
                dataIconsApto.map((item, i) => (

                    <Icons key={i}
                        src={item.src} alt={item.alt} name={item.name}
                        busquedas={busquedas} setBusqueda={setBusqueda}
                        functionBusqueda={busquedaApto}
                    />

                ))
            }


        </ul>


    );
}