function AptoCeliaco({apto,uRef}) {
    return (
        <select name="sector" className="select" defaultValue={apto} ref={uRef}>
            <option value={"CELIACO"} >Celiaco</option>
            <option value={"NO CELIACO"}>No celiaco</option>

        </select>
    )
}

export default AptoCeliaco