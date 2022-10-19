import cart from "./Assets/cart.png"


const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt="cart" style={{height:40}} />
            0
        </div>
    )
}

export default CartWidget