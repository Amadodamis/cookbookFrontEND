function Tipo({ tipo, uRef }) {


    return (
        <select name="tipo" className="select" defaultValue={tipo} ref={uRef}>
            <option value="BUDIN" >Budin</option>
            <option value="CARNE" >Carne</option>
            <option value="CALDO" >Caldo</option>
            <option value="CRACKER" >Cracker</option>
            <option value="CREME BRULEE" >Creme brulee</option>
            <option value="CREMOSO" >Cremoso</option>
            <option value="DIP" >Dip</option>
            <option value="ENTRADA">Entrada</option>
            <option value="ESPESANTE">Espesante</option>
            <option value="GUARNICION">Guarnicion</option>
            <option value="MASA">Masa</option>
            <option value="MOUSSE">Mousse</option>
            <option value="PASTA" >Pasta</option>
            <option value="PAN">Pan</option>
            <option value="PLATO PRINCIPAL" >Plato Principal</option>
            <option value="POSTRE">Postre</option>
            <option value="PREPARACION" >Preparacion</option>
            <option value="RELLENO">Relleno</option>
            <option value="SALSA">Salsa</option>
            <option value="SCON">Scon</option>
            <option value="SOPA">Sopa</option>
            <option value="TARTA">Tarta</option>
            <option value="TORTA">Torta</option>
            <option value="QUESO">Queso</option>
        </select>

    )
}

export default Tipo