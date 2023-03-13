function eliminarbusquedaFunction(eliminarDato,busquedas,setBusqueda) {
    if (busquedas.includes(eliminarDato)) {
        let nuevoArray = busquedas.filter(busq => busq !== eliminarDato)
        setBusqueda(nuevoArray)
    }
}

export default eliminarbusquedaFunction
