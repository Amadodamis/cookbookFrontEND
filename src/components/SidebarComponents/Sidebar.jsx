import "./sidebar.css"
import Ulsidebar from "./Ulsidebar"
import Logo from "./Logo"

import { useRef } from "react"


export default function Sidebar(props) {
    const { busquedas, setBusqueda } = props

    const sidebar = useRef(null)

    const ocultarSide = () => {
        sidebar.current.classList.toggle("active")
    }


    return (

        <div className="sidebar" ref={sidebar} >

            <Logo ocultarSide={ocultarSide} />


            <Ulsidebar
                ocultarSide={ocultarSide}
                busquedas={busquedas} setBusqueda={setBusqueda}
            />

        </div>



    );
}

