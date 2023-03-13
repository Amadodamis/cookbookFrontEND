function TitleReceta({ placeholder, title, uRef }) {

    return (
        <div className='title-box-receta'>
            <textarea placeholder={placeholder} className="title-text-area" name="title" defaultValue={title} ref={uRef} />
        </div>

    )
}

export default TitleReceta