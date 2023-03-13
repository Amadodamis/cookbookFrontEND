function Procedimiento({ placeholder,procedimiento,uRef }) {


    return (
        <section className='procedimiento-model-receta'>
            <textarea placeholder={placeholder} className="text-area-receta-model" name="procedimiento" defaultValue={procedimiento} ref={uRef}/>
        </section>
    )
}

export default Procedimiento