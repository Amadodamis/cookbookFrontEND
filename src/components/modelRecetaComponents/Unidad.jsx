function Unidad({uni}) {
    return (
        <select name="unidad" defaultValue={"C/N"} className="select" ref={uni}>
            <option value="C/N">c/n</option>
            <option value="KG">Kg</option>
            <option value="GR">Gr</option>
            <option value="LT">Lt</option>
            <option value="Ml">Ml</option>
            <option value="CDA">Cda</option>
            <option value="UNIDAD">Uni</option>
        </select>
    )
}

export default Unidad