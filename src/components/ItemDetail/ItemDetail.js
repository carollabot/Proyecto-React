import './ItemDetail.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
// import ItemCount from '../ItemCount/ItemCount'

const InputCount = ({onConfirm, stock, initial= 1}) => {
    const [count, setCount] = useState(initial)

    const handleChange = (e) => {
        if(e.target.value <= stock) {
            setCount(e.target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}

const ButtonCount = ({ onConfirm, initial = 1 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        // if(count < stock) {
            setCount(count + 1)

    }

    const decrement = () => {
            setCount(count - 1)

    }

    return (
        <div>
            <p>{count}</p>
            <div >
                <button className='btn' onClick={decrement}>-</button>
                <button className='btn' onClick={increment}>+</button>
                <button className='btn' onClick={() => onConfirm(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}


const ItemDetail = ({ name, img, category, info, precio, cant }) => {
    const [inputType, setInputType] = useState('button')
    const [quantityToAdd, setQuantityToAdd] = useState(0)

    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity)
    }

    const Count = inputType === 'button' ? ButtonCount : InputCount

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
                                <Count onConfirm={handleOnAdd} stock={cant} />
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