
import { useState } from "react"

import iconLupa from "../../img/buscar.png"
import SvgInput from "./svgInput"
import addbusqueda from "../../JS/addBusqueda"

function IconLupaSidebar(props) {

  const { ocultarSide, busquedas, setBusqueda } = props

  const [nuevaBusqueda, setNuevaBusqueda] = useState("")

  const handleChange = (e) => {
    const busqueda = e.target.value;
    setNuevaBusqueda(busqueda)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    addbusqueda(busquedas, setBusqueda, nuevaBusqueda)
  }


  return (
    <li>
      <img className="icons icono-lupa" src={iconLupa} alt={"lupa-icon"} onClick={ocultarSide} />
      <div className="group">

        <SvgInput />

        <form onSubmit={handleSubmit} >
          <input name="busqueda" placeholder="Buscar por ingredientes..." type="text" className="input-sidebar" onChange={handleChange} />
        </form>

      </div>
    </li>

  )
};

export default IconLupaSidebar;
