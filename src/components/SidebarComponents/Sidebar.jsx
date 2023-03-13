import "./sidebar.css"

import { useRef } from "react"


import Ulsidebar from "./Ulsidebar"
import Logo from "./Logo"

function Sidebar(props) {
    const { busquedas, setBusqueda } = props

    const sidebar = useRef(null)

    const ocultarSide = () => {
        sidebar.current.classList.toggle("active")
    }


    return (

        <div className="sidebar" ref={sidebar} >

            <Logo ocultarSide={ocultarSide}/>

            <Ulsidebar
                ocultarSide={ocultarSide}
                busquedas={busquedas} setBusqueda={setBusqueda}
            />

        </div>



    );
}

export default Sidebar;
