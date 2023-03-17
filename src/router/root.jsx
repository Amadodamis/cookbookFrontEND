import "../index.css"

import { useState } from 'react'
import { Outlet } from "react-router-dom"

import busquedaModelOBJ from "../JS/models/busquedaModel"
import Sidebar from '../components/SidebarComponents/Sidebar'
import Main from '../components/MainComponents/Main'
import AddRecipeButton from '../components/buttonAddRecipe/AddRecipeButton'


export default function Root() {

    const [busquedas, setBusqueda] = useState(busquedaModelOBJ)
    const [dataFiltrada, setDataFiltrada] = useState([])
    const [updateDataFiltrada, setUpdateDataFiltrada] = useState(false)

    return (
        <div className="App">

            <Outlet
                context={[updateDataFiltrada, setUpdateDataFiltrada]}
            />
            <AddRecipeButton />

            <Sidebar
                busquedas={busquedas} setBusqueda={setBusqueda} />

            <Main
                busquedas={busquedas} setBusqueda={setBusqueda}
                dataFiltrada={dataFiltrada} setDataFiltrada={setDataFiltrada}
                updateDataFiltrada={updateDataFiltrada} setUpdateDataFiltrada={setUpdateDataFiltrada}

            />


        </div>
    )
}

