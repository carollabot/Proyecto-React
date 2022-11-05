import "./ItemList.css"
import Item from "../Item/Item"
import { memo } from "react"

const ItemList = ({products}) => {
    return (
        <div className='ItemList'>
            {products.map(product =>  <Item key={product.id} {...product} />)}
        
        </div>
    )
}

export default memo(ItemList)