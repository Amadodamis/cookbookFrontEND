import closeIcon from "../../img/close.png"
import { Link } from "react-router-dom"


function IconClose() {


    return (
        <div className="closeIcon">
            <div className='container-icon-modal'>
                <Link to="/"><img src={closeIcon} alt='icon-close' className="icon-close" /></Link>
            </div>
        </div>
    )
}

export default IconClose