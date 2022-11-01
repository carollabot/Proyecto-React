import "./Item.css"
import { Link } from 'react-router-dom'

const Item = ({id, name, img, precio, info}) => {

    return (
        <section className="card">
                <picture>
                    <img src={img} alt={name} className="card-img"/>
                 </picture>
                <div className="card-body">
                    <h5 className="card-title"> {name} </h5>
                    <p className="card-text">{info}</p>
                </div>
                <div className="card-price">
                    Precio: ${precio}
                    <div className="card-btn">
                    <Link to={`/detail/${id}`} className='Option'>Ver detalle</Link>
                    </div>
                </div>
                
        </section>



    )
}

export default Item