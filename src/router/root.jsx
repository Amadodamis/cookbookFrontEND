import React from 'react'
import { useState } from 'react'
import { Outlet } from "react-router-dom"


import "../index.css"

import Sidebar from '../components/SidebarComponents/Sidebar'
import Main from '../components/MainComponents/Main'

import AddRecipeButton from '../components/buttonAddRecipe/AddRecipeButton'


export default function Root() {

    const [busquedas, setBusqueda] = useState([])
    const [dataFiltrada, setDataFiltrada] = useState([])

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


/*
 <Sidebar
                busquedas={busquedas} setBusqueda={setBusqueda} />

            <Main
                busquedas={busquedas} setBusqueda={setBusqueda}
                dataFiltrada={dataFiltrada} setDataFiltrada={setDataFiltrada}

            />


*/