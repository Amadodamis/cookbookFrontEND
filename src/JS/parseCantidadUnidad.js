function parseCantidadUnidad(cant, unidad) {
    if (cant === 0) {
        return " ( c/n )"
    } else {
        return " ( " + cant+ " " + unidad + " )"
    }
}

export default parseCantidadUnidad