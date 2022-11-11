import { useState, createContext } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

/*
    
*/
    
      const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
          setCart([...cart, productToAdd])
        } 
      }
    
      const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
      }

      const removeItem = (id) => {
        const cartWithoutItem = cart.filter(prod => prod.id !== id)
        setCart(cartWithoutItem)
      }

    
    function clearCart () {
      return setCart ([])
    }

    function getTotalQuantity() {
      let totalQuantity = 0;
      cart.forEach((prod) => {
        totalQuantity += prod.quantity;
      });
      return totalQuantity;
    }

    function total () {
      return cart.reduce((acc, prod) => acc += prod.precio * prod.quantity , 0)
    }


    /*
    const getProductQuantity = (id) => {
      const product = cart.find(prod => prod.id === id)

      return product?.quantity
    }
    */

    return (
        <CartContext.Provider value={{ cart, clearCart, addItem, removeItem, getTotalQuantity, total}}>
            {children}
        </CartContext.Provider>
    )
}