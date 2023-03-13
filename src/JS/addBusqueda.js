export default function addbusqueda(busquedas, setBusqueda, nuevaBusqueda) {
    nuevaBusqueda = nuevaBusqueda.toUpperCase()
    if (nuevaBusqueda !== "") {
        if (busquedas.includes(nuevaBusqueda)) {
            alert("Ya se encuentra esa busqueda")
        } else {
            setBusqueda([...busquedas, nuevaBusqueda])
        }
    }
    else {
        alert("La busqueda esta vacia")
    }


}