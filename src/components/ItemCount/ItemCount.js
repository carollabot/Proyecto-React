
import { useState } from 'react'

const ItemCount = ({stock = 0, initial = 1, onAdd})=> {
   const [quantity, setQuantity] = useState(initial)

   const increment = () => {
       if(quantity < stock) {
           setQuantity(quantity+1)
       }
   }

   const decrement = () => {
       if(quantity > 1) {
           setQuantity(quantity - 1)
       }     
   }

   return(
       <div>          
            <div className='controlBtn'>
                <button className="btn" onClick={decrement}>-</button>
                <h4>{quantity}</h4>
                <button className="btn" onClick={increment}>+</button>
            </div>
            <div>
                <button className="btn" onClick={() => onAdd(quantity)}>Agregar al carrito</button>
            </div>
       </div>
   )

}
export default ItemCount