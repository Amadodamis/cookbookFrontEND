function Tipo({tipo, uRef}) {


    return (
        <select name="tipo" className="select" defaultValue={tipo} ref={uRef}>
            <option value="CARNE" >CARNE</option>
            <option value="CALDO" >CALDO</option>
            <option value="DIP" >Dip</option>
            <option value="ENTRADA">Entrada</option>
            <option value="MASA">Masa</option>
            <option value="PAN">Pan</option>
            <option value="PLATO PRINCIPAL" >Plato Principal</option>
            <option value="POSTRE">Postre</option>
            <option value="SALSA">Salsa</option>
            <option value="SOPA">Sopa</option>
            <option value="TORTA">Torta</option>
            <option value="OTRO">Otro</option>
        </select>

    )
}

export default Tipo