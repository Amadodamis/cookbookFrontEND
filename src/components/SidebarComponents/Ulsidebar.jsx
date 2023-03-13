//import de components*******************
import IconLupaSidebar from "./IconLupaSidebar"
import IconsSideBar from "./IconsSideBar"
import dataIcons from "../../JS/iconsSideBar"


function Ulsidebar(props) {


    const { ocultarSide, busquedas, setBusqueda } = props


    return (

        <ul className="ul-sidebar">

            <IconLupaSidebar
                busquedas={busquedas} setBusqueda={setBusqueda}
                ocultarSide={ocultarSide}
            />

            {
                dataIcons.map((item, i) => (

                    <IconsSideBar key={i}
                        src={item.src} alt={item.alt} name={item.name}
                        busquedas={busquedas} setBusqueda={setBusqueda}
                    />

                ))
            }

        </ul>


    );
}


export default Ulsidebar;
