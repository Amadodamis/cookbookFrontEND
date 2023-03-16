
import trashIcon from "../../../img/trash.png"

export default function Sector({ filtroSector }) {

    

    return (
        <div className='filter-sector'>

            <h3 className="filter-h3">Sector:</h3>

            {
                filtroSector.length > 0 &&

                <div className='box-filter'>
                    <span>{filtroSector}</span>
                    <img src={trashIcon} alt={''} className='icon-trash' />
                </div>

            }






        </div>
    )
}
