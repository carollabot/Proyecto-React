import './CartItem.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const CartItem = ({ id, name, quantity, precio }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <article className='CardCartItem'>
            <header className="HeaderCartItem">
                <h2 className="ItemHeaderCartItem">
                    {name}
                </h2>
            </header>
            <section className='ContainerItemCartItem'>
                <p className="InfoCartItem">
                    Cantidad: {quantity}
                </p>
                <p className="InfoCartItem">
                    Precio x Unidad: ${precio}
                </p>
            </section>           
            <footer className='ItemFooterCartItem'>
                 <p className="InfoCartItem">
                     Subtotal: ${precio * quantity}
                 </p>
                 <button className='ButtonCartItem' onClick={() => handleRemove(id)}>X</button>
            </footer>
        </article>
    )
}

export default CartItem