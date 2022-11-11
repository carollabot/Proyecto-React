

/*
import './Cart.css'
import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'


const Cart = () => {
    
    const { cart, clearCart, total, removeItem} = useContext(CartContext)  

    const handleRemove = (id) => {
        removeItem(id)
    }
    
    if (cart.length === 0) {
        return <Link to='/'> <button className="CarritoVacio">Su carrito esta vacio... click para seguir comprando!</button> </Link>;
                
      } else {
        return (
            <div>
                <div className='CartView1'>
                    <h2> </h2>
                    <h2 className='CartViewPrice1'> Precio</h2>
                    <h2 className='CartViewCount1'> Cantidad</h2>
                    <h2 className='CartViewSuma1'> Suma</h2>
                </div>
                {cart.map((prod) => (
                    <div key={prod.id} className='CartView'>
                        
                        <h2 className='CartViewTitle'>{prod.name}</h2>
                        <h3 className='CartViewPrice'>${prod.precio}</h3>
                        <p className='CartViewCount'>{prod.quantity}</p>
                        <p className='CartViewSuma'> ${prod.precio * prod.quantity}</p>
                        <button className='CartViewDelete' onClick={() => handleRemove(prod.id)}>X</button>
                    </div>
                ))}
                <div>
                    <span className='CartViewTotal'> El total de su compra es = ${total()}</span>
                    <button className='CartViewDeleteAll' onClick={() => clearCart()} >Limpiar carrito</button>
                    <Link to='/checkout' className='Option'>Checkout</Link>
                </div>
                
            </div>
            
        );  
    }
}

export default Cart

*/

import './Cart.css'
import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, totalQuantity, getItemPrice} = useContext(CartContext)  

    if(totalQuantity === 0) {
        return (
            <h1>No hay items en el carrito</h1>
        )
    }

    return (     
        <div>
            <h1>Cart</h1>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${getItemPrice()}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <Link to='/checkout' className='Option'>Checkout</Link>
        </div>
    )
}

export default Cart