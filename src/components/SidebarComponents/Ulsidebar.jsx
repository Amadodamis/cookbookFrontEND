//import de components*******************
import IconLupaSidebar from "./IconLupaSidebar"
import Icons from "./Icons"
import dataIcons from "../../JS/iconsSideBar"


export default function Ulsidebar(props) {


    const { ocultarSide, busquedas, setBusqueda } = props


    return (

        <ul className="ul-sidebar">

            <IconLupaSidebar
                busquedas={busquedas} setBusqueda={setBusqueda}
                ocultarSide={ocultarSide}
            />

            {
                dataIcons.map((item, i) => (

                    <Icons key={i}
                        src={item.src} alt={item.alt} name={item.name}
                        busquedas={busquedas} setBusqueda={setBusqueda}
                    />

                ))
            }

        </ul>


    );
}