function Sector({ sector ,uRef}) {


    return (

        <select name="sector" className="select" defaultValue={sector} ref={uRef} >
            <option value="COCINA" >Cocina</option>
            <option value="PANADERIA">Panaderia</option>
            <option value="PASTELERIA" >Pasteleria</option>
            <option value="OTRO">Otro</option>
        </select>

    )
}

export default Sector