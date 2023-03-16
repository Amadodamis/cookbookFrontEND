export default function addbusqueda(busquedas, setBusqueda, nuevaBusquedaIngrediente) {
    nuevaBusquedaIngrediente = nuevaBusquedaIngrediente.toUpperCase()


    if (nuevaBusquedaIngrediente !== "") {
        if (busquedas.busquedasIngredientes.includes(nuevaBusquedaIngrediente)) {
            alert("Ya se encuentra esa busqueda")

        } else {
            setBusqueda(prevState => ({
                ...prevState,
                ["busquedasIngredientes"]: [...busquedas.busquedasIngredientes, nuevaBusquedaIngrediente]
            }))
        }
    }
    else {
        alert("La busqueda esta vacia")
    }


}
