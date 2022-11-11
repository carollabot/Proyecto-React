/*
import { useState, createContext } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    
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

    return (
        <CartContext.Provider value={{ cart, clearCart, addItem, removeItem, getTotalQuantity, total}}>
            {children}
        </CartContext.Provider>
    )
}

*/

import { useState, createContext } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    // const [totalQuantity, setTotalQuantity] = useState(0)
    console.log(cart)

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
          setCart([...cart, productToAdd])
        } else {
          console.log('ya esta agregado')
          const cartUpdated = cart.map(prod => {
            if(prod.id === productToAdd.id) {
              const productUpdated = {
                ...prod,
                quantity: productToAdd.quantity
              }

              return productUpdated
            } else {
              return prod
            }
          })

          setCart(cartUpdated)
        }
      }
    
      const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
      }
    
      const removeItem = (id) => {
        const cartWithoutItem = cart.filter(prod => prod.id !== id)
        setCart(cartWithoutItem)
      }

    //   useEffect(() => {
    //     const totalQuantity = getTotalQuantity()
    //     setTotalQuantity(totalQuantity)
    //   }, [cart])

     const getTotalQuantity = () => {
        let totalQuantity = 0

        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })

        return totalQuantity
    }

    function getItemPrice () {
      return cart.reduce((acc, data) => acc += data.precio * data.quantity , 0)
    }

    function clearCart () {
      return setCart ([])
    }
    
    const getProductQuantity = (id) => {
      const product = cart.find(prod => prod.id === id)

      return product?.quantity
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, getTotalQuantity, getProductQuantity, getItemPrice, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}
