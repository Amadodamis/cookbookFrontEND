import "../index.css"

import { useState, useEffect } from 'react'
import { Outlet } from "react-router-dom"

import busquedaModel from "../JS/busquedaModel"
import Sidebar from '../components/SidebarComponents/Sidebar'
import Main from '../components/MainComponents/Main'
import AddRecipeButton from '../components/buttonAddRecipe/AddRecipeButton'


export default function Root() {

    const [busquedas, setBusqueda] = useState(busquedaModel)
    const [dataFiltrada, setDataFiltrada] = useState([])

    useEffect(() => {
        console.log("cambio busquedas")
    }, [busquedas])
    

    return (
        <div className="App">

            <Outlet
                context={[dataFiltrada, setDataFiltrada]}
            />
            <AddRecipeButton />

            <Sidebar
                busquedas={busquedas} setBusqueda={setBusqueda} />

            <Main
                busquedas={busquedas} setBusqueda={setBusqueda}
                dataFiltrada={dataFiltrada} setDataFiltrada={setDataFiltrada}

            />


        </div>
    )
}

