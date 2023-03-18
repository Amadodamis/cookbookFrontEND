function styleTable(recetasAcordion, id) {
    let clase = "text-table-recetas"
    let active = "text-table-recetas activeAccordion"

    if (recetasAcordion.includes(id)) {
        return active
    } else {
        return clase
    }
}

export default styleTable