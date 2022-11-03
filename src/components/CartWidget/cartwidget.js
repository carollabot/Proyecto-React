import cart from "./Assets/cart.png"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {
    
    const { getTotalQuantity } = useContext(CartContext)

    const totalQuantity = getTotalQuantity()

    return (
        <Link to='/cart'>
            <div>
                <img src={cart} alt="cart" style={{height:40}} />
                {totalQuantity}
            </div>
        </Link>
    )
}

export default CartWidget