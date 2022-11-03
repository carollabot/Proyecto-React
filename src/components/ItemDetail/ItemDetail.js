import './ItemDetail.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'


const ItemDetail = ({ id, name, img, category, info, precio, cant }) => {

    const [quantityToAdd, setQuantityToAdd] = useState(0)

    const { addItem } = useContext(CartContext)
    
    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity)
    
        const productToAdd = {
            id, name, precio, cant
        }

        addItem(productToAdd)
    }

    
    return (
        <div className='container'>
            <div>
                <picture>
                    <img src={img} alt={name} className="ItemImg"/>
                </picture>
            </div>
            <div className='info-container'>
                <article className="ItemCard">
                     <h2 className="ItemHeader">
                        PRODUCTO {name}
                    </h2>
                    <p className="Info">
                        Categoria: {category}
                    </p>
                    <section>
                        <p className="Info">
                            DETALLE DEL PRODUCTO:
                            {info}
                        </p>
                        <p className="precio">
                            Precio: ${precio}
                        </p>
                    </section>           
                    <footer>
                        {
                            quantityToAdd === 0 ? (
                                <ItemCount onAdd={handleOnAdd} stock={cant} />
                            ) : (
                                <Link className='btn' to='/cart'>Finalizar compra</Link>
                            )
                        }
                    </footer>
                </article>
             </div>
        </div>
    )
}

export default ItemDetail