function aptoVegano({apto,uRef}) {

    
    return (
        <select name="sector" className="select"  defaultValue={apto} ref={uRef}>
            <option value={"VEGANO"}>Vegano</option>
            <option value={"NO VEGANO"}>No vegano</option>

        </select>
    )
}

export default aptoVegano