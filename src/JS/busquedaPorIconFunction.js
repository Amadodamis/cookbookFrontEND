function busquedaSector(icon, busquedas, setBusqueda) {

    let estadoActualSector = busquedas.busquedasSector;
    if (estadoActualSector === "" || estadoActualSector !== icon) {
        setBusqueda(prevState => ({
            ...prevState,
            ["busquedasSector"]: icon
        }))
    }
    else {

        setBusqueda(prevState => ({
            ...prevState,
            ["busquedasSector"]: ""
        }))

    }
}

function deleteApto(aptoArray, icon) {
    let nuevoApto = aptoArray.filter(apto => apto !== icon)
    return nuevoApto
}



function busquedaApto(icon, busquedas, setBusqueda) {

    let apto = [...busquedas.busquedasApto]



    if (apto.includes(icon)) {

        let nuevoApto = deleteApto(apto, icon)

        setBusqueda(prevState => ({
            ...prevState,
            ["busquedasApto"]: [...nuevoApto]
        }))
    }
    else {
        setBusqueda(prevState => ({
            ...prevState,
            ["busquedasApto"]: [...busquedas.busquedasApto, icon]
        }))

    }

}

function eliminarIngredienteFilter(ingredienteAeliminar, busquedas, setBusqueda) {

    let nuevoArrayIngredientes = busquedas.busquedasIngredientes.filter(ingrediente => ingrediente !== ingredienteAeliminar)
    setBusqueda(prevState => ({
        ...prevState,
        ["busquedasIngredientes"]: [...nuevoArrayIngredientes]
    }))



}


export { busquedaApto, busquedaSector, eliminarIngredienteFilter }