function validacionNuevoIngrediente(nIngrediente, cant, uni) {
    let nuevoIngrediente
    if (nIngrediente !== "" && cant >= 0) {
        nuevoIngrediente = {
            ingrediente: nIngrediente,
            cantidad: cant,
            unidad: uni,
        }
        return nuevoIngrediente
    } else {
        if (nIngrediente === "") {
            return alert("Se debe agregar un nombre al ingrediente")

        }
        if (cant < 0) {
            return alert("No se permiten cantidades negativas")

        }
    }

}



export default validacionNuevoIngrediente